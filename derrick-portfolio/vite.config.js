import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  server: {
    // the design kit's checker writes reports and browser profiles under .taste-skill: never reload on them
    watch: { ignored: ['**/.taste-skill/**'] },
    // Forward API calls to the Flask backend during local development
    proxy: {
      '/api': 'http://127.0.0.1:5001',
    },
  },
})
