(function fun() {
  //immediately invoked function expression
  console.log("called");
})();

(function test(n,str){
  console.log(arguments)
})(4,"hello")

function test(){
  for(let i=0; i<arguments.length; i++){

    console.log(arguments[i]);
  }
}

function test(...args){
    console.log(args) //  [Arguments] { '0': 4, '1': 'hello' }
    console.log(typeof(args)) //object
}

test(4,"hello",true)

// const mul = function (a,b){
//   return a*b;
// }

// const sum = (a,b)=>{
//   return a+b
// }
// ;
// console.log(sum(10,20))
// console.log(mul(10,20))

// let a = 10;
// let b = 30;
// let ans;

// (function (a,b){               // self-invoke function
//   return ans = a*b
// })(a,b)

// console.log(ans);


// __________________________call()_________________________________

// const obj = {name:"deepak" , roll:413}

// function printmsg(name){
//   console.log(name)
//   console.log(this.name)
// }

// printmsg.call(obj)
// printmsg.call(obj,"mohan")
// // printmsg.call("mohan",obj)

// function totalSum(num1,num2){
//   return this.x+this.y+num1+num2;
// }
// ______________________________apply()_______________________________________________

// console.log(`total sum ${totalSum.apply({x:10,y:20},[30,40])}`);

// const arr = [1,5,2,8,4,0]

// console.log(Math.min(arr))

// console.log(`total sum ${totalSum.apply(null,[30,40])}`);
// console.log(Math.min.apply(null,arr))
// console.log(Math.max.apply(null,arr))

// ___________________________________bind()___________________________________________________

// // console.log(totalSum.bind({x:10,y:20},12,34))// [Function: bound totalSum]
// const print = totalSum.bind({x:10,y:20},12,34);

// console.log(print) // [Function: bound totalSum]
// console.log(print()) // [Function: bound totalSum]
