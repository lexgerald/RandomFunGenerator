import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        favorites: resolve(__dirname, "favorites.html"),
        about: resolve(__dirname, "about.html"),
      },
    },
  },
});