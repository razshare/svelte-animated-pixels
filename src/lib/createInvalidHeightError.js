/**
 *
 * @param {import('$lib/types').InvalidHeightErrorPayload} received
 */
export function createInvalidHeightError({ expected, actual }) {
  return new Error(
    `Invalid map height - expected ${expected.height} pixels, ${actual.height} received instead. Once a frame has been drawn on a pixel map, all subsequent drawn frames MUST have the same shape, meaning both width and height MUST match.
Expected shape
${expected.shape}

Received shape
${actual.shape}
          `,
  )
}
