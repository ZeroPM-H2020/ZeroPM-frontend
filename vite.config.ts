import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/",
  plugins: [react()],
  test: {
    environment: "node",
    globals: true,
  },
  preview: {
    port: 8080,
    strictPort: true,
   },
  server: {
    port: 8080,
    strictPort: true,
    host: true,
    origin: "http://0.0.0.0:8080",
    cors: false,
    proxy: {
      "/zeropm": {
        target: "https://datasette.zeropm.eu",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/zeropm/, ""),
      },
    },
  },
});
