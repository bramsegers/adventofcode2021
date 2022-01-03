let input = require('fs').readFileSync('input/aoc18.txt', 'utf8').split`\r\n`

let evl = (s, t, [a, b] = t.match(/\d+/g)) => s.replace(/(\d+)(\D+)$/, (_, c, d) => (+a + +c) + d) + 0 + t.slice((a + b).length + 2).replace(/\d+/, c => +b + +c)
let xpl = (s, i = 0, c = 0) => !s[i] ? s : s[i] == '[' ? xpl(s, i + 1, c + 1) : s[i] == ']' ? xpl(s, i + 1, c - 1) : c < 5 ? xpl(s, i + 1, c) : evl(s.slice(0, i - 1), s.slice(i))
let spl = (s) => s.replace(/\d\d+/, d => '[' + (d >> 1) + ',' + (++d >> 1) + ']')
let rdc = (s, t) => (t = xpl(s)) !== s || (t = spl(s)) !== s ? rdc(t) : s
let mgn = (a) => a.pop ? 3 * mgn(a[0]) + 2 * mgn(a[1]) : a

let p1 = mgn(JSON.parse(input.reduce((a, b) => rdc(`[${a},${b}]`))))
let p2 = Math.max(...input.map(a => Math.max(...input.map(b => mgn(JSON.parse(rdc(`[${a},${b}]`)))))))

console.log(p1)
console.log(p2)