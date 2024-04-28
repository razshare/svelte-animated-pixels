<script>
  import Animated from '$lib/components/Animated.svelte'
  import PixelMap from '$lib/components/PixelMap.svelte'
  const FRAMES = [
    `
  . x . . . . . x .
  . . x . . . x . .
  . . x x x x x . .
  . x x x x x x x .
  . x x x x x x x .
  . . x x x x x . .
  . x . . . . . x .
  . . x . . . x . .
  `,
    `
  . . . x . x . . .
  . . x . . . x . .
  . . x x x x x . .
  . x x x x x x x .
  . x x x x x x x .
  . . x x x x x . .
  . . x x . x x . .
  . . . . . . . . .
  `,
  ]
</script>

<div
  class="fixed left-0 right-0 top-0 bottom-0 grid justify-items-center items-center"
>
  <Animated frames={FRAMES} interval={1000} let:using={{ map }}>
    <PixelMap scale={5} {map} />
  </Animated>
</div>
