let a=require('fs').readFileSync('input/aoc04.txt','utf8').split('\r\n\r\n')


let bingo     =    _ => {
  
  b=i=n=g=o   =    new Set()
  B           =    a[0].split`,`.map(e=>+e)
    I         =    a=>a.match(/\d+/g).map(e=>+e)
      N       =    a.slice(1).map((e,i)=>[i,I(e)])
        G     =    a=>!n.filter((_,j)=>a(j)==a(g)).join``
          O   =    a=>b.add(i)&&b.size==(_&1||N.length)
  B_I_N_G_O   =    a=>(g=n.indexOf(o))+1&&+(n[g]='')+G(e=>e/5|0)
                   + G(e=>e%5)&&O();for(o of B)for([i,n]of N)if
( B_I_N_G_O() )    return o*n.reduce((a,b)=>+b+a,0)}


console.log(bingo(1))
console.log(bingo(2))