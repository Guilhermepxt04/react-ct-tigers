// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import sitemap from 'vite-plugin-sitemap'
import { imagetools } from 'vite-imagetools'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // gera versões redimensionadas das imagens (ex.: foto.webp?w=480;960&as=metadata)
    imagetools(),
    sitemap({
      hostname: 'https://www.kravmagatigers.com.br'
    })
  ],
})
