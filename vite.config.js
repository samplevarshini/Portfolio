

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import replace from "@rollup/plugin-replace";

export default defineConfig({
  plugins: [
    react(),
    replace({
      // Replace environment variable placeholders with actual values
      "process.env.VITE_API_KEY": JSON.stringify(process.env.VITE_API_KEY),
      "process.env.VITE_BASE_URL": JSON.stringify(process.env.VITE_BASE_URL),
    }),
  ],
  server:{
    port:3000
  },
  base:"/Portfolio/"
});

