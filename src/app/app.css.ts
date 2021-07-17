import { style } from "@vanilla-extract/css"
import { vars } from "../styles/theme.css"

export const aside = style({
  width: "22.7rem",
  position: "absolute",
  top: 0,
  left: 0,
  bottom: 0,
  display: "flex",
  justifyContent: "start",
  alignItems: "center",
  flexDirection: "column",
  padding: "1rem 0",
  "@media": {
    "screen and (max-width: 512px)": {
      width: "100%",
      position: "relative",
      margin: "auto"
    },
    "(prefers-color-scheme: dark)": {
      background: vars.color["cool-gray"][800],
      color: "#eee"
    }
  }
})

export const main = style({
  width: `calc(100vw - 22.7rem)`,
  background: vars.color["cool-gray"][200],
  position: "absolute",
  top: 0,
  right: 0,
  bottom: 0,
  overflow: "auto",
  display: "grid",
  gridTemplateColumns: `repeat(2, 1fr)`,
  gridRowGap: "1rem",
  rowGap: "1rem",
  paddingTop: "2rem",
  "::after": {
    content: `''`,
    height: "2rem"
  },
  "@media": {
    "screen and (max-width: 1150px)": {
      gridTemplateColumns: "1fr"
    },
    "screen and (max-width: 512px)": {
      width: "100%",
      position: "relative",
      margin: "auto",
      overflow: "auto"
    },
    "(prefers-color-scheme: dark)": {
      background: vars.color["cool-gray"][900],
      color: "#eee"
    }
  }
})
