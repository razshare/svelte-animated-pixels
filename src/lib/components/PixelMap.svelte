<script>
  import { IS_BROWSER } from '$lib/constants'
  import { createInvalidHeightError } from '$lib/createInvalidHeightError'
  import { createInvalidWidthError } from '$lib/createInvalidWidthError'

  /**
   * @type {string}
   */
  export let map
  export let scale = 1
  export let color = 'red'
  export let width = 0
  export let height = 0
  /** @type {false|import('$lib/types').OnResize} */
  export let onResize = false
  $: unit = 1 * scale
  $: if (onResize) {
    onResize({ width, height })
  }
  /**
   * @type {HTMLCanvasElement}
   */
  let canvas

  /**
   * @type {false|CanvasRenderingContext2D}
   */
  let context

  $: if (canvas) {
    context = canvas.getContext('2d') ?? false
  }

  $: draw({ context, unit, color, map })

  let first_width = -1
  let first_height = -1
  let first_shape = ''

  /**
   *
   * @param {string} map
   */
  function validateSize(map) {
    const rows = map.trim().split(/\n+/)

    if (!first_shape) {
      first_shape = rows
        .map(function join(row) {
          return row.trim()
        })
        .join('\n')
    }

    if (first_height === -1) {
      first_height = rows.length
    }

    if (rows.length !== first_height) {
      const trimmed = rows
        .map(function join(row) {
          return row.trim()
        })
        .join('\n')

      throw createInvalidHeightError({
        expected: {
          height: first_height,
          shape: first_shape,
        },
        actual: {
          height: rows.length,
          shape: trimmed,
        },
      })
    }

    for (let y = 0; y < rows.length; y++) {
      const row = rows[y].trim()
      const columns = row.trim().split(/\s+/)

      if (first_width === -1) {
        first_width = columns.length
      }

      if (columns.length !== first_width) {
        const trimmed = rows
          .map(function join(row) {
            return row.trim()
          })
          .join('\n')
        throw createInvalidWidthError({
          expected: {
            width: first_width,
            shape: first_shape,
          },
          actual: {
            width: columns.length,
            shape: trimmed,
          },
        })
      }
    }
  }

  $: if (map) {
    validateSize(map)
  }

  /**
   *
   * @param {{context:CanvasRenderingContext2D, color:string, unit:number, x:number, y:number}} payload
   */
  function paint({ context, color, unit, x, y }) {
    context.fillStyle = color
    context.fillRect(x, y, unit, unit)
  }

  /**
   *
   * @param {{context:false|CanvasRenderingContext2D, map:string, color:string, unit:number}} payload
   */
  function draw({ context, map, color, unit }) {
    if (!IS_BROWSER || !context) {
      return
    }

    const rows = map.trim().split(/\n+/)
    context.clearRect(0, 0, width, height)
    for (let y = 0; y < rows.length; y++) {
      const row = rows[y].trim()
      const columns = row.trim().split(/\s+/)
      for (let x = 0; x < columns.length; x++) {
        const cell = columns[x]
        if ('.' === cell) {
          continue
        }
        paint({ context, color, unit, x: x * scale, y: y * scale })
      }
      if (width < columns.length) {
        width = columns.length * scale
      }
    }
    height = rows.length * scale
  }
</script>

<div class="relative" style="width:{width}px;height:{height}px">
  <canvas bind:this={canvas} {width} {height}></canvas>
  <slot />
</div>
