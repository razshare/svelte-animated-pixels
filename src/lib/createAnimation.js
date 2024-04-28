import { readable } from 'svelte/store'
import { IS_BROWSER } from './constants'

/**
 * @type {Map<string, number>}
 */
const tracker = new Map()

/**
 *
 * @param {{id:string, frames:import('./types').Frames}} payload
 */
function find_next_frame({ id, frames }) {
  const index = tracker.get(id)
  if (index === undefined) {
    tracker.set(id, 0)
    return frames[0] ?? ''
  }

  const next_index = (index + 1) % frames.length
  tracker.set(id, next_index)

  return frames[next_index]
}

/**
 * @typedef AnimatePayload
 * @property {import('./types').Frames} frames sequence of frames.
 * @property {string} id a unique id for the frames sequence.
 * @property {number} interval milliseconds between each frame.
 */

/**
 * Animate a sequence of frames.
 * @param {AnimatePayload} payload
 * @returns
 */
export function createAnimation({ frames, id, interval }) {
  if (!IS_BROWSER) {
    return readable('')
  }
  return readable('', function start(set) {
    set(find_next_frame({ id, frames }))

    const timer = setInterval(function run() {
      requestAnimationFrame(function run() {
        set(find_next_frame({ id, frames }))
      })
    }, interval)

    return function stop() {
      clearInterval(timer)
    }
  })
}
