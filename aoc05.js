let input = require('fs').readFileSync('input/aoc05.txt','utf8').split('\r\n')
let lines = input.map(e=>e.split` -> `.map(e=>e.split`,`.map(e=>+e)))

let overlaps=(p,q={},r=0)=>{
  for(let[ [a,b], [c,d] ] of lines) 
    while ((p | a==c | b==d) * (q[[a,b]] = -~q[[a,b]]) * (a^c | b^d))
      a += a>c ? -1 : a!=c, b+=b>d ? -1 : b!=d
  for(p in q) r += q[p]>1
  return r
}

console.log(overlaps(0))
console.log(overlaps(1))