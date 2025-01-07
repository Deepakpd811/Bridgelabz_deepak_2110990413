

// promise
//create a promise

// let x = 7; 
// let promise = new Promise((resolve, reject) => {
//     if (x > 5) {
//         resolve("Resolved: " + x);
//     } else {
//         reject("Rejected: " + x);
//     }
// });

// promise
//     .then((message) => {
//         console.log(message); // Output if x > 5
//     })
//     .catch((message) => {
//         console.log(message); // Output if x <= 5
//     });

// // function returning a promise that resolve in 2 sec
// function fetchdata(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             let data ={name:"deepak",roll:"2110990413"}
//             resolve(data)
//         }, 2000);
//     })
// }

// fetchdata().then((msg)=>{
//     // console.log(typeof(msg)) // object
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// })


// // chain promise

// function firstPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("resolve in 3 sec firstPomise")
//         }, 3000);
//     })
// }

// function secondPromise(){
//     return new Promise((resolve,reject)=>{
//         setTimeout(() => {
//             resolve("resolve in 2 sec second function")
//         }, 2000);
//     })
// }

// firstPromise().then((msg)=>{
//     console.log(msg)
//     return secondPromise()
// }).then((msg)=>{
//     console.log(msg)
// }).catch((err)=>{
//     console.log(err)
// })



function fetchSumulator(url,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve(`resolve in ${delay} url is ${url}`)
        }, delay);
    })
}

const url = ["url1","url2","url3","url4"]
const delay = [4000,3000, 500, 1000]

// promise all It waits for all promises to be resolved. If all promises are resolved successfully, it returns an array of the results.

// Promise.all(url.map((url,index)=> fetchSumulator(url,delay[index])))
// .then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// })

// promise race he Promise.race method executes the promise that resolves or rejects first, ignoring others thereafter.
// Promise.race(url.map((url,index)=> fetchSumulator(url,delay[index])))
// .then((msg)=>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)
// })


// custom error msg

class CustomError extends Error{
    constructor(msg){
        super(msg)
        this.name = "customError"
    }
}

