import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const linkUgly = style({
    color: '#000 !important',
    "@media": {
        "(prefers-color-scheme: dark)": {
          color: '#eee !important',
        },
    },
})
