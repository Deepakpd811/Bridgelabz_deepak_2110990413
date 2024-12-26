// 11. Calculate the average of the numbers in an array of numbers
let arr=[1,2,3,4,5];
let avg = 0;

for(let i=0; i<arr.length;i++){
    avg += arr[i]/arr.length;
}
console.log(`average is: ${avg}`)


// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function positiveNumbers(arr){
  let newArr = arr.map((val) => (val<0)?val*-1:val )
  return newArr
}

console.log(positiveNumbers([1,2,-2,4,5]))


// 13. Find the maximum number in an array of numbers

const numArray = [1,2,7,4,2]

let max = Number.MIN_SAFE_INTEGER; 

for(let i=0; i<numArray.length; i++){
  if(numArray[i] >max  ){
    max = numArray[i];
  }
}

console.log(max)

// 14. Print the first 10 Fibonacci numbers without recursion
let fibo1 =1;
let fibo2 =1;
let fibo = 0;
let ans = "1 1 "
for(let i=2; i<=10; i++){
    
    fibo = fibo1+fibo2
    fibo1 = fibo2;
    fibo2 = fibo;
    
    ans +=fibo + " "
}
console.log(ans)


// 15. Create a function that will find the nth Fibonacci number using recursion
let n = 3;

function Fibonacci(n){
  if(n<=1){
    return 1;
  }
  return Fibonacci(n-2)+Fibonacci(n-1);
}
console.log(`nth Fibonacci number of ${n} is: ${Fibonacci(n)}`)



// 16. Create a function that will return a Boolean specifying if a number is prime

function isPrime(n){
  if(n<2) return false;
 
    for(let i=2; i<n; i++){
      if(n%i===0){                  //3 ---> 2 3 4 5 6 
        return false;
        
      }
    }
    return true;
}

console.log(isPrime(2))
console.log(isPrime(3))
console.log(isPrime(4))
console.log(isPrime(5))
console.log(isPrime(67))



// 17. Calculate the sum of digits of a positive integer number
let povIntNumber = 123;
let pos = povIntNumber;

let sum= 0;
while(povIntNumber!=0){
  // console.log(povIntNumber)
  let digit = povIntNumber%10;
  
  sum += Number.parseInt(digit)
 
  // povIntNumber = povIntNumber/10  // it gives 12.3 in decimal form to fix we can use math.floor to remove the lastdigit
  povIntNumber = Math.floor(povIntNumber/10)
}
console.log(`sum of digit ${pos} is: ${sum}`)

// 18. Print the first 100 prime numbers

let primeLine = "";
let size = 100;
let i=1;
while(size!=1){
  if(isPrime(i)){
    primeLine += i + " "
    i++;
    size--;
  }
  i++;
}
console.log(`first 100 prime numbers:\n ${primeLine}`)
// let primeAnsLength = primeLine.split(" ");
// console.log(primeAnsLength.length)

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”


function primeNumberGreaterthanN(n){
  for(let i=n; i<n*n; i++){
    // console.log(i)
      if(isPrime(i)) {
        return [i];
      }
  }
}

console.log(primeNumberGreaterthanN(100))



// 20. Rotate an array to the left 1 position
let rotateArray = [1,2,3,4,5];  // 2,3,4,5,1

function rotateLeftBy1(arr){
  
  let len = arr.length; 
  let l = arr[0];
  
  for(let i=0; i<arr.length; i++){
    arr[i] = arr[i+1];
    if(i==arr.length-1){
      arr[i] = l;
    }
  }
  return arr
}

console.log(rotateLeftBy1(rotateArray))