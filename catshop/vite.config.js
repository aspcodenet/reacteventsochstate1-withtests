import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    // 👋 add the line below to add jsdom to vite
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/tests/setup.js',
   },
})
