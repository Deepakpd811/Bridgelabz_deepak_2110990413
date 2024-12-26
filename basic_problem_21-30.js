// 11. Calculate the average of the numbers in an array of numbers
let arr = [1, 2, 3, 4, 5];
let avg = 0;

for (let i = 0; i < arr.length; i++) {
  avg += arr[i] / arr.length;
}
console.log(`average is: ${avg}`);

// 12. Create a function that receives an array of numbers as argument and returns an array containing only the positive numbers

function positiveNumbers(arr) {
  let newArr = arr.map((val) => (val < 0 ? val * -1 : val));
  return newArr;
}

console.log(positiveNumbers([1, 2, -2, 4, 5]));

// 13. Find the maximum number in an array of numbers

const numArray = [1, 2, 7, 4, 2];

let max = Number.MIN_SAFE_INTEGER;

for (let i = 0; i < numArray.length; i++) {
  if (numArray[i] > max) {
    max = numArray[i];
  }
}

console.log(max);

// 14. Print the first 10 Fibonacci numbers without recursion
let fibo1 = 1;
let fibo2 = 1;
let fibo = 0;
let ans = "1 1 ";
for (let i = 2; i <= 10; i++) {
  fibo = fibo1 + fibo2;
  fibo1 = fibo2;
  fibo2 = fibo;

  ans += fibo + " ";
}
console.log(ans);

// 15. Create a function that will find the nth Fibonacci number using recursion
let n = 3;

function Fibonacci(n) {
  if (n <= 1) {
    return 1;
  }
  return Fibonacci(n - 2) + Fibonacci(n - 1);
}
console.log(`nth Fibonacci number of ${n} is: ${Fibonacci(n)}`);

// 16. Create a function that will return a Boolean specifying if a number is prime

function isPrime(n) {
  if (n < 2) return false;

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      //3 ---> 2 3 4 5 6
      return false;
    }
  }
  return true;
}

console.log(isPrime(2));
console.log(isPrime(3));
console.log(isPrime(4));
console.log(isPrime(5));
console.log(isPrime(67));

// 17. Calculate the sum of digits of a positive integer number
let povIntNumber = 123;
let pos = povIntNumber;

let sum = 0;
while (povIntNumber != 0) {
  // console.log(povIntNumber)
  let digit = povIntNumber % 10;

  sum += Number.parseInt(digit);

  // povIntNumber = povIntNumber/10  // it gives 12.3 in decimal form to fix we can use math.floor to remove the lastdigit
  povIntNumber = Math.floor(povIntNumber / 10);
}
console.log(`sum of digit ${pos} is: ${sum}`);

// 18. Print the first 100 prime numbers

let primeLine = "";
let size = 100;
let i = 1;
while (size != 1) {
  if (isPrime(i)) {
    primeLine += i + " ";
    i++;
    size--;
  }
  i++;
}
console.log(`first 100 prime numbers:\n ${primeLine}`);
// let primeAnsLength = primeLine.split(" ");
// console.log(primeAnsLength.length)

// 19. Create a function that will return in an array the first “p” prime numbers greater than “n”

function primeNumberGreaterthanN(n) {
  for (let i = n; i < n * n; i++) {
    // console.log(i)
    if (isPrime(i)) {
      return [i];
    }
  }
}

console.log(primeNumberGreaterthanN(100));

// 20. Rotate an array to the left 1 position
let rotateArray = [1, 2, 3, 4, 5]; // 2,3,4,5,1

function rotateLeftBy1(arr) {
  let len = arr.length;
  let l = arr[0];

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
    if (i == arr.length - 1) {
      arr[i] = l;
    }
  }
  return arr;
}

console.log(rotateLeftBy1(rotateArray));

// 21. Rotate an array to the right 1 position

function rotateRightBy1(arr) {
  let len = arr.length;
  let l = arr[len - 1];
  for (let i = len - 1; i >= 0; i--) {
    arr[i] = arr[i - 1];
    if (i == 0) arr[0] = l;
  }
  return arr;
}

console.log(rotateRightBy1(rotateArray));

// 22. Reverse an array

const reverse = (arr) => {
  let n = arr.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr;
};

let arrRev = [1, 2, 3, 4, 5];

console.log(reverse(arrRev));

// 23. Reverse a string
let str = "BridgeLab";
// let strArray = [...str]
// let strArray = Array.from(str);

function rev(str) {
  let strArray = str.split("");
  let n = strArray.length;
  let i = 0;
  let j = n - 1;
  while (i < j) {
    let char = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = char;
    i++;
    j--;
  }
  return strArray.join("");
}

console.log(rev(str));

// 24. Create a function that will merge two arrays and return the result as a new array

let arr1 = [1, 2, 3, 4, 5];
let arr2 = [11, 22, 33, 44, 55];

function merge(arr1, arr2) {
  let n = arr1.length;
  let m = arr2.length;
  let ans = new Array(n + m);

  let i = 0,
    j = 0,
    k = 0;

  while (i < n) {
    ans[k++] = arr1[i++];
  }
  while (j < n) {
    ans[k++] = arr2[j++];
  }
  return ans;
}

console.log(merge(arr1, arr2));

// 25. Create a function that will receive two arrays of numbers as arguments and return an
// array composed of all the numbers that are either in the first array or second array but not in both
let arr3 = [1, 2, 3, 4];
let arr4 = [3, 4, 5, 6];

function mergeUniqueElement(arr1, arr2) {
  let ans = new Set(arr1);

  for (let x of arr2) {
    ans.add(x);
  }
  return [...ans];
}

console.log(mergeUniqueElement(arr4, arr3));

// 26. Create a function that will receive two arrays and will return an array with elements that are in the first array but not in the second.

function differenceArray(arr1, arr2) {
  const result = [];
  for (let i = 0; i < arr1.length; i++) {
    if (!arr2.includes(arr1[i])) {
      result.push(arr1[i]);
    }
  }
  return result;
}

console.log(differenceArray(arr3, arr4));

// 27. Create a function that will receive an array of numbers as argument and will return a new array with distinct elements

let arr5 = [1, 1, 2, 3, 3, 4, 5];

function distinctElements(arr) {
  const distinct = [];
  for (let i = 0; i < arr.length; i++) {
    if (!distinct.includes(arr[i])) {
      distinct.push(arr[i]);
    }
  }
  return distinct;
}

console.log(distinctElements(arr5));

// 28. Calculate the sum of first 100 prime numbers and return them in an array

function CalculateFirstHundredPrime() {
  let sum = 0;
  let size = 100;
  let i = 1;
  while (size != 1) {
    if (isPrime(i)) {
      sum += i;
      i++;
      size--;
    }
    i++;
  }
  return [sum];
}

console.log(CalculateFirstHundredPrime());

// 29. Print the distance between the first 100 prime numbers

// 30. Create a function that will add two positive numbers of indefinite size.
//     The numbers are received as strings and the result should be also provided as string.
function addLargeNumber(num1, num2) {
  let sum = BigInt(num1) + BigInt(num2);
  return sum.toString();
}

console.log(addLargeNumber("123456789123456789", "987654321987654321"));
