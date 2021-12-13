let input = require('fs').readFileSync('input/aoc13.txt', 'utf8').split`\r\n\r\n`
let [A, B] = input.map((e, i) => e.split`\r\n`.map(e => i ? e.match(/[xy\d]+/g) : e.split`,`.map(e => +e)))

let f = (p) => {
  for (let [a, b, c = []] of B) {
    for (let [x, y] of A)
      c.push(a == 'x' ? [x < b ? x : 2 * b - x, y] : [x, y < b ? y : 2 * b - y])
    if (p == 1) return new Set(c.map(e => '' + e)).size; A = c
  }
  p = [...Array(Math.max(...A.map(e => e[1])) + 1)].map(e => Array(Math.max(...A.map(e => e[0])) + 1).fill` `)
  A.map(([x, y]) => p[y][x] = '#'), p = p.map(e => e.join``).join`\n`
  return p
}

console.log(f(1))
console.log(f(2))