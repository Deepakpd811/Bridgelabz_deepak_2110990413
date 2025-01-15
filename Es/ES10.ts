// Added the flat() method and flatMap() method of Array
var arr1:(number |number[])[] = [1, 2, [3, 4]];
arr1.flat();
// [1, 2, 3, 4]

var arr2:(number | (number | number[])[])[] = [1, 2, [3, 4, [5, 6]]];
arr2.flat();
// [1, 2, 3, 4, [5, 6]]

var arr3 = [1, 2, [3, 4, [5, 6]]];
arr3.flat(2);
// [1, 2, 3, 4, 5, 6]

//Using Infinity as the depth, expand the nested array of any depth
arr3.flat(Infinity);
// [1, 2, 3, 4, 5, 6]

//Remove null items
var arr4 = [1, 2, , 4, 5];
arr4.flat();
// [1, 2, 4, 5]

var arrMap:number[] = [1, 2, 3, 4];

arrMap.map(x => [x* 2]); 
// [[2], [4], [6], [8]]

arrMap.flatMap(x => [x * 2]);
// [2, 4, 6, 8]

// Only "flatten" the array returned by the function in flatMap
arrMap.flatMap(x => [[x * 2]]);
// [[2], [4], [6], [8]]

// Added trimStart() method and trimEnd() method of String
let  greeting:string =  "    Hello World";
console.log(greeting.trimStart());// "Hello World"

let greeting1: string= "Hello World    ";
console.log(greeting1.trimEnd());// "Hello World"

// Object.fromEntries()

// Through Object.fromEntries, Map can be converted to Object:

const map = new Map<string, string | number>([ ['foo', 'bar'], ['baz', 42] ]);
const obj3 = Object.fromEntries(map);
console.log(obj3); // { foo: "bar", baz: 42 }

// Through Object.fromEntries, you can convert Array to Object:

const arr:(string[])[] = [ ['0', 'a'], ['1', 'b'], ['2', 'c'] ];
const obj = Object.fromEntries(arr);
console.log(obj); // { 0: "a", 1: "b", 2: "c" }


// Simplify try {} catch {} and modify the catch binding

function divide(a: number, b: number): number {
    try {
      if (b === 0) {
        throw new Error('Cannot divide by zero');
      }
      return a / b;
    } catch (error) {
        console.log(error)
      return NaN;
    }
  }
  
  console.log(divide(10, 2)); // 5
  console.log(divide(10, 0)); // "Cannot divide by zero" (error message)
  


