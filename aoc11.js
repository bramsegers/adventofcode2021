let input = require('fs').readFileSync('input/aoc11.txt','utf8').split('\r\n').map(e=>[...e].map(e=>+e))

let f=(p,a=input)=>{
  for(let h=a.length,w=a[0].length,f,t=0,n=0;f=[];){
    a=a.map((e,j)=>e.map((e,i)=>(f=e>8?(t++,[...f,w*j+i]):f,e+1)))
    for(let x,y,i,j,k=0;f[k]+1;k++) for(j=f[k]/w|0,i=f[k]%w,y=j-1;y<j+2;y++)
    for(x=i-1;x<i+2;x++) if(y^j|x^i&&a[y]&&++a[y][x]>9&&!f.includes(w*y+x))f.push(w*y+x),t++
    f.map(e=>a[e/w|0][e%w]=0); if(++n==100 && p==1) return t; if(f.length==w*h && p==2) return n
  }
}

console.log(f(1))
console.log(f(2))