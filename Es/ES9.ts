//1. async iterator

// async function process(array) {
//     for await (let item of array) {
//       console.log(item);
//     }
//   }
  
//   // Create an asynchronous iterable
//   const asyncIterable = {
//     async *[Symbol.asyncIterator]() {
//       for (let i = 0; i < 5; i++) {
//         await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate delay
//         yield i; // Yield a value
//       }
//     },
//   };
  
  // Call the process function
  // process(asyncIterable);


  //2. promise finaly

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
    }).finally(()=>{
      console.log("finally will execute always")
    })
  


