
// JavaScript Numbers are Always 64-bit Floating Point
// Unlike many other programming languages, JavaScript does not define different types of numbers, like integers, short, long, floating-point etc.
let x = 10
// console.log(x)

x= 100.23687687687687
// console.log(x)

x= 123e5
// console.log(x)

x= 123e-5
// console.log(x)

x = 999999999999999999999;  
// console.log(x)

// Trying to do arithmetic with a non-numeric string will result in NaN 

// y = "john"
y= NaN
let res = x+y
// console.log(res)
// console.log(isNaN(res))


x = 225;
res = x.toString(2)

console.log(`type is ${typeof(res)} in binary ${x.toString(2)}`)
// console.log(x.toString(10))
// console.log(x.toString(16))
// console.log(x.toString(12))


y = new Number(225)
console.log(x==y) // true
console.log(x===y)  // false


// number ---> to string
x = 100
console.log(x.toString())


// String ---> to Number
// x = "1978"
x = "1978.087"
console.log(Number(x))
console.log(Number.parseInt(x))
console.log(Number.parseFloat(x))