import { createGlobalTheme } from '@vanilla-extract/css'
import { globalStyle } from '@vanilla-extract/css'

export const vars = createGlobalTheme(':root', {
  color: {
    'cool-gray': {
      50: '#f9fafb',
      100: '#f3f4f6',
      200: '#e5e7eb',
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
  icons: {
    arrow_down: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='red' stroke-linecap='round' stroke-linejoin='round' d='M15.25 10.75L12 14.25L8.75 10.75'%3E%3C/path%3E%3C/svg%3E")`,
  },
})

globalStyle('html, body, *, *::after, *::before', {
  margin: 0,
  padding: 0,
  boxSizing: 'border-box',
  fontFamily: vars.font.sans,
})
