import { style } from "@vanilla-extract/css"
import { vars } from "./theme.css"

export const button = style({
  borderRadius: ".625rem",
  transition: "all 150ms ease",
  cursor: "pointer",
  height: "2.875rem",
  lineHeight: "2.875rem",
  width: "100%",
  textAlign: "center",
  border: "none",
  textDecoration: "none",
  fontSize: ".875em"
})

export const buttonBlue = style({
  color: "#fff",
  background: "#06f",
  ":hover": {
    background: "#005ce6"
  },
  ":active": {
    background: "#0052cc"
  }
})

export const buttonClose = style({
  background: "#f57187",
  height: "2.5rem",
  width: "2.5rem",
  borderRadius: ".375rem",
  position: "absolute",
  top: ".875rem",
  right: ".875rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  userSelect: "none",
  cursor: "pointer",
  border: `1px solid rgba(0, 0, 0, 0.11)`,
  ":hover": {
    background: "#eb6c81"
  },
  ":active": {
    background: "#e0677b"
  }
})
