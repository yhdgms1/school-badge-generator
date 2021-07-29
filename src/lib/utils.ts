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
  }

  return {
    x: i % 2 === 0 ? 658.5 : 1821.5,
    y
  }
}

export const getMediaMargins = (i: number) => {
  let y = 0

  if (i === 0 || i === 1) {
    y = 391
  } else if (i === 2 || i === 3) {
    y = 1065
  } else if (i === 4 || i === 5) {
    y = 1739
  } else if (i === 6 || i === 7) {
    y = 2413
  }

  return {
    left: {
      x: i % 2 === 0 ? 119.5 : 1300,
      y
    },
    right: {
      x: i % 2 === 0 ? 856 : 2034,
      y
    }
  }
}
