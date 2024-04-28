# Svelte Animated Pixels

This library provides an easy way to create pixelated canvas animations by just declaring maps of pixels a strings.


Install with:

```sh
npm i -D svelte-animated-pixels
```

and start drawing

```svelte
<script>
  import Animated from 'svelte-animated-pixels/Animated.svelte'
  import PixelMap from 'svelte-animated-pixels/PixelMap.svelte'
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
  <Animated frames={FRAMES} let:using={{ map }}>
    <PixelMap scale={5} {map} />
  </Animated>
</div>
```

![Peek 2024-04-28 23-54](https://github.com/tncrazvan/svelte-animated-pixels/assets/6891346/6b83adba-1805-4c8f-9f1f-813707629550)


# Planned Features

| Feature | Implemented | 
|---------|-------------|
| Draw pixels using declarative maps of strings | ✅ Done - `<PixelMap/>` |
| Created animations from list of maps | ✅ Done - `<Animated/>` | 
| Fine tune each pixel's color | ✖ WIP |


