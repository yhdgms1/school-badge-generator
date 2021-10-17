import { style } from '@vanilla-extract/css'

export const button = style({
  borderRadius: '.375rem',
  cursor: 'pointer',
  height: '2.875rem',
  border: 'none',
  fontSize: '.875em',
})

export const buttonBlue = style({
  width: '70%',
  color: '#fff',
  background: '#06f',
  ':hover': {
    background: '#005ce6',
  },
  ':active': {
    background: '#0052cc',
  },
})

export const buttonClose = style({
  background: '#f57187',
  height: '2.5rem',
  width: '2.5rem',
  position: 'absolute',
  top: '.875rem',
  right: '.875rem',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  cursor: 'pointer',
  ':hover': {
    background: '#eb6c81',
  },
  ':active': {
    background: '#e0677b',
  },
})
