let P = require('fs').readFileSync('input/aoc15.txt', 'utf8').split`\r\n`

let f = (n) => {
  
  let p = P.length
  let q = p * n
  let i, j, k
  let Q = []
  let G = {}
  
  for (j = 0; j < q; j++) {
    for (Q[j] = [], i = 0; i < q; i++) {
      k = j < p ? i < p ? +P[j][i] : Q[j][i - p] + 1 : Q[j - p][i] + 1
      Q[j][i] = k > 9 ? 1 : k
    }
  }
  
  for (j = 0; j < q; j++) {
    for (i = 0; i < q; i++) {
      G[k = q * j + i] = {}
      if (j) G[k][k - q] = Q[j - 1][i]
      if (i) G[k][k - 1] = Q[j][i - 1]
      if (j < q - 1) G[k][k + q] = Q[j + 1][i]
      if (i < q - 1) G[k][k + 1] = Q[j][i + 1]
    }
  }
  
  k = require('./dijkstra').find_path(G, '0', q * q - 1)
  return k.slice(1).reduce((a, b) => a + Q[b / q | 0][b % q], 0)
}
ms=Date.now()
console.log(f(1))
console.log(f(5))
ms=Date.now()-ms
console.log({ms})