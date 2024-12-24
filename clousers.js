

// // let cnt =100;

// // function dec(){
// //   cnt = cnt -1;
// //   return cnt
// // }

// // console.log(dec());
// // console.log(dec());
// // console.log(dec());
// // console.log(dec());


// // console.log(cnt);


// // ____________________________________________closure_____________________________________________
// // Closures in JavaScript leverage lexical scope by allowing 
// // inner functions to remember and access variables from their outer (lexical) environments.
// Closures are used in:

// Data privacy and encapsulation
// Function factories
// Event handlers and callbacks
// Maintaining state in asynchronous code
// Partial application and currying
// Iterators and generators
// Memoization
// Module patterns

// function counter(){
//   let cnt =100;
//   return function dec(){
    
//     cnt = cnt -1;
    
//     return cnt
//   }
// // console.log(cnt); //not accesible
  
// }

// let func = counter();

// console.log(func())
// console.log(func())


// // console.log(cnt); //not accesible






// function start(){
//   let timer =0
//   setInterval(function() {
//     timer++;
//     console.log(timer)
//   }, 1000);
// }

// start()

// setTimeout example

// console.log("start")

// setInterval (function() {
//   console.log("This code will be executed once after a 2-second delay.");
// }, 2000);

// // setInterval example
// setInterval(function() {
//   console.log("This code will be executed every 1 second.");
// }, 1000);



// console.log("END")



const a = null;
const b = undefined;
const c = 45;
const d = undefined;

console.log(a??b) // if a value is null then b is
console.log(a??c??d??"default") // if a value is null then b is





















