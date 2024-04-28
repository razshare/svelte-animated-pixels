# Svelte Animated Pixels

This library provides an easy way to create pixelated canvas animations by just declaring maps of pixels a strings.


Install with:

```sh
npm i -D svelte-animated-pixels
```

Then start drawing, the idea is pretty simple

- `x` delimits a pixel to be drawn.
- `.` delimits the background.
- Any other character that's not `x` or `.` is safely ignored.

```svelte
<style>
  .wrapper {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    display: grid;
    justify-items: center;
    align-items: center;
    background: black;
  }
</style>
<script>
  import { Animated, PixelMap } from 'svelte-animated-pixels';
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
    `
  ];
</script>

<div class="wrapper">
  <Animated frames={FRAMES} let:using={{ map }}>
    <PixelMap scale={5} {map} />
  </Animated>
</div>
```

![Peek 2024-04-28 23-54](https://github.com/tncrazvan/svelte-animated-pixels/assets/6891346/6b83adba-1805-4c8f-9f1f-813707629550)

> [!NOTE]
> Once a frame has been drawn on a pixel map, all subsequent drawn frames MUST have the same shape, meaning both width and height MUST match.

# Planned Features

| Feature | Implemented | 
|---------|-------------|
| Draw pixels using declarative maps of strings | ✅ Done - `<PixelMap/>` |
| Created animations from list of maps | ✅ Done - `<Animated/>` | 
| Fine tune each pixel's color | ✖ WIP |


