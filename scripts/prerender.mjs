import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname, join, resolve } from "node:path";
import { pathToFileURL } from "node:url";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const distSsr = join(root, "dist-ssr");
const config = JSON.parse(await readFile(join(root, "site.config.json"), "utf8"));

const rawBase = process.env.SITE_BASE ?? config.base;
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
const origin = (process.env.SITE_ORIGIN ?? config.origin).replace(/\/$/, "");

const server = await import(pathToFileURL(join(distSsr, "entry-server.js")).href);
const template = await readFile(join(dist, "index.html"), "utf8");

const escapeHtml = (text) =>
  text.replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;");

function replaceOnce(source, search, replacement, label) {
  const count = source.split(search).length - 1;
  if (count !== 1) throw new Error(`prerender: expected exactly one ${label} in dist/index.html, found ${count}`);
  return source.replace(search, () => replacement);
}

const publicUrl = (path) => (path === "/" ? `${origin}${base}` : `${origin}${base}${path.slice(1)}/`);

function page({ path, title, description, noindex }) {
  const head = [`<title>${escapeHtml(title)}</title>`];
  if (description) head.push(`<meta name="description" content="${escapeHtml(description)}" />`);
  if (noindex) head.push(`<meta name="robots" content="noindex" />`);
  else if (origin) head.push(`<link rel="canonical" href="${publicUrl(path)}" />`);

  let html = replaceOnce(template, "<title>PhishGuard</title>", head.join("\n    "), "<title>");
  const markup = server.render(path);
  if (!markup.includes("<h1")) throw new Error(`prerender: ${path} rendered without an h1`);
  html = replaceOnce(html, '<div id="root"></div>', `<div id="root">${markup}</div>`, "empty root");
  return html;
}

async function write(file, content) {
  await mkdir(dirname(file), { recursive: true });
  await writeFile(file, content, "utf8");
}

for (const path of server.routes) {
  const title = server.pageTitles[path];
  const description = server.pageDescriptions[path];
  if (!title || !description) throw new Error(`prerender: ${path} has no title or description in src/content/site.js`);
  const file = path === "/" ? join(dist, "index.html") : join(dist, path.slice(1), "index.html");
  await write(file, page({ path, title, description }));
}

await write(join(dist, "404.html"), page({ path: "/page-not-found", title: server.pageTitles.notFound, noindex: true }));

if (origin) {
  const urls = server.routes.map((path) => `  <url><loc>${publicUrl(path)}</loc></url>`).join("\n");
  await write(
    join(dist, "sitemap.xml"),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>\n`,
  );
  const robots = await readFile(join(dist, "robots.txt"), "utf8");
  await write(join(dist, "robots.txt"), `${robots.trimEnd()}\nSitemap: ${origin}${base}sitemap.xml\n`);
}

await write(join(dist, ".nojekyll"), "");
await rm(distSsr, { recursive: true, force: true });

console.log(`prerender: ${server.routes.length} routes + 404.html written (base ${base}${origin ? `, origin ${origin}` : ", no origin"})`);
