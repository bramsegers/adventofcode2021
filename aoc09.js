let map = require('fs').readFileSync('input/aoc09.txt','utf8').split('\r\n').map(e=>[...e].map(e=>+e))
let min = (j,i)=>Math.min(j?map[j-1][i]:1/0,i?map[j][i-1]:1/0,map[j+1]?map[j+1][i]:1/0,(j=map[j][i+1])<9?j:1/0)
let dfs = (j,i)=>map[j]&&map[j][i]+1&&map[j][i]<9?(map[j][i]=9,1+dfs(j-1,i)+dfs(j,i-1)+dfs(j+1,i)+dfs(j,i+1)):0

let p1=0,p2=[]
map.map((a,j)=>a.map((b,i)=>b<min(j,i) && (p1+=b+1) && p2.push(dfs(j,i))))
p2=p2.sort((a,b)=>b-a)[0]*p2[1]*p2[2]

console.log(p1)
console.log(p2)
