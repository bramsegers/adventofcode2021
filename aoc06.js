let input = require('fs').readFileSync('input/aoc06.txt','utf8').split(',').map(e=>+e)

let f=(n)=>{
  let a = Array(9).fill(0)
  for (let e of input) a[e]++
  for (let b; (b=Array(9).fill(0)) && n--; a=b)
  for (let e in a) +e ? b[e-1]+=a[e] : (b[6]+=a[e], b[8]+=a[e])
  return eval(a.join`+`)
}

console.log(f(80))
console.log(f(256))