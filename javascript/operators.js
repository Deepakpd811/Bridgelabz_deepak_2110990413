// // Types of JavaScript Operators
// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// String Operators
// Logical Operators
// Bitwise Operators
// Ternary Operators
// Type Operators

let a = 10;
let b = 20;

console.log(a + b);

a = "100";
b = "10";
console.log(a + b); //10010

a = "100"; //string
b = "10"; // string
c = a / b; // number
console.log(c);
console.log(typeof c);

a = "100"; //string
b = "10"; // string
c = a * b; // number
console.log(c);
console.log(typeof c);

a = "100";
b = 20;
c = 30 + b + a;
console.log(c); //50100
console.log(typeof c); // string

a = "100";
b = 100;

console.log(a == b); // true
console.log(a === b); // false

let ans = b > 99 ? true : false; //ternary operator
console.log(ans); // true
