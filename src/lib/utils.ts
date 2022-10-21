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

const normalizeIndex = (i: number) => (i % 2 === 0 ? i : i - 1) / 2

export const getCardPosition = (i: number) => {
  let index = normalizeIndex(i)

  let y = Margin.Vertical + index * (Card.Height + Margin.Vertical)
  let x =
    i % 2 === 0 ? Margin.Corner : Margin.Corner + Card.Width + Margin.Center

  return {
    x,
    y,
  }
}

export const getTextMargins = (i: number) => {
  let index = normalizeIndex(i)

  const marginTop = Margin.Vertical * 2

  let y = index * (Card.Height + Margin.Vertical) + marginTop + Margin.Vertical
  let x = i % 2 === 0 ? 658.5 : 1821.5

  return {
    x,
    y,
  }
}

export const getMediaMargins = (i: number) => {
  let index = normalizeIndex(i)

  const marginTop = Card.Height - Asset.Height - Padding

  let y = index * (Card.Height + Margin.Vertical) + marginTop + Margin.Vertical

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
