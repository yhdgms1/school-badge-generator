/*
 * All the data here was written 6 November 2020
 * I don't know how to get these numbers now
 */

export const getCardPosition = (i: number) => {
  let y = 0

  if (i === 0 || i === 1) {
    y = 56
  } else if (i === 2 || i === 3) {
    y = 730
  } else if (i === 4 || i === 5) {
    y = 1404
  } else if (i === 6 || i === 7) {
    y = 2078
  } else if (i === 8 || i === 9) {
    y = 2752
  }

  return {
    x: i % 2 === 0 ? 110 : 1290,
    y
  }
}

export const getTextMargins = (i: number) => {
  let y = 0

  if (i === 0 || i === 1) {
    y = 200
  } else if (i === 2 || i === 3) {
    y = 874
  } else if (i === 4 || i === 5) {
    y = 1548
  } else if (i === 6 || i === 7) {
    y = 2222
  } else if (i === 8 || i === 9) {
    y = 2896
  }

  return {
    x: i % 2 === 0 ? 658.5 : 1821.5,
    y
  }
}

export const getMediaMargins = (i: number) => {
  let y = 0

  if (i === 0 || i === 1) {
    y = 390
  } else if (i === 2 || i === 3) {
    y = 1064
  } else if (i === 4 || i === 5) {
    y = 1738
  } else if (i === 6 || i === 7) {
    y = 2412
  } else if (i === 8 || i === 9) {
    y = 3086
  }

  return {
    left: {
      x: i % 2 === 0 ? 120 : 1300,
      y
    },
    right: {
      x: i % 2 === 0 ? 854 : 2034,
      y
    }
  }
}
