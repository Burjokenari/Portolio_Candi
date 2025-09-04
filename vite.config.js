import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      '0f7b77e67da7.ngrok-free.app' // host ngrok kamu
    ]
  }
})

