import { style, globalStyle } from '@vanilla-extract/css'
import { vars } from '../styles/theme.css'

globalStyle('body', {
  display: 'grid',
  gridTemplateColumns: '22.7rem 1fr',
  '@media': {
    '(max-width: 625px)': {
      display: 'block',
    },
  },
})

export const aside = style({
  height: '100vh',
  position: 'sticky',
  top: 0,
  alignSelf: 'start',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  padding: '1rem 0',
  '@media': {
    '(max-width: 625px)': {
      position: 'relative',
      margin: 'auto',
      height: 'auto',
    },
    '(prefers-color-scheme: dark)': {
      background: vars.color['cool-gray'][800],
      color: '#eee',
    },
  },
})

export const main = style({
  background: vars.color['cool-gray'][200],
  display: 'grid',
  gridTemplateColumns: `repeat(2, 1fr)`,
  gridRowGap: '1rem',
  rowGap: '1rem',
  padding: '2rem 0',
  minHeight: '100vh',
  '@media': {
    '(max-width: 1150px)': {
      gridTemplateColumns: '1fr',
    },
    '(prefers-color-scheme: dark)': {
      background: vars.color['cool-gray'][900],
      color: '#eee',
    },
  },
})
