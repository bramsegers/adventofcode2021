let input = require('fs').readFileSync('input/aoc22.txt', 'utf8').split`\r\n`
let steps = input.map(e => e.match(/on|off|(-?\d+)/g))

let p1 = () => {
  let A = [], R = 50
  for (let [t, a, b, c, d, e, f] of steps)
    for (let x = Math.max(-R, a); x <= Math.min(R, b); x++)
      for (let y = Math.max(-R, c); y <= Math.min(R, d); y++)
        for (let z = Math.max(-R, e); z <= Math.min(R, f); z++)
          A[(2 * R + 1) ** 2 * (x + R) + (2 * R + 1) * (y + R) + z + R] = (t == 'on')
  return A.reduce((a, b) => a + b, 0)
}

let intersect = (c1, c2) => {
  let x = Math.max(c1.x, c2.x)
  let y = Math.max(c1.y, c2.y)
  let z = Math.max(c1.z, c2.z)
  let p = Math.min(c1.x + c1.dx, c2.x + c2.dx)
  let q = Math.min(c1.y + c1.dy, c2.y + c2.dy)
  let r = Math.min(c1.z + c1.dz, c2.z + c2.dz)
  let i = { x, y, z, dx: p - x, dy: q - y, dz: r - z }
  if (x < p && y < q && z < r) return i
}

let p2 = () => {
  let volume = 0n
  let add = []
  let sub = []
  for (let [t, a, b, c, d, e, f] of steps) {
    let x = +a, dx = +b - a + 1
    let y = +c, dy = +d - c + 1
    let z = +e, dz = +f - e + 1
    let cuboid = { x, y, z, dx, dy, dz }
    let newSub = [], newAdd = t == 'on' ? [cuboid] : []
    for (let c of add) if (t = intersect(c, cuboid)) newSub.push(t)
    for (let c of sub) if (t = intersect(c, cuboid)) newAdd.push(t)
    for (let c of newAdd) add.push(c)
    for (let c of newSub) sub.push(c)
  }
  let v = (c) => BigInt(c.dx) * BigInt(c.dy) * BigInt(c.dz)
  for (let c of add) volume += v(c)
  for (let c of sub) volume -= v(c)
  return volume
}

console.log(p1())
console.log(p2())