import { style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const bg = style({
    position: 'fixed',
    zIndex: 1000,
    top: 0,
    left: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: '100vw',
    height: '100vh',
    background: 'rgba(0, 0, 0, 0.66)'
})

export const windowWrap = style({
    position: 'relative',
    margin: '2rem',
    maxHeight: '100%',
    "@media": {
        "screen and (max-width: 512px)": {
            margin: '2rem auto',
        }
    },
})

export const window = style({
    position: 'relative',
    width: '40rem',
    maxWidth: '100%',
    margin: '2rem auto',
    color: 'black',
    borderRadius: '.5rem',
    background: 'white',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-between',
    flexDirection: 'row-reverse',
    "@media": {
        "(prefers-color-scheme: dark)": {
          color: '#eee',
          background: vars.color["cool-gray"][700]
        },
        "screen and (max-width: 1625px)": {
            width: "95%",
        }
    },
})

export const content = style({
    position: 'relative',
    padding: '1rem',
    maxHeight: 'calc(100vh - 4rem)',
    overflow: 'auto',
    width: '100%'
})

export const header = style({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end'
})

export const close = style({
    width: '2.5rem',
    height: '2.5rem',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'transparent',
    border: 'none',
    cursor: 'pointer',
    ':active': {
        transform: 'scale(0.9)'
    },
    "@media": {
        "(prefers-color-scheme: dark)": {
          color: '#eee',
        },
    },
})
