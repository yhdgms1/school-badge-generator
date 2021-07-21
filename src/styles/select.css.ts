import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const select = style({
  border: `1px solid ${vars.color["cool-gray"][200]}`,
  borderRadius: ".188rem",
  padding: "0 1rem",
  position: "relative",
  height: "2.625rem",
  width: "100%",
  fontSize: "1em",
  backgroundColor: '#fff',
  WebkitAppearance: 'none',
  appearance: 'none',
  ":hover": {
    backgroundColor: vars.color["cool-gray"][100],
    borderColor: vars.color["cool-gray"][300]
  },
  "@media": {
    "(prefers-color-scheme: dark)": {
      backgroundColor: vars.color["cool-gray"][700],
      borderColor: vars.color["cool-gray"][600],
      color: "#eee",
      ":hover": {
        backgroundColor: vars.color["cool-gray"][600],
        borderColor: vars.color["cool-gray"][500]
      }
    }
  },
  "@supports": {
    "(appearance: none)": {
      appearance: "none",
      backgroundRepeat: "no-repeat",
      backgroundPosition: `right .2rem top 50%, 0 0`,
      backgroundSize: `2rem auto, 100%`,
      backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='currentColor' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M15.25 10.75L12 14.25L8.75 10.75'%3E%3C/path%3E%3C/svg%3E%0A")`,
      "@media": {
        "(prefers-color-scheme: dark)": {
          backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' fill='none' viewBox='0 0 24 24'%3E%3Cpath stroke='%23eee' stroke-linecap='round' stroke-linejoin='round' stroke-width='1' d='M15.25 10.75L12 14.25L8.75 10.75'%3E%3C/path%3E%3C/svg%3E%0A")`
        }
      }
    }
  }
})

export const label = style({
  marginBottom: ".313rem"
})

export const container = style({
  display: "flex",
  flexDirection: "column",
  alignItems: "flex-start",
  justifyContent: "center",
  width: "70%",
  margin: ".5625rem auto"
})
