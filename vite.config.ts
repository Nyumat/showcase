import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [tailwindcss("./tailwind.config.js")],
    },
  },
  assetsInclude: [
    "**/*.jpg",
    "**/*.JPG",
    "**/*.PNG",
    "**/*.png",
    "**/*.svg",
    "**/*.gif",
    "**/*.mp4",
    "**/*.webm",
    "**/*.ogg",
    "**/*.mp3",
    "**/*.wav",
    "**/*.flac",
    "**/*.aac",
    "**/*.woff2",
    "**/*.woff",
    "**/*.eot",
    "**/*.ttf",
    "**/*.otf",
    "**/*.ico",
    "**/*.pdf",
  ],
});
