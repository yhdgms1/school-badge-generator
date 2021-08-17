// const enums does not work with esbuild as should (https://github.com/evanw/esbuild/issues/128)

export const Card = {
  Height: 618,
  Width: 1063,
}

export const Margin = {
  Vertical: 56,
}

export const getCardPosition = (i: number) => {
  let y = 0

  if (i === 0 || i === 1) {
    y = Margin.Vertical
  } else if (i === 2 || i === 3) {
    y = Margin.Vertical * 2 + Card.Height
  } else if (i === 4 || i === 5) {
    y = Margin.Vertical * 3 + Card.Height * 2
  } else if (i === 6 || i === 7) {
    y = Margin.Vertical * 4 + Card.Height * 3
  } else if (i === 8 || i === 9) {
    y = Margin.Vertical * 5 + Card.Height * 4
  }

  return {
    x: i % 2 === 0 ? 110 : 1290,
    y,
  }
}

export const getTextMargins = (i: number) => {
  let y = 0

  if (i === 0 || i === 1) {
    y = 144 + Margin.Vertical
  } else if (i === 2 || i === 3) {
    y = 144 + Margin.Vertical * 2 + Card.Height
  } else if (i === 4 || i === 5) {
    y = 144 + Margin.Vertical * 3 + Card.Height * 2
  } else if (i === 6 || i === 7) {
    y = 144 + Margin.Vertical * 4 + Card.Height * 3
  } else if (i === 8 || i === 9) {
    y = 144 + Margin.Vertical * 5 + Card.Height * 4
  }

  return {
    x: i % 2 === 0 ? 658.5 : 1821.5,
    y,
  }
}

export const getMediaMargins = (i: number) => {
  let y = 0

  if (i === 0 || i === 1) {
    y = 334 + Margin.Vertical
  } else if (i === 2 || i === 3) {
    y = 334 + Margin.Vertical * 2 + Card.Height
  } else if (i === 4 || i === 5) {
    y = 334 + Margin.Vertical * 3 + Card.Height * 2
  } else if (i === 6 || i === 7) {
    y = 334 + Margin.Vertical * 4 + Card.Height * 3
  } else if (i === 8 || i === 9) {
    y = 334 + Margin.Vertical * 5 + Card.Height * 4
  }

  return {
    left: {
      x: i % 2 === 0 ? 120 : 1300,
      y,
    },
    right: {
      x: i % 2 === 0 ? 854 : 2034,
      y,
    },
  }
}
