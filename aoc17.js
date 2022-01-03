let input = require('fs').readFileSync('input/aoc17.txt', 'utf8')
let [x0, x1, y0, y1] = input.match(/\-?\d+/g).map(e => +e)

let f = (p) => {
  let v = 0, Y = Math.max(Math.abs(y0), Math.abs(y1))
  for (let x = 1, y, cx, cy, vx, vy, t; x <= x1; x++)
    for (cx = 1 / 0, y = Y; y >= -Y && cx >= x0; y--)
      for (t = cx = cy = 0, vx = x, vy = y; cy >= y0 && !t; cx += vx, cy += vy, vx -= !!vx, vy--)
        if (!(cx < x0 | cx > x1 | cy < y0 | cy > y1) && (t = ++v) && p == 1) return y * ++y / 2
  return v
}

console.log(f(1))
console.log(f(2))