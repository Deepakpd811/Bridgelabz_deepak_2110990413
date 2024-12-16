// // --------------map--------------

// arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// console.log(res);
// res = arr.map((x) => [x, x * 2]);
// // //[
// //     [ 1, 2 ],  [ 2, 4 ],
// //     [ 3, 6 ],  [ 4, 8 ],
// //     [ 5, 10 ], [ 6, 12 ],
// //     [ 7, 14 ], [ 8, 16 ],
// //     [ 9, 18 ]
// //   ]
// res = arr.map((x) => ({ x: x * 2 }));
// // [
// //     { x: 2 },  { x: 4 },
// //     { x: 6 },  { x: 8 },
// //     { x: 10 }, { x: 12 },
// //     { x: 14 }, { x: 16 },
// //     { x: 18 }
// //   ]

// // ---------------filter----------------------------

// function filterEvenNumbers(arr) {
//   return arr.filter((x) => x % 2 == 0);
// }

// const num = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const evenNumbers = filterEvenNumbers(num);
// console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]

// function filterShortStrings(arr) {
//   return arr.filter((x) => x.length >= 5);
// }

// const str = ["apple", "cat", "banana", "dog", "elephant"];
// const longStrings = filterShortStrings(str);
// console.log(longStrings); // Output: ["apple", "banana", "elephant"]

// function filterByProperty(arr, property, value) {
//   return arr.filter((x) => x[property] == value); // when accessing object properties using variables, you need to use the bracket notation (e.g., x[property]) instead of dot notation (e.g., x.property).
// }

// const objarr = [
//   { name: "John", age: 25 },
//   { name: "Jane", age: 30 },
//   { name: "Jim", age: 25 },
//   { name: "Jake", age: 40 },
// ];

// const filtered = filterByProperty(objarr, "name", "John");
// console.log(filtered); // Output: [{ name: "John", age: 25 }, { name: "Jim", age: 25 }]

// function isprime(x) {
//   if (x <= 1) return false;

//   for (let i = 2; i < x; i++) if (n % x == 0) return false;

//   return true;
// }

// function filterPrimeNumbers(arr) {
//   return arr.filter(isprime);
// }

// const arrprime = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const primeNumbers = filterPrimeNumbers(arrprime);
// console.log(primeNumbers); // Output: [2, 3, 5, 7]

// const users = [
//   { name: "Alice", age: 25 },
//   { name: "Bob", age: 30 },
//   { name: "Charlie", age: 25 },
//   { name: "David", age: 40 },
// ];
// //find the user whose age >25
// const newUserArray = users.filter((val)=>val.age>25).map((val)=>val.name);
// console.log(newUserArray)

// const strings = ['apple', 'cat', 'banana', 'dog', 'elephant'];
// const longUppercaseStrings = strings
//   .filter(str => str.length >= 5)  // Filter strings with 5 or more characters
//   .map(str => str.toUpperCase());  // Map to uppercase

// console.log(longUppercaseStrings); // Output: ['APPLE', 'BANANA', 'ELEPHANT']

//find the len of arr which contain 10 in it
// const nestedArrays = [
//   [1, 2, 3],
//   [4, 5, 6],
//   [7, 8, 9, 10],
//   [11, 12, 13],
// ];

// const newNestedArrays = nestedArrays
//   .filter((x) => x.includes(10))
//   .map((x) => x.length);
// console.log(newNestedArrays);

// const students = [
//   { name: "John", score: 45 },
//   { name: "Jane", score: 75 },
//   { name: "Jim", score: 60 },
//   { name: "Jake", score: 40 },
// ];

// const newStudents = students.filter(val=>val.score>50).map((val)=>val.name)
// console.log(newStudents)

//__________________________________REDUCE________________________________________________________________________

const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, curval) => total + curval);
console.log(sum); // Output: 15

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flatArray = nestedArray.reduce(
  (total, curval) => {return total.concat(curval)},
  []
);

console.log(flatArray);

const items = ["apple", "banana", "apple", "orange", "banana", "apple"];

const occurence = items.reduce((total, val) => {
  if (total[val]) {
    total[val]++;
  } else {
    total[val] = 1;
  }

  return total;
}, {});

console.log(occurence);

const people = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 25 },
  { name: "Charlie", age: 30 },
  { name: "David", age: 30 },
  { name: "Edward", age: 25 },
];

const groupPeople = people.reduce((total,val)=>{

    if(!total[val.age]){
        total[val.age] = []
    }

    total[val.age].push(val)

    return total


},{})

console.log(groupPeople)


const scores = [10,10,10]

const average = scores.reduce((accu,val,index)=>{
    if(index==scores.length-1){
       
        return (accu+val)/scores.length;
    }
    accu += val;
    return accu
},0)

console.log(average)

