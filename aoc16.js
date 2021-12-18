let input = require('fs').readFileSync('input/aoc16.txt', 'utf8')
let bin = [...input].map(e => (+('0x' + e)).toString(2).padStart(4, 0)).join``

let calc = (id, a) =>
  id == 0 ? a.reduce((a, b) => a + b) :
  id == 1 ? a.reduce((a, b) => a * b) :
  id == 2 ? a.reduce((a, b) => b < a ? b : a) :
  id == 3 ? a.reduce((a, b) => b > a ? b : a) :
  id == 5 ?  a[0] >  a[1] :
  id == 6 ?  a[0] <  a[1] :
  id == 7 && a[0] == a[1]

let parse = () => {
  let n = () => bin.length
  let f = (n, s = '0b' + bin.slice(0, n)) => (bin = bin.slice(n), +s)
  let v = f(3), t = f(3), a = [], p, q, r; p1 += v;
  if (t == 4) for (p = 0, q = 1; q;) q = f(1), p = 16 * p + f(4); else
  for (r = f(1), p = f(15 - 4 * r); p;) q = n(), a.push(parse()), p -= r ? 1 : q - n()
  return t == 4 ? p : calc(t, a)
}

let p1 = 0
let p2 = parse()
console.log(p1)
console.log(p2)