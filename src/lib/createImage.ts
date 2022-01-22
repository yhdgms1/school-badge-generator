import type { Data } from '../data/data'
import * as utils from './utils'

const loadImage = async (path: string): Promise<HTMLImageElement | null> =>
  new Promise((Ok, Err) => {
    const image = document.createElement('img')

    image.onerror = Err
    image.onload = () => Ok(image)

    image.src = path
  })

const getBlob = async (canvas: HTMLCanvasElement): Promise<string> =>
  new Promise(resolve =>
    canvas.toBlob(blob => resolve(URL.createObjectURL(blob)), 'image/png', 1.0)
  )

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d', { alpha: false })

// A4 paper size

canvas.width = 2480
canvas.height = 3508

export const createImage = async (data: Data) => {
  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Create background

  ctx.fillStyle = '#fff'
  ctx.fillRect(0, 0, 2480, 3508)

  const font = new FontFace(
    data.global.font,
    `url('/assets/fonts/${data.global.font}.woff2')`
  )

  await font.load()

  document.fonts.add(font)

  for (let i in data.people) {
    const card = data.people[i]

    /*
     * just skip card creating because it is meaningless
     */
    if (card.name === '' && card.grade === '') continue

    const cardPosition = utils.getCardPosition(Number(i))
    // 'satan' style has a black background so we need a white text
    const textColor = card.style === 'satan' ? '#fff' : '#000'
    // 'default' style has no images so we need to center a text
    const textMargin =
      card.style === 'default' ? utils.Margin.Vertical * 1.5 : 0

    //Draw border
    ctx.fillStyle = '#010203'
    ctx.fillRect(
      cardPosition.x,
      cardPosition.y,
      utils.Card.Width,
      utils.Card.Height
    )

    //Draw white rect
    if (card.style !== 'satan') {
      ctx.fillStyle = '#fff'
      ctx.fillRect(
        cardPosition.x + utils.Padding,
        cardPosition.y + utils.Padding,
        utils.Card.Width - utils.Padding * 2,
        utils.Card.Height - utils.Padding * 2
      )
    }

    /*
     * Render media (pony, star, etc...)
     */

    if (card.style !== 'default') {
      try {
        const image = await loadImage(`/assets/images/${card.style}.png`)

        const mediaMargins = utils.getMediaMargins(Number(i))

        ctx.drawImage(
          image,
          mediaMargins.left.x,
          mediaMargins.left.y,
          image.width,
          image.height
        )

        /*
         * Draw mirrored image
         */

        ctx.save()

        ctx.setTransform(
          -1,
          0,
          0,
          1,
          mediaMargins.right.x + image.width,
          mediaMargins.right.y
        )

        ctx.drawImage(image, 0, 0)

        ctx.restore()
      } catch {}
    }

    /*
     * Draw Дежурный(ая) по школе
     */
    ctx.font = `500 70px ${data.global.font}`
    ctx.fillStyle = textColor

    const headerText =
      card.gender === 'female' ? 'Дежурная по школе' : 'Дежурный по школе'
    const headerTextWidth = ctx.measureText(headerText).width

    const textMargins = utils.getTextMargins(Number(i))

    ctx.fillText(
      headerText,
      textMargins.x - headerTextWidth / 2,
      textMargins.y + textMargin
    )

    /*
     * Draw name and surname
     */
    ctx.font = `500 86px ${data.global.font}`

    let nameWidth = ctx.measureText(card.name).width
    //If long name
    if (nameWidth >= utils.Card.Width - utils.Padding * 4) {
      let fontSize =
        ((utils.Card.Width - utils.Padding * 4) / card.name.length) * 1.3
      ctx.font = `500 ${fontSize}px ${data.global.font}`
      nameWidth = ctx.measureText(card.name).width
    }
    ctx.fillText(
      card.name,
      textMargins.x - nameWidth / 2,
      textMargins.y + textMargin + utils.Margin.Vertical * 2 - 20
    )

    /*
     * Draw x класс
     */

    const gradeText = `${data.global.grade || card.grade} класс`
    ctx.font = `500 86px ${data.global.font}`
    const gradeWidth = ctx.measureText(gradeText).width

    ctx.fillText(
      gradeText,
      textMargins.x - gradeWidth / 2,
      textMargins.y + textMargin + utils.Margin.Vertical * 4 - 40
    )
  }

  return await getBlob(canvas)
}
