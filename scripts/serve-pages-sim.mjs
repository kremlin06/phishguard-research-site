import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize, resolve, sep } from "node:path";

const root = resolve(import.meta.dirname, "..");
const dist = join(root, "dist");
const config = JSON.parse(await readFile(join(root, "site.config.json"), "utf8"));
const rawBase = process.env.SITE_BASE ?? config.base;
const base = rawBase.endsWith("/") ? rawBase : `${rawBase}/`;
const port = Number(process.argv[2] ?? 4180);

const types = {
  ".html": "text/html; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".txt": "text/plain; charset=utf-8",
  ".xml": "application/xml",
};

const kind = async (file) => {
  try {
    const info = await stat(file);
    return info.isDirectory() ? "dir" : "file";
  } catch {
    return null;
  }
};

async function send(response, status, file, extra = {}) {
  const body = await readFile(file);
  response.writeHead(status, { "Content-Type": types[extname(file)] ?? "application/octet-stream", ...extra });
  response.end(body);
}

createServer(async (request, response) => {
  const url = new URL(request.url, `http://localhost:${port}`);
  const pathname = decodeURIComponent(url.pathname);
  try {
    if (!pathname.startsWith(base) && pathname !== base.slice(0, -1)) {
      response.writeHead(404, { "Content-Type": "text/plain" });
      response.end("404: outside the project path");
      return;
    }
    if (pathname === base.slice(0, -1)) {
      response.writeHead(301, { Location: base });
      response.end();
      return;
    }
    const relative = normalize(pathname.slice(base.length));
    const target = join(dist, relative);
    if (target !== dist && !target.startsWith(dist + sep)) {
      response.writeHead(403);
      response.end();
      return;
    }

    const found = await kind(target);
    if (found === "file") return await send(response, 200, target);
    if (found === "dir" && (await kind(join(target, "index.html"))) === "file") {
      if (!pathname.endsWith("/")) {
        response.writeHead(301, { Location: `${pathname}/${url.search}` });
        response.end();
        return;
      }
      return await send(response, 200, join(target, "index.html"));
    }
    if (!pathname.endsWith("/") && (await kind(`${target}.html`)) === "file") return await send(response, 200, `${target}.html`);

    return await send(response, 404, join(dist, "404.html"));
  } catch (error) {
    response.writeHead(500, { "Content-Type": "text/plain" });
    response.end(String(error));
  }
}).listen(port, () => console.log(`GitHub Pages simulation: http://localhost:${port}${base}`));
