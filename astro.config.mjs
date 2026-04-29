// @ts-check
import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";

import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://solokhin.dev",
  adapter: cloudflare(),

  vite: {
    plugins: [tailwindcss()],
  },
});
