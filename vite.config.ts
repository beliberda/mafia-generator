import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
  root: "./",
  base: "./",
  optimizeDeps: {
    entries: [],
  },
  build: {
    rollupOptions: {
      treeshake: true,
      input: {
        main: path.resolve(__dirname, "index.html"),
      },
      output: {
        dir: "./build",
        // entryFileNames: 'bundle.js',
        // format: 'esm'
      },
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@assets": path.resolve(__dirname, "./src/assets"),
      "@components": path.resolve(__dirname, "./src/components"),
    },
  },
  plugins: [react()],
});
