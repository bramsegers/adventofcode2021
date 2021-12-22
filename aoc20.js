let input = require('fs').readFileSync('input/aoc20.txt','utf8').split`\r\n`

let f=(n)=>{

  let a,b,c,i,j,k,s,t
  let v=(j,i)=>input[j][i]=='#'
  let w=n=>[...Array(n)].map(e=>Array(n).fill(0))

  s=input.length-2
  t=s+4*n
  a=w(t)

  for(i=0;i<s;i++)
    for(j=0;j<s;j++)
      a[i+2*n][j+2*n]|=v(i+2,j)

  for(;n--;a=b){
    b=w(t-=2)
    for(i=0;i<t;i++)
      for(j=0;j<t;j++){
        for(c=k=0;k<9;k++)
          c=2*c+a[i+k/3|0][j+k%3]
        b[i][j]|=v(0,c)
    }
  }

  t=0
  for(b of a) for(c of b) t+=c
  return t
}

console.log(f(2))
console.log(f(50))