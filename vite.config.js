import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/React_VITE_CICD_Github/",
  server:{
    open: true,
    port: 3000,

  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/test.js",
  },
});