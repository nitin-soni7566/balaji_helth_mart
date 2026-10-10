import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { defineConfig } from 'vite'

// Temporary: ngrok tunnel used for sharing the preview. Remove when no longer needed.
const allowedHosts = ['3b3d-168-144-93-212.ngrok-free.app']

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: { allowedHosts },
  preview: { allowedHosts },
})
