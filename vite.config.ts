import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { minifyHtml } from 'vite-plugin-html'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { default as malinaPlugin } from 'malinajs/malina-rollup'

export default defineConfig(({ mode }) => {
  const DEV = mode === 'development'

  return {
    plugins: [
      malinaPlugin({
        extension: ['ma', 'xht'],
        displayVersion: false,
      }),
      vanillaExtractPlugin(),
      !DEV && viteSingleFile(),
      !DEV && minifyHtml(),
    ],
    build: {
      target: ['chrome64'],
      polyfillDynamicImport: false,
      cssCodeSplit: false,
      rollupOptions: {
        inlineDynamicImports: true,
        output: {
          manualChunks: () => 'everything.js',
        },
      },
    },
  }
})
