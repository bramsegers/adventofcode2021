let input = require('fs').readFileSync('input/aoc21.txt', 'utf8').split`\r\n`
let [A, B] = input.map(e => e.slice(-1) - 1)

let p1 = (A, B) => {
  let p = [A, B], s = [0, 0], t = 0
  for (let d = 0, n = 3; ; n += 3, t ^= 1) {
    for (let i = 3; i--;) p[t] += ++d, d %= 100
    if ((s[t] += (p[t] %= 10) + 1) > 999) return n * s[t ^ 1]
  }
}

let p2 = (A, B, s, t, a = 0, b = 0, c = 0) => {
  if (a > 20) return s
  if (b > 20) return s ^ 1
  for (let [u, v] of [[3, 1], [4, 3], [5, 6], [6, 7], [7, 6], [8, 3], [9, 1]])
    if (t) c += v * p2(A, u = (B + u) % 10, s, t ^ 1, a, b + u + 1)
    else c += v * p2(u = (A + u) % 10, B, s, t ^ 1, a + u + 1, b)
  return c
}

console.log(p1(A, B))
console.log(Math.max(p2(A, B, 1), p2(A, B, 0)))