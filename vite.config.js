import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Avoid chunk size warning for this demo (large deps: three, framer-motion, etc.)
    chunkSizeWarningLimit: 1600,
  },
})
