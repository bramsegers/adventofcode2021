let input = require('fs').readFileSync('input/aoc08.txt','utf8').split('\r\n')
let wires = input.map(e=>e.match(/[a-g]+/g).map(e=>[...e].map(e=>e.charCodeAt()-97)))
let digit = {119:0, 36:1, 93:2, 109:3, 46:4, 107:5, 123:6, 37:7, 127:8, 111:9}

let p1=(s)=>
  s.slice(-4).filter(e=>(e=e.length)<5||e==7).length

let p2=(s,a='0123456',b='',c=0)=>{
  for(let i=0;a[i];) c+=p2(s,a.slice(0,i)+a.slice(i+1),b+a[i++])
  if(!a) for(let e of s) if((e=digit[e.reduce((a,e)=>a+(1<<b[e]),0)])+1)
  c=10*c+e; else return 0; return c % 1e4
}

console.log(wires.reduce((a,b)=>a+p1(b),0))
console.log(wires.reduce((a,b)=>a+p2(b),0))