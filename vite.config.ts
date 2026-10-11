import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // Relative asset paths so the build works under a GitHub Pages sub-path (/<repo>/)
  base: './',
  plugins: [react(), tailwindcss()],
})
