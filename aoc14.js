let input = require('fs').readFileSync('input/aoc14.txt', 'utf8').split`\r\n`
let A = input[0].split``.slice(1).reduce((d, b, i) => (d[input[0][i] + b] = 1, d), {})
let B = input.slice(2).reduce((a, b, c) => ([b, c] = b.split` -> `, a[b] = [b[0] + c, c + b[1]], a), {})

let f = (n) => {
  let a = A, b = {}, c, d
  for (; n--; a = b, b = {}) for (c in a) for (d of B[c]) b[d] = (b[d] || 0) + a[c]
  for (c in a) b[c[0]] = (b[c[0]] || (input[0].slice(-1) == c[0])) + a[c]
  return (c = Object.values(b).sort((a, b) => a - b)).pop() - c[0]
}

console.log(f(10))
console.log(f(40))