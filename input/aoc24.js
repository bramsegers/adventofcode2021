let input = require('fs').readFileSync('input/aoc24.txt', 'utf8').split`\r\n`.map(e => e.split` `)

let a = input.reduce(([a, b], c) => a.length == 17 ? [[], [...b, [...a, c]]] : [[...a, c], b], [[], []])[1]
let b = a.map((a, b) => [b = a[4][2] == 26, b ? +a[5][2] : +a[15][2]])
let c = b.reduce(([a, b], [c, d], e) => c ? [a, [...b, [e, (e = a.pop())[1], e[0] + d]]] : [[...a, [d, e]], b], [[], []])[1]
let f = p => c.reduce((a, [b, c, d]) => (a[c] = p == 1 ? d < 0 ? 9 : 9 - d : d < 0 ? 1 - d : 1, a[b] = a[c] + d, a), Array(14).fill(0)).join``

console.log(f(1))
console.log(f(2))