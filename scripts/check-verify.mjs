import { existsSync, readdirSync, readFileSync, statSync } from "node:fs";
import { dirname, join, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const MARKER = "VERIFY";

const projectRoot = resolve(dirname(fileURLToPath(import.meta.url)), "..");
const scanRoot = process.argv[2] ? resolve(process.argv[2]) : join(projectRoot, "src");

function* walk(dir) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) yield* walk(full);
    else if (entry.isFile()) yield full;
  }
}

function display(file) {
  return relative(projectRoot, file).split("\\").join("/");
}

if (!existsSync(scanRoot) || !statSync(scanRoot).isDirectory()) {
  console.error(`check:verify: cannot scan, directory not found: ${scanRoot}`);
  process.exit(2);
}

const hits = [];
let fileCount = 0;

for (const file of walk(scanRoot)) {
  fileCount += 1;
  const buffer = readFileSync(file);
  if (!buffer.includes(MARKER)) continue;
  buffer
    .toString("utf8")
    .split(/\r\n|\r|\n/)
    .forEach((line, index) => {
      if (line.includes(MARKER)) {
        hits.push({ file: display(file), line: index + 1, text: line.trim() });
      }
    });
}

if (hits.length === 0) {
  console.log(`check:verify: OK. No ${MARKER} markers in ${fileCount} file(s) under ${display(scanRoot)}.`);
  process.exit(0);
}

const report = hits.map((hit) => `  ${hit.file}:${hit.line}  ${hit.text}`).join("\n");

if (process.env.ALLOW_VERIFY === "1") {
  console.warn(
    `check:verify: ${hits.length} ${MARKER} marker(s) found, ALLOW_VERIFY=1 is set. Local preview only; do not deploy this build.\n${report}`,
  );
  process.exit(0);
}

console.error(
  `check:verify: FAILED. ${hits.length} unresolved ${MARKER} marker(s). Resolve them or remove the claim.\n${report}`,
);
process.exit(1);
