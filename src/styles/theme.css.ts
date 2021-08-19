import { createGlobalTheme } from '@vanilla-extract/css'
import { globalStyle } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    'cool-gray': {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
      300: '#d1d5db',
      400: '#9ca3af',
      500: '#6b7280',
      600: '#4b5563',
      700: '#374151',
      800: '#1f2937',
      900: '#111827',
    },
  },
  font: {
    sans: `ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"`,
  },
})

globalStyle('html, body, *, *::after, *::before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: vars.font.sans,
})
