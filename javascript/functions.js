
// 1: Function Declaration
// Task 1: Write a function to check if a number is even or odd and log the result to the console.
function isEven(num){
    if(num%2==0){
        return "Even"
    }else{
        return "Odd"
    }
}
console.log(isEven(7))

// Task 2: Write a function to calculate the square of a number and return the result.

function calculateSquare(num){
    return num*num;
}
console.log(calculateSquare(5))

// 2: Function Expression
// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
function Max(a,b){
    if(a>b){
        return a;
    }else {
        return b;
    }
}
console.log(Max(11,100))

// Task 4: Write a function expression to concatenate two strings and return the result.
function concat(a,b){
    let ans = a+" "+b;
    return ans;
}
console.log(concat("hello","world"))

// 3: Arrow Functions
// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a,b)=>{return (a+b)};

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.

const isContain = (str,char) =>{
    for(let i=0; i<str.length; i++){
        if(str.charAt(i)==char) return true;
    }
    return false;
}
console.log(isContain("hello",'l'))

// 4: Function Parameters and Default Values
// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter.
function mul(a,b=1){
    return a*b;
}

// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.

function greeting(name ,age=20){
    return "Good morning"+name+" your age is "+age;
}
console.log(greeting("deepak"))

// 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.

function repeat(fn,times){
    for(let i=0;i<times; i++){
        fn();
    }
}
function sayHello(){
    console.log("Hello")
}

repeat(sayHello,5);

// Task 10: Write a higher-order function that takes two functions and a value, 
//applies the first function to the value, and then applies the second function to the result.

function finalfun(fun1,fun2,value){
    const fun1value = fun1(value);
    const finalvalue = fun2(fun1value);
    return finalvalue;
}

function add(value){
    return value+2;
}
function mul(value){
    return value*3;
}

console.log(finalfun(add,mul,5))

function fibo(n){
    if(n<=1){
        return n;
    }
    return fibo(n-1)+fibo(n-2);
}

for(let i=0; i<8; i++){
    console.log(fibo(i))
}

