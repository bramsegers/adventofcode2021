let input = require('fs').readFileSync('input/aoc23.txt', 'utf8').split`\r\n\r\n`

let f = (pt) => {
  let P = input[pt - 1].split`\r\n`
  let p = [], v = {}, c, x, y
  let a = [], b = '.ABCD'
  for (y = 0; P[y]; y++)
    for (x = 0; P[y][x]; x++)
      if (b.includes(c = P[y][x]))
        v[[y, x]] = [a.length, y, x],
        a.push(b.indexOf(c))

  let paths = (i, y, x, a, b) => {
    b[i] = (a = [...a, i]).slice(1)
    y = [[y - 1, x], [y + 1, x], [y, x - 1], [y, x + 1]]
    for (x of y) if ((x = v[x]) && !a.includes(x[0]))
      paths(...x, a, b)
  }

  for (let e in v)
    [c, y, x] = v[e],
    paths(c, y, x, [], p[c] = [])


  let dfs = (a, n) => {
    for (var j, k, t, u, i = 0; i < 11; i++)
      if (a[i] && (t = p[i][a[i] + 8 * pt + 6]).every(e => !a[e]))
        return u = 10 ** (a[i] - 1), a[i] = 0, dfs(a, n + t.length * u)
    if (!v[u = a.join``] || v[u] > n)
      for (v[u] = n, i = 11; i < a.length; i++)
        if (a[i]) for (j of [0, 1, 3, 5, 7, 9, 10])
          if ((t = p[i][j]).every(e => !a[e]))
            k = [...a], k[t[t.length - 1]] = a[i], k[i] = 0, 
            u = 10 ** (a[i] - 1), dfs(k, n + t.length * u)
  }

  v[b = a.map(e => 0).join``] = 1 / 0
  dfs(a, pt == 1 ? -1111 : -6666)
  return v[b]
}

console.log(f(1))
console.log(f(2))