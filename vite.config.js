import { URL, fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import EsJS from '@es-js/vite-plugin-esjs'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    // https://github.com/es-js/esjs
    EsJS(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./bot', import.meta.url)),
    },
    extensions: [
      '.js',
      '.json',
      '.jsx',
      '.mjs',
      '.ts',
      '.tsx',
      '.esjs',
    ],
  },
  build: {
    outDir: './dist',
    rollupOptions: {
      input: {
        index: './bot/js/index.js',
        deploy: './bot/js/deploy.js',
      },
    },
  },
})
