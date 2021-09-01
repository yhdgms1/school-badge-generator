import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const input = style({
  border: `1px solid ${vars.color['cool-gray'][200]}`,
  borderRadius: '.188rem',
  padding: '0 1rem',
  position: 'relative',
  height: '2.625rem',
  width: '100%',
  fontSize: '1em',
  ':hover': {
    backgroundColor: vars.color['cool-gray'][100],
    borderColor: vars.color['cool-gray'][300],
  },
  '@media': {
    '(prefers-color-scheme: dark)': {
      backgroundColor: vars.color['cool-gray'][700],
      borderColor: vars.color['cool-gray'][600],
      color: '#eee',
      ':hover': {
        backgroundColor: vars.color['cool-gray'][600],
        borderColor: vars.color['cool-gray'][500],
      },
      '::placeholder': {
        color: '#ddd',
      },
    },
  },
})

export const input_container = style({
  width: '70%',
  margin: '.5625rem auto',
})
