// JavaScript variables can be objects. Arrays are special kinds of objects.
// Because of this, you can have variables of different types in the same Array.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array

function myfun() {
  console.log("this is fun function");
}

let arr = ["car", 123, { name: "deepak" }, myfun];
// let arr = ["car","apple","item3"]

// console.log(typeof(arr)) // object
// console.log(Array.isArray(arr))
// console.log(arr[0])
// console.log(arr[2].name)
// console.log(arr[arr.length-1]()) // undifined
// arr[arr.length-1]()

// Basic Array Methods
// Array length
// Array toString()

// Array at()
// console.log(arr.at(0))
// console.log(arr.at(2))
// console.log(arr.at(-2))

// Array join()
arr = ["car", "apple", "item3"];
let res = arr.join(" * ");
console.log(res + "---> " + typeof res);

// Array pop()
arr.pop();
console.log(arr.pop());

// Array push()
arr.push("mellon");
console.log(arr);

// Iteration Methods
// Array shift()  removes the first array element and "shifts" all other elements to a lower index.
arr.shift();
console.log(arr);

// Array unshift()

// Array delete()
// Array concat()
let newarr = ["1", 3, 3.0, 3.04, "100"];
res = newarr.concat(arr);
console.log(res); // [ '1', 3, 3, 3.04, '100', 'mellon' ]

// Array flat()
let arrayf = [
  [1, 2],
  [3, 4],
  [5, 6],
  [7, 8],
];

console.log(arrayf); //[ [ 1, 2 ], [ 3, 4 ], [ 5, 6 ], [ 7, 8 ] ]
arrayf = arrayf.flat();
console.log(arrayf); //[ 1, 2, 3, 4, 5, 6, 7, 8]

arr = [1, 2, 3, 4, 5, 7];
res = arr.flatMap((x) => x * 10);
arr = [1, 2, 3, 4, 5, 7];
res = arr.flatMap((x) => [x * 10]);
// [
//     1, 2, 3, 4,
//     5, 6, 7, 8
//   ]

console.log(res);

// Splicing and Slicing Arrays
// The splice() method adds new items to an array.
// The slice() method slices out a piece of an array.

// arr = [1,2,3,4,5,6,7,8,9]
// splice(index,deletcount,item,item,item)
// arr.splice(2,0)   // 1 2 3 4 5 6 7 8 9
// arr.splice(2,1)   // 1 2 4 5 6 7 8 9
// arr.splice(2,4)   // 1 2 7 8 9
// arr.splice(2)     //1 2
// arr.splice(3,0,"hello","world") // 1,2,3,hello,world,4,5,6,7,8,9
// arr.splice(3,3,"hello","world")  // 1,2,3,hello,world,7,8,9
// res = arr.toSpliced(0, 1);

// console.log("splice changes the original array--->"+arr)
// console.log("to spliced return new array--->"+res)

//slice return the new array
arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// res = arr.slice(2)  // 3,4,5,6,7,8,9
res = arr.slice(2, 6); // 3,4,5,6

console.log("slice---> " + res);

///////////////////sort ///

// arr = [4,2,6,4,9,1,5,7]
arr = ["100", "25", "6", "4", "9", "1", "5", "7"];
//sort fuction by default work in string
// arr.sort()         // '1','100','25','4','5','6','7', '9'

// arr.sort((a,b)=> a-b) or
arr.sort(function (a, b) {
  return a - b;
}); // '1','4','5','6','7','9','25','100'

console.log(arr);

// --------------map--------------

arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

console.log(res);
res = arr.map((x) => [x, x * 2]);
// //[
//     [ 1, 2 ],  [ 2, 4 ],
//     [ 3, 6 ],  [ 4, 8 ],
//     [ 5, 10 ], [ 6, 12 ],
//     [ 7, 14 ], [ 8, 16 ],
//     [ 9, 18 ]
//   ]
res = arr.map((x) => ({ x: x * 2 }));
// [
//     { x: 2 },  { x: 4 },
//     { x: 6 },  { x: 8 },
//     { x: 10 }, { x: 12 },
//     { x: 14 }, { x: 16 },
//     { x: 18 }
//   ]

// ---------------filter----------------------------

function filterEvenNumbers(arr) {
  return arr.filter((x) => x % 2 == 0);
}

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = filterEvenNumbers(num);
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

function filterShortStrings(arr) {
  return arr.filter((x) => x.length >= 5);
}

const str = ["apple", "cat", "banana", "dog", "elephant"];
const longStrings = filterShortStrings(str);
console.log(longStrings); // Output: ["apple", "banana", "elephant"]

function filterByProperty(arr, property, value) {
  return arr.filter((x) => x[property] == value); // when accessing object properties using variables, you need to use the bracket notation (e.g., x[property]) instead of dot notation (e.g., x.property).
}

const objarr = [
  { name: "John", age: 25 },
  { name: "Jane", age: 30 },
  { name: "Jim", age: 25 },
  { name: "Jake", age: 40 },
];

const filtered = filterByProperty(objarr, "name", "John");
console.log(filtered); // Output: [{ name: "John", age: 25 }, { name: "Jim", age: 25 }]

function isprime(x) {
  if (x <= 1) return false;

  for (let i = 2; i < x; i++) if (n % x == 0) return false;

  return true;
}

function filterPrimeNumbers(arr) {
  return arr.filter(isprime);
}

const arrprime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const primeNumbers = filterPrimeNumbers(arrprime);
console.log(primeNumbers); // Output: [2, 3, 5, 7]
