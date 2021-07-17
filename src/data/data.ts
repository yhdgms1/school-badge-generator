import { store as createStore } from "storxy"

interface Global {
  font?: "arial" | "intro"
  grade?: string
}

interface People {
  name: string
  grage: string
  gender?: "male" | "female"
  style?: "default" | "satan" | "pony-rarity"
}

export interface Data {
  global?: Global
  people: People[]
}

const initial: Data = {
  global: {
    font: "arial",
    grade: ""
  },
  people: new Array(8).fill("").map(() => ({ name: "", grade: "", gender: "male", style: "default" }))
}

export const store = createStore(initial)