import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.jpg',  '**/*.JPG', '**/*.PNG',  '**/*.png', '**/*.svg', '**/*.gif', '**/*.mp4', '**/*.webm', '**/*.ogg', '**/*.mp3', '**/*.wav', '**/*.flac', '**/*.aac', '**/*.woff2', '**/*.woff', '**/*.eot', '**/*.ttf', '**/*.otf', '**/*.ico', '**/*.pdf']

})
