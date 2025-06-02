import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

import { screenGraphPlugin } from "@animaapp/vite-plugin-screen-graph";

export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
});


