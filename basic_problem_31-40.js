// 31. Create a function that will return the number of words in a text

function countWords(str) {
  let arr = str.split(" ");
  return arr.length;
}

const text = "This is a sample text with several words!";
const wordCount = countWords(text);
console.log(wordCount); // 8

// 32. Create a function that will capitalize the first letter of each word in a text

function firstCapital(str) {
  let arr = str.split(" ");
  let newarr = arr.map((word) => word.charAt(0).toUpperCase() + word.slice(1));
  return newarr.join(" ");
}

console.log(firstCapital(text));

// 33. Calculate the sum of numbers received in a comma delimited string

function sumOfNumbers(str) {
  let arr = str.split(",").map(Number);
  let sum = arr.reduce((acc, val) => acc + val, 0);
  return sum;
}

const str = "10,20,30,40,50";
const sum = sumOfNumbers(str);
console.log(sum); // Output: 150

// 34. Create a function that returns an array with words inside a text.

function getWords(str) {
  return str.trim().split(" ");
}
console.log(getWords(text));

// 35. Create a function to convert a CSV text to a “bi-dimensional” array

// 36. Create a function that converts a string to an array of characters
function stringToArray(str) {
  let arr = [...str];
  return arr;
}

const str2 = "Hello";
console.log(stringToArray(str2)); // [ 'H', 'e', 'l', 'l', 'o' ]

// 37. Create a function that will convert a string in an array containing the ASCII codes of each character

function stringToAsciiArray(str) {
  let arr = [...str];
  return arr.map((val) => val.charCodeAt(0));
}

const str1 = "Hello";
console.log(stringToAsciiArray(str1)); // [72, 101, 108, 108, 111]

// 38. Create a function that will convert an array containing ASCII codes in a string

function asciiArrayToString(asciiArray) {
  let arr = [...asciiArray];
  let str = arr.map((val) => String.fromCharCode(val)).join("");
  return str;
}

const asciiArray = [72, 101, 108, 108, 111];

console.log(asciiArrayToString(asciiArray)); // Output: "Hello"

// 39. Implement the Caesar cypher
// 40. Implement the bubble sort algorithm for an array of numbers

function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
}
