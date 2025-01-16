
// Use any when you know you will be dealing with values of different types and you don't need type safety or want to disable type checking temporarily (e.g., working with third-party libraries that have no type definitions).

// let num:any;
// num = 10;
// num = true

// console.log(num) // true
// console.log(num.length) // undifined

// Use unknown when you are dealing with dynamic values but want to maintain type safety. You must narrow down the type before performing operations, making your code safer and preventing potential runtime errors.


let num:unknown;
num = 10;
num = true
num = "anystringgg"

// console.log(num) // true
// console.log(num.length) //  gives error

if(typeof(num) === "string"){
    console.log(num.length)
}else if (typeof(num) === "boolean"){
    console.log(num)
}




