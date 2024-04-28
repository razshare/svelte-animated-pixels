/**
 *
 * @param {import('$lib/types').InvalidWidthErrorPayload} received
 */
export function createInvalidWidthError({ expected, actual }) {
  return new Error(
    `Invalid map width - expected ${expected.width} pixels, ${actual.width} received instead. Once a frame has been drawn on a pixel map, all subsequent drawn frames MUST have the same shape, meaning both width and height MUST match.
Expected shape
${expected.shape}

Received shape
${actual.shape}
          `,
  )
}
