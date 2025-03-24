import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import { env } from 'process'

// https://vite.dev/config/
export default defineConfig({
  base: env['BASE_URL'] || '/',
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
})
