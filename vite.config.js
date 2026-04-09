import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/azazelyash.github.io/', // replace 'portfolio' with your exact GitHub repo name
})
