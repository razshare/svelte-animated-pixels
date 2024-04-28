<script>
  import { createAnimation } from '$lib/createAnimation'
  import { uuid } from '$lib/uuid'
  /**
   * List of frames composing the animation.
   * @type {import("$lib/types").Frames}
   */
  export let frames
  /**
   * Delay between frames (in milliseconds).
   */
  export let interval = 100
  const animation = createAnimation({ frames, id: uuid(), interval })
</script>

<slot using={{ map: $animation }} />
