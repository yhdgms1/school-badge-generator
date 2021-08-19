import { style } from '@vanilla-extract/css'

export const link = style({
  color: '#000 !important',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee !important',
    },
  },
})
