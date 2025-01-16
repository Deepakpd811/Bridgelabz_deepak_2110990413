
// The any type turns off type checking for a variable. It can hold any value, and operations on it are not type-checked.
// let num:any;
// num = 10;
// num = true

// console.log(num) // true
// console.log(num.length) // undifined

// The unknown type also allows a variable to hold any value, but it enforces type safety by requiring type checks before operations or assignments.

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




