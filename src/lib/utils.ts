// const enums does not work with esbuild as should (https://github.com/evanw/esbuild/issues/128)

export const Card = {
  Height: 618,
  Width: 1063,
}

export const Margin = {
  Vertical: Card.Height / 11,
  Corner: 110,
  Center: 117,
}

export const Padding = 10

export const Asset = {
  Width: 309,
  Height: 273,
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
    x: i % 2 === 0 ? Margin.Corner : Margin.Corner + Card.Width + Margin.Center,
    y,
  }
}

export const getTextMargins = (i: number) => {
  let y = 0

  const marginTop = Margin.Vertical * 2

  if (i === 0 || i === 1) {
    y = marginTop + Margin.Vertical
  } else if (i === 2 || i === 3) {
    y = marginTop + Margin.Vertical * 2 + Card.Height
  } else if (i === 4 || i === 5) {
    y = marginTop + Margin.Vertical * 3 + Card.Height * 2
  } else if (i === 6 || i === 7) {
    y = marginTop + Margin.Vertical * 4 + Card.Height * 3
  } else if (i === 8 || i === 9) {
    y = marginTop + Margin.Vertical * 5 + Card.Height * 4
  }

  return {
    x: i % 2 === 0 ? 658.5 : 1821.5,
    y,
  }
}

export const getMediaMargins = (i: number) => {
  let y = 0

  const marginTop = Card.Height - Asset.Height - Padding

  if (i === 0 || i === 1) {
    y = marginTop + Margin.Vertical
  } else if (i === 2 || i === 3) {
    y = marginTop + Margin.Vertical * 2 + Card.Height
  } else if (i === 4 || i === 5) {
    y = marginTop + Margin.Vertical * 3 + Card.Height * 2
  } else if (i === 6 || i === 7) {
    y = marginTop + Margin.Vertical * 4 + Card.Height * 3
  } else if (i === 8 || i === 9) {
    y = marginTop + Margin.Vertical * 5 + Card.Height * 4
  }

  return {
    left: {
      x:
        i % 2 === 0
          ? Margin.Corner + Padding
          : Margin.Corner + Card.Width + Margin.Center + Padding,
      y,
    },
    right: {
      x:
        i % 2 === 0
          ? Margin.Corner + Card.Width - Asset.Width - Padding
          : Margin.Corner +
            Card.Width +
            Margin.Center +
            Card.Width -
            Asset.Width -
            Padding,
      y,
    },
  }
}
