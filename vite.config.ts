import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.DEPLOY_ENV === "GH_PAGES" ? "/tap-and-memorize/" : "/",
  plugins: [react()]
})
