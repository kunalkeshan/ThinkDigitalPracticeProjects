let n = prompt()
let x = parseInt(n)
console.log(x)
var cnt = 0
while(x != 0){
  cnt++
  x = x/10
  x = x.toFixed(0)
}
let y = parseInt(n)
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let i = 0
while(i < cnt){
	console.log(a[i])
}