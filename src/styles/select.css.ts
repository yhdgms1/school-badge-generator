import { style } from '@vanilla-extract/css'
import { vars } from './theme.css'

export const select = style({
  border: `1px solid ${vars.color['cool-gray'][200]}`,
  borderRadius: '.188rem',
  marginTop: '.2812rem',
  padding: '0 1rem',
  position: 'relative',
  height: '2.625rem',
  width: '100%',
  fontSize: '1em',
  backgroundColor: '#fff',
  WebkitAppearance: 'none',
  appearance: 'none',
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
    },
  },
  '@supports': {
    '(-webkit-appearance: none)': {
      WebkitAppearance: 'none',
      appearance: 'none',
    },
  },
})

export const label = style({
  width: '70%',
  marginBottom: '.5625rem',
  position: 'relative',
  '::after': {
    content: '',
    position: 'absolute',
    top: 'calc(100% - 2.2812rem)',
    bottom: 0,
    right: '.5rem',
    width: '2rem',
    pointerEvents: 'none',
    backgroundColor: 'currentColor',
    WebkitMask: `${vars.icons.arrow_down} no-repeat`,
    WebkitMaskSize: '2rem 2rem',
    mask: `${vars.icons.arrow_down} no-repeat`,
    maskSize: '2rem 2rem',
  },
})
