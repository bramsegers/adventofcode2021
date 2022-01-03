let input = require('fs').readFileSync('input/aoc19.txt', 'utf8').split`\r\n\r\n`
let scans = input.map(e => e.split`\r\n`.slice(1).map(e => e.split`,`.map(e => +e)))

let K = []
let D = [[0, 0, 0]]
let key = (x, y, z) => 1e8 * x + 1e4 * y + z

let dir = (s, n) => {
  let r = n & 3
  let d = n >> 2
  return s.map(([x, y, z]) => {
    if (r == 1) [x, y] = [-y, +x]
    if (r == 2) [x, y] = [-x, -y]
    if (r == 3) [x, y] = [+y, -x]
    if (d == 1) [y, z] = [+z, -y]
    if (d == 2) [y, z] = [-z, +y]
    if (d == 3) [x, z] = [-z, +x]
    if (d == 4) [x, z] = [+z, -x]
    if (d == 5) [x, z] = [-x, -z]
    return [x, y, z]
  })
}

let merge = () => {
  for (let S = 0; scans[S]; S++) {
    for (let i = 0; i < 24; i++) {
      let b = dir(scans[S], i)
      for (let [u, v, w] of p1) {
        for (let [p, q, r] of b) {
          let n = 0
          let c = []
          let d = u - p
          let e = v - q
          let f = w - r
          for (let [x, y, z] of b)
            if (!K[key(x + d, y + e, z + f)])
              c[n++] = [x + d, y + e, z + f]
          if (b.length - n > 11) {
            D.push([d, e, f])
            scans.splice(S, 1)
            for (let e of c)
              p1.push(e),
                K[key(...e)] = 1
            return
          }
        }
      }
    }
  }
}

let [p1, p2] = [scans.pop(), 0]
for (let e of p1) K[key(...e)] = 1
while (scans.length) merge(), console.log(scans.length)

for (let e of D)
  for (let f of D)
    p2 = Math.max(p2,
      Math.abs(e[0] - f[0]) +
      Math.abs(e[1] - f[1]) +
      Math.abs(e[2] - f[2]))

console.log(p1.length)
console.log(p2)