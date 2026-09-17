import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "127.0.0.1",
    port: 3000,
    open: true,
    proxy: {
      "/login": { target: "http://127.0.0.1:5000", changeOrigin: true },
      "/register": { target: "http://127.0.0.1:5000", changeOrigin: true },
      "/logout": { target: "http://127.0.0.1:5000", changeOrigin: true },
      "/request": { target: "http://127.0.0.1:5000", changeOrigin: true },
      "/requests": { target: "http://127.0.0.1:5000", changeOrigin: true }
    }
  },
  build: {
    outDir: "dist",
    sourcemap: true
  }
});
