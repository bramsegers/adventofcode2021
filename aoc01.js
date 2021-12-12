let input = require('fs').readFileSync('input/aoc01.txt','utf8').split('\r\n').map(e=>+e)

let f=(n)=>input.reduce((a,b,i)=>a+(b>input[i-n]),0)

console.log(f(1))
console.log(f(3))