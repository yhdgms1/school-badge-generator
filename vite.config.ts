import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { minifyHtml } from 'vite-plugin-html'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { default as malinaPlugin } from 'malinajs/malina-rollup'
import { default as terserOptions } from './.terserrc'

const DEV = process.env.MODE === 'dev'

export default defineConfig({
  plugins: [
    malinaPlugin({
      extension: ['ma', 'xht'],
      displayVersion: false,
      compact: true,
    }),
    vanillaExtractPlugin(),
    !DEV && viteSingleFile(),
    !DEV && minifyHtml(),
  ],
  build: {
    target: 'esnext',
    polyfillDynamicImport: false,
    cssCodeSplit: false,
    terserOptions,
    rollupOptions: {
      inlineDynamicImports: true,
      output: {
        manualChunks: () => 'everything.js',
      },
    },
  },
})
