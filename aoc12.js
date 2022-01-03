let input = require('fs').readFileSync('input/aoc12.txt', 'utf8').split`\r\n`.map(e => e.split`-`)
let paths = input.reduce((p, [a, b]) => (p[a] = [...p[a] || [], b], p[b] = [...p[b] || [], a], p), {})

let f = (a, b, c, d) => {
  let p, q, r, s, t, u, v = b == B
  for (p of v ? [] : paths[b])
    q = c.includes(p),
    r = /[A-Z]/.test(p),
    s = a * !d * (p != A),
    t = q * s * !r ? p : d,
    u = q * !s + r ? c : c + p,
    v += !q + s + r ? f(a, p, u, t) : 0
  return v
}

let [A, B] = ['start', 'end']
let p1 = f(0, A, A)
let p2 = f(1, A, A)

console.log(p1)
console.log(p2)