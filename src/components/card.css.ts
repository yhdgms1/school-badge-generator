import { style } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

export const card = style({
  position: 'relative',
  textAlign: 'left',
  margin: '0 auto',
  boxShadow: `inset rgba(0, 0, 0, 0.11) 0 0 0 1px`,
  borderRadius: '.875rem',
  width: '70%',
  height: '24rem',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexDirection: 'column',
  background: '#fff',
  '@media': {
    '(prefers-color-scheme: dark)': {
      background: vars.color['cool-gray'][800],
    },
    '(max-width: 1625px)': {
      width: '85%',
      height: '26rem',
    },
  },
  ':hover': {
    boxShadow: `inset rgba(0, 0, 0, 0.096) 0 0 1px 2px`,
  },
})

export const add = style({
  background: 'transparent !important',
  border: 'none !important',
  marginBlockStart: 0,
  marginBlockEnd: 0,
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  '@media': {
    '(prefers-color-scheme: dark)': {
      color: '#eee',
    },
  },
})
