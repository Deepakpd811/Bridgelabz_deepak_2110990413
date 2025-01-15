// 1.class
class Account {
  private balance: number;
  private name: string;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  public getBalance() {
    return this.balance;
  }
}

// 2. Module

// export var name:string = 'Rainbow'

// var name = 'Rainbow';
// var age = '24';
// export {name, age};

// //Derived constant
// export const sqrt = Math.sqrt;

// //derived function
// export function myModule(someArg) {
//   return someArg;

// 3. Arrow function

const add = (a: number, b: number): number => {
  return a + b;
};

const greet = (name: string): string => {
  return `Hello ${name}`;
};

console.log(add(10, 20));
console.log(greet("Deepak"));

// 4.Default parameter

function multiply(a: number, b: number = 4, c: number = 10): number {
  return a * b * c;
}

console.log(multiply(10, 10)); //1000
console.log(multiply(10, 10, 2)); // 200
console.log(multiply(10)); // 400

// 5. Destructure

let arr: string[] = ["apple", "banana", "mango", "cherry"];
// console.log(arr[0])
// console.log(arr[1])
// console.log(arr[2])
let [first, second] = arr;
console.log(first, second);

let [first1, , third] = arr;
console.log(first1, third);

const obj = { name: "123", title: "456", type: "aaa" };


// 5.spread operator
let numArr1:number[] = [1,2,3,4]
let numArr2:number[] = [5,6,7,8]
let merge:number[] = [ ...numArr1, ...numArr2]

let params = {
    name: '123',
    title: '456',
    type: 'aaa'
}

let copyParams = {...params}
console.log(copyParams) // shallow copy

let {type, ...other} = params;  // unpack the type value 
console.log(other)

// 7.promise

let myPromise: Promise<string> = new Promise((resolve, reject) => {
    let x = Math.random();
    if (x > 0.8) {
      resolve("This is resolved");
    } else {
      reject("This is rejected");
    }
  });
  
  myPromise
    .then((message) => {
      console.log("Success:", message);
    })
    .catch((error) => {
      console.log("Error:", error);
    });
  

