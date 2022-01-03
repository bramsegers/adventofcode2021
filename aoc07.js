let n = require('fs').readFileSync('input/aoc07.txt','utf8').split(',').map(e=>+e)

let fuel=(p)=>{
  let a=b=c=1/0,d=-a
  let f=e=>p<2?e:e*++e/2
  n.map(e=>(c=e<c?e:c,d=e<d?d:e))
  while(c<d--)b=0,n.map(e=>b+=f(e<d?d-e:e-d)),a=b<a?b:a
  return a
}

console.log(fuel(1))
console.log(fuel(2))