import { readFileSync } from "node:fs";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const siteConfig = JSON.parse(readFileSync(new URL("./site.config.json", import.meta.url), "utf8"));

export default defineConfig(({ command, isPreview }) => ({
  base: command === "build" || isPreview ? process.env.SITE_BASE ?? siteConfig.base : "/",
  plugins: [react()],
}));
