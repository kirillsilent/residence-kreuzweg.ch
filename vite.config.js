import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  base: './',
  plugins: [
    vue(),
    {
      name: 'legacy-script',
      apply: 'build',
      transformIndexHtml(html) {
        return html
          .replace(/ type="module"/g, '')
          .replace(/ crossorigin/g, '')
          .replace(/<script src="\.\/assets\/index\.js"><\/script>/, '<script src="./assets/index.js" defer></script>')
      },
      enforce: 'post',
    },
  ],
  build: {
    rollupOptions: {
      output: {
        format: 'iife',
        inlineDynamicImports: true,
        entryFileNames: 'assets/[name].js',
      },
    },
  },
})
