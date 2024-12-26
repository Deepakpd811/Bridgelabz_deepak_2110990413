// 1. Print numbers from 1 to 10
let ans = "";
for (let i = 1; i <= 10; i++) {
  ans += i + " ";
}
console.log(`1 to 10: ${ans}`);

// 2. Print the odd numbers less than 100
let odd = "";
for (let i = 0; i < 100; i++) {
  if (i % 2 !== 0) {
    odd += i + " ";
  }
}
console.log(`Odd Number: ${odd}`);

// 3. Print the multiplication table with 7
let n = 10;
console.log(`multiplication table with 7`);
for (let i = 1; i <= n; i++) {
  let mul = i * 7;
  console.log(`7 x ${i} = ${mul}`);
}

// 4. Print all the multiplication tables with numbers from 1 to 10

for (let i = 1; i <= n; i++) {
  for (let j = 1; j <= n; j++) {
    let mul = j * i;
    console.log(`${i} x ${j} = ${mul}`);
  }
}

// 5. Calculate the sum of numbers from 1 to 10
let sum =0;
for(let i=1; i<=10; i++) sum+=i;
console.log("sum of numbers from 1 to 10 is: "+sum)


// 6. Calculate 10!
let fact =10;
let factSum = 1;
while(fact!=1){
    factSum *= fact 
    fact--;
}
console.log(`factorial of 10 is: ${factSum}`)


// 7. Calculate the sum of even numbers greater than 10 and less than 30


let evenSum = 0;
for(let i=1; i<=30; i++){
  if(i>10 && i<30){
    evenSum += i;
  }
}
console.log(`The sum of even numbers greater than 10 and less than 30  is: ${evenSum}`)

// 8. Create a function that will convert from Celsius to Fahrenheit
function celsiusToFahreneit(celsius){
      let f = (celsius*9/5)+32;
      return f.toFixed(2);
}
console.log(celsiusToFahreneit(0)+" F")

// 9. Create a function that will convert from Fahrenheit to Celsius
function fahreneitToCelsius(fahrenheit){
      let c = (fahrenheit-32)*5/9
      return c.toFixed(2)
}
console.log(fahreneitToCelsius(100)+" C")

// 10. Calculate the sum of numbers in an array of numbers
let arr = [1,2,43,21,4,50];
let arrSum = 0;

for(let i=0; i<arr.length; i++){
   arrSum += arr[i];
}
console.log(`Sum of arr is: ${arrSum}`)


