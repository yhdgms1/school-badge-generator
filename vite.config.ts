import { defineConfig } from 'vite'
import { vanillaExtractPlugin } from '@vanilla-extract/vite-plugin'
import { vitePlugin as malinaPlugin } from 'malinajs-unplugin'

export default defineConfig(({ mode }) => {
  const DEV = mode === 'development'

  return {
    plugins: [
      malinaPlugin({
        debugLabel: DEV,
        immutable: true,
      }),
      vanillaExtractPlugin(),
    ],
    build: {
      minify: 'terser',
      target: 'es6',
      polyfillModulePreload: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: null,
          inlineDynamicImports: true,
        },
      },
    },
    esbuild: {
      charset: 'utf8',
    },
  }
})
