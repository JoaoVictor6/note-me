import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import * as path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      fastRefresh: !(process.env.NODE_ENV === 'test')
    })
  ],
  resolve: {
    alias: {
      "@style": path.resolve(__dirname, "./src/style/"),
      "@assets": path.resolve(__dirname, "./src/assets/"),
      "@services": path.join(__dirname, "./src/services/"),
      "@components": path.join(__dirname, "./src/components/"),
      "@hooks": path.join(__dirname, "./src/hooks/")
    }
  },
  css: {
    postcss: "./postcss.config.js"
  }
})
