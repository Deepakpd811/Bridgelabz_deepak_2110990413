// let myPromise = new Promise((resolve, reject) => {
//   let x = Math.random();
//   if (x > 0.8) {
//     resolve("this is resolve");
//   } else {
//     reject("this is reject");
//   }
// });

// myPromise.then((res) => console.log(res)).catch((err) => console.log(err));

let myPromiseDelay = new Promise<String>((resolve, reject) => {
  let status = false;
  setTimeout(() => {
    // status = true;
    if (status) {
      resolve("resolve in 2 sec is true");
    } else {
      reject("reject");
    }
  }, 2000);
});

myPromiseDelay
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
