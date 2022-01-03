let input = require('fs').readFileSync('input/aoc03.txt','utf8').split('\r\n')

let p = (i,c)=>c.reduce((a,b)=>+b[i]+a,0)
let q = (n)=>t.reduce((a,b)=>2*a+(2*b>input.length)^n,0)
let r = (n,i=0,c=input)=>c[1]?r(n,i+1,s(n,i,c)):+('0b'+c[0])
let s = (n,i,c)=>(n^=c.length<=2*p(i,c),c.filter(e=>e[i]==n))
let t = input.reduce((a,b)=>[...b].map((e,i)=>+e+(a[i]|0)),0)

console.log(q(0)*q(1))
console.log(r(0)*r(1))