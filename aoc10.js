let input = require('fs').readFileSync('input/aoc10.txt','utf8').split('\r\n')
let parse = s=>(t=['()','[]','{}','<>'].reduce((a,b)=>a.replace(b,''),s))==s?s:parse(t)

let p1 = 0
let p2 = []

for(let e of input)
  if(t=(e=parse(e)).match(/[)\]}>]/)) p1+=
  [3,57,1197,25137][')]}>'.indexOf(e[t.index])]
  else p2.push([...e].reduceRight((a,b)=>5*a+'_([{<'.
  indexOf(b),0)); p2=p2.sort((a,b)=>a-b)[p2.length>>1]

console.log(p1)
console.log(p2)