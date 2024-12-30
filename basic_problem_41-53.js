// 41. Create a function to calculate the distance between two points defined by their x, y coordinates
function calculateDistance(x1, y1, x2, y2) {
  return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
}

// 42. Create a function that will return a Boolean value indicating if two circles defined by center coordinates and radius are intersecting
function areCirclesIntersecting(x1, y1, r1, x2, y2, r2) {
  const distance = calculateDistance(x1, y1, x2, y2);
  return distance <= r1 + r2;
}

// 43. Create a function that will receive a bi-dimensional array as argument and a number and will extract as a unidimensional array the column specified by the number
function extractColumn(arr, col) {
  return arr.map((row) => row[col]);
}

let arr = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(extractColumn(arr, 1)); // [2, 5, 8]

// 44. Create a function that will convert a string containing a binary number into a number
function binaryToNumber(binaryString) {
  return parseInt(binaryString, 2);
}

console.log(binaryToNumber("1101")); // 13

// 45. Create a function to calculate the sum of all the numbers in a jagged array
// 46. Find the maximum number in a jagged array of numbers or array of numbers
function maxJaggedArray(arr) {
   let ans = arr.flat(Infinity);
  return Math.max(...ans);
}
console.log(maxJaggedArray([1, [2, 3], 4, [5, 6, 7], 8])); // 8

// 47. Deep copy a jagged array with numbers or other arrays in a new array
function deepCopyJaggedArray(arr) {
  return JSON.parse(JSON.stringify(arr));
}

// 48. Create a function to return the longest word in a string
function longestWord(str) {
  const words = str.split(/\s+/);
  return words.reduce(
    (longest, word) => (word.length > longest.length ? word : longest),
    ""
  );
}

// 49. Shuffle an array of strings
function shuffleArray(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// 50. Create a function that will receive n as argument and return an array of n random numbers from 1 to n. The numbers should be unique inside the array.
function uniqueRandomNumbers(n) {
  const arr = Array.from({ length: n }, (_, i) => i + 1);
  return shuffleArray(arr);
}

// 51. Find the frequency of letters inside a string. Return the result as an array of arrays. Each subarray has 2 elements: letter and number of occurrences.
function letterFrequency(str) {
  const frequency = {};
  for (const char of str) {
    if (char.match(/[a-zA-Z]/)) {
      frequency[char] = (frequency[char] || 0) + 1;
    }
  }
  return Object.entries(frequency);
}

// 52. Calculate Fibonacci(500) with high precision (all digits)
function fibonacci(n) {
  const fib = [BigInt(0), BigInt(1)];
  for (let i = 2; i <= n; i++) {
    fib[i] = fib[i - 1] + fib[i - 2];
  }
  return fib[n];
}

// 53. Calculate 70! with high precision (all digits)
function factorial(n) {
  let result = BigInt(1);
  for (let i = 2; i <= n; i++) {
    result *= BigInt(i);
  }
  return result;
}
