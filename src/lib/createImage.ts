import type { Data } from "../data/data"
import * as utils from "./utils"

const drawImages = async (ctx: CanvasRenderingContext2D, style: string, i: string) =>
  new Promise(Ok => {
    const image = document.createElement("img")

    const mediaMargins = utils.getMediaMargins(Number(i))

    image.addEventListener("load", () => {
      ctx.drawImage(image, mediaMargins.left.x, mediaMargins.left.y, image.width, image.height)

      /*
       * Draw mirrored image
       */

      ctx.save()

      ctx.setTransform(-1, 0, 0, 1, mediaMargins.right.x + image.width, mediaMargins.right.y)

      ctx.drawImage(image, 0, 0)

      ctx.restore()

      Ok()
    })

    image.src = `/assets/images/${style}.png`
  })

const getBlob = async (canvas: HTMLCanvasElement): Promise<string> =>
  new Promise(resolve => canvas.toBlob(blob => resolve(URL.createObjectURL(blob)), "image/png", 1.0))

export const createImage = async (canvas: HTMLCanvasElement, data: Data) => {
  let result = ""

  const ctx = canvas.getContext("2d", { alpha: false })

  if (!ctx) return

  // A4 paper size

  canvas.width = 2480
  canvas.height = 3508

  ctx.clearRect(0, 0, canvas.width, canvas.height)

  // Create background

  ctx.fillStyle = "#fff"
  ctx.fillRect(0, 0, 2480, 3508)

  // Load font

  //@ts-ignore
  const font = new FontFace(data.global.font, `url('/assets/fonts/${data.global.font}.woff2')`)

  await font.load()
  //@ts-ignore
  document.fonts.add(font)

  for (let i in data.people) {
    const card = data.people[i]

    /*
     * just skip card creating because it is meaningless
     */
    if (card.name === "" && card.grade === "") continue

    const cardPosition = utils.getCardPosition(Number(i))
    // 'satan' style has a black background so we need a white text
    const textColor = card.style === "satan" ? "#fff" : "#000"

    //Draw border
    ctx.fillStyle = "#010203"
    ctx.fillRect(cardPosition.x, cardPosition.y, 1063, 618)

    //Draw white rect
    if (card.style !== "satan") {
      ctx.fillStyle = "#fff"
      ctx.fillRect(cardPosition.x + 10, cardPosition.y + 10, 1063 - 20, 618 - 20)
    }

    /*
     * Draw Дежурный(ая) по школе
     *
     * 'bold', '600', '700', causes ugly 'й' in Chrome
     */
    ctx.font = `500 70px ${data.global.font}`
    ctx.fillStyle = textColor

    const headerText = card.gender === "female" ? "Дежурная по школе" : "Дежурный по школе"
    const headerTextWidth = ctx.measureText(headerText).width

    const textMargins = utils.getTextMargins(Number(i))

    ctx.fillText(headerText, textMargins.x - headerTextWidth / 2, textMargins.y)

    /*
     * Draw name and surname
     */
    ctx.font = `500 86px ${data.global.font}`

    let nameWidth = ctx.measureText(card.name).width
    //If long name
    if (nameWidth >= 1023) {
      // 🙏 Let's pray everything will be fine
      ctx.font = `500 ${(1023 / card.name.length) * 1.3}px ${data.global.font}`
      nameWidth = ctx.measureText(card.name).width
    }
    ctx.fillText(card.name, textMargins.x - nameWidth / 2, textMargins.y + 104)

    /*
     * Draw x класс
     */

    const gradeText = `${data.global.grade || card.grade} класс`
    ctx.font = `500 86px ${data.global.font}`
    const gradeWidth = ctx.measureText(gradeText).width

    ctx.fillText(gradeText, textMargins.x - gradeWidth / 2, textMargins.y + 208)

    /*
     * Render media (pony, star, etc...)
     */

    if (card.style !== "default") {
      await drawImages(ctx, card.style, i)
    }
  }

  return await getBlob(canvas)
}
