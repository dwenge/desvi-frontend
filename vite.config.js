import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import {resolve} from 'path'
import VitePluginVueDevTools from 'vite-plugin-vue-devtools'
import { createHtmlPlugin } from 'vite-plugin-html'
import { env } from 'process'

// https://vite.dev/config/
export default defineConfig({
  base: env['url'] || '/',
  plugins: [
    vue(),

    VitePluginVueDevTools(),
    createHtmlPlugin()
  ],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
    }
  }
})
