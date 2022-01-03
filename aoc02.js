let input = require('fs').readFileSync('input/aoc02.txt','utf8').split('\r\n')
let instr = input.map(e=>e.split` `).map(([a,b])=>a[0]=='f'?[0,+b]:a[0]=='d'?[+b,0]:[-b,0])

let [y1,x1] = instr.reduce(([a,b],[y,x])=>[a+y,b+x],[0,0])
let [y2,x2] = instr.reduce(([a,b,c],[y,x])=>[a+c*x,b+x,c+y],[0,0,0])

console.log(y1*x1)
console.log(y2*x2)