import { defineConfig } from 'vite'
import { viteSingleFile } from 'vite-plugin-singlefile'
import { minifyHtml } from 'vite-plugin-html'
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
      !DEV && viteSingleFile(),
      !DEV && minifyHtml(),
    ],
    build: {
      target: ['es2018'],
      polyfillModulePreload: false,
      cssCodeSplit: false,
      rollupOptions: {
        output: {
          manualChunks: () => 'everything.js',
        },
      },
      minify: 'terser',
    },
    esbuild: {
      charset: 'utf8',
    },
  }
})
