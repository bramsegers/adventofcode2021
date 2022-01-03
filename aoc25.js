let input = require('fs').readFileSync('input/aoc25.txt', 'utf8').split`\r\n`.map(e => [...e])

let n = 0
let a = input, b
let h = a.length
let w = a[0].length

for (let k = 1; k; n++, a = b) {

  k = 0, b = a.map(e => [...e])
  a.map((e, y) => e.map((e, x) => {
    if (e == '>' && a[y][(x + 1) % w] == '.')
      b[y][x] = '.', b[y][(x + 1) % w] = '>', k = 1
  }))

  a = b, b = a.map(e => [...e])
  a.map((e, y) => e.map((e, x) => {
    if (e == 'v' && a[(y + 1) % h][x] == '.')
      b[y][x] = '.', b[(y + 1) % h][x] = 'v', k = 1
  }))

}

console.log(n)