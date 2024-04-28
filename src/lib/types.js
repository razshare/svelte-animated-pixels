export {}

/**
 * @template T
 * @typedef {{value:T,error:false|Error}} Unsafe
 */

/**
 * @typedef {Array<string>} Frames
 */

/**
 * @typedef OnResizePayload
 * @property {number} width
 * @property {number} height
 */

/**
 * @callback OnResize
 * @param {OnResizePayload} payload
 */

/**
 * @typedef InvalidHeightErrorValue
 * @property {number} height
 * @property {string} shape
 */

/**
 * @typedef InvalidHeightErrorPayload
 * @property {InvalidHeightErrorValue} expected
 * @property {InvalidHeightErrorValue} actual
 */

/**
 * @typedef InvalidWidthErrorValue
 * @property {number} width
 * @property {string} shape
 */

/**
 * @typedef InvalidWidthErrorPayload
 * @property {InvalidWidthErrorValue} expected
 * @property {InvalidWidthErrorValue} actual
 */
