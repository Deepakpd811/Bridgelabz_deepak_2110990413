// function createCounter(num:number):()=>number{
//     let start:number = num;
//     return function(){
//         return start++;
//     }
// }

// let counter = createCounter(4)
// console.log(counter())
// console.log(counter())
// console.log(counter())
// console.log(counter())



function primeNumber(num:number):boolean {
  if (num < 2) return false;

  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(primeNumber(3));
console.log(primeNumber(4));
console.log(primeNumber(5));
console.log(primeNumber(6));

function capitaliseFirstLetter(str:String) {
  let arr:string[] = str.split(" ");
  let ans:string = "";

  for (let i = 0; i < arr.length; i++) {
    let strr = arr[i];

    let s = strr[0].toUpperCase() + strr.slice(1);
    ans += s + " ";
  }
  return ans;
}

console.log(capitaliseFirstLetter("hello world"));


// ---Palindrome

function isPanindrome(str:string){
    let ans = str.toLowerCase().split("");
    
    return str.toLowerCase() === ans.reverse().join("");
}

let str = "Naman"

console.log( isPanindrome(str))

//  character count

function charCount(str: string): { [key: string]: number } {
    let charcount: { [key: string]: number } = {};
    for (let ch of str) {
        charcount[ch] = (charcount[ch] || 0) + 1;
    }
    return charcount;
}

let word: string = "hello world";

console.log(charCount(word));





