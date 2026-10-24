import { cloudflare } from "@cloudflare/vite-plugin";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react(), cloudflare()],
  css: {
    preprocessorOptions: {
      less: { paths: [resolve(import.meta.dirname, "src/styles")] },
    },
  },
});
