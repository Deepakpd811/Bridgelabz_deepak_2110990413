// let etuple: [string, number];

// etuple = ["sunil", 123];

// for (let x in etuple) {
//   console.log(etuple[x]);
// }

// let getdata = (username:string)=>{
//     return username;
// }

// console.log(getdata(7));

// function show(ename:string, sal:number) : number{
//     console.log(ename)
//     console.log(sal)
//     return sal;
// }

// arrow function is not a annonymous functuon
// arrow function is shorter from of function where function keyword is not necessary
// arrow function does not have this context;
// lexical scope inner functiion have acess to all  outer function variable and methods to inner function even after the context is lost of outer function is known as clouser

// class is a blueprint of a object,
// class member = all the variable

// public - if the class member is public it can access them using object and child clss and also inherit them

// private - if the class member is private it cannot be access by using object and  child class cannot inherit them

// protected- if the class member is protected it cannot be access by using object but child class can inherit them

// const fun = (age:number, ename:string)=>{
//     return ename;
// }
// console.log(fun(22,"mohan"));
//  class ------------------------------------
// class test {
//     a:number;
//     b:number;

//     constructor(n1:number, n2:number){
//         this.a = n1;
//         this.b = n2;
//     }

//     sum():number{
//         return this.a+this.b;
//     }

//     show():void{
//         console.log(`a is ${this.a} and b is ${this.b}`);
//     }
//     msg=()=>{
//         console.log("this is arrow function " + this.a);
//     }

// }

// let obj = new test(2,3);

// obj.show();
// console.log(obj.sum());
// obj.msg();

// function sum (a:number,b:number):number;
// function sum (a:string,b:string):string;

// function sum (a:any,b:any):any{
//     return(a+b);
// };

// console.log(sum(10,20))
// console.log(sum("hello","gum"));

// function display(x:(number | string)){
//     if(typeof(x)==="string"){
//         console.log("this is string" + x)
//     }
//     if(typeof(x)==="number"){
//         console.log("this is number" + x)
//     }
// }

// display(34);
// display("hello");
// ---------------------arrar union--------------------------
// let str:number[] | string[];
// let  tupel :[boolean,number,string]

// str = ["anil","sunil","vikas","mohan"];

// for(let i=0;i<str.length; i++){
//     console.log(str[i]);

// }

// str = [11,12,14,34,67];
// for(let i=0;i<str.length; i++){
//     console.log(str[i]);
// }

// --------------------------------------optional -----------------

// function optional(id:number,ename:string,email?:string):void{
//     console.log(id)
//     console.log(ename)
//     if(email != undefined){
//         console.log(email);
//     }
// }

// optional(12,"depk","dd@gmail.com")
// optional(12,"depk",)
// optional(12,"depk")

// -----------------------default parameter --------------------------------

// function msg(name:string,msg:string = "good morning"):void{
//     console.log(name +" "+ msg);
// }

// msg("depak","good evening")
// msg("depak")

// ---------------------------------- rest parameter -------------

// function demo(...tourist:string[]):void{
//     // console.log("cityname"+" "+cityname);

//     tourist.forEach((x)=>{
//         console.log(x);
//     })
// }

// demo("ambala","depak","amit","vijay","bully");

function optional(id: number, ename: string, email?: string): void {
    console.log(id);
    console.log(ename);
    if (email != undefined) {
      console.log(email);
    }
  }
  
  optional(12, "depk", "dd@gmail.com");
  optional(12, "depk");
  
  interface Rectangle {
    height: number;
    width: number;
  }
  
  interface ColoredRectangle extends Rectangle {
    color: string;
  }
  
  const coloredRectangle: ColoredRectangle = {
    height: 20,
    width: 10,
    color: "red",
  };
  
  interface implementMethods{
      getName():string,
      getAge():number,
  }
  
  class Person implements implementMethods{
      private name:string;
      private age:number;
      constructor(name:string, age:number){
          this.name = name;
          this.age = age;
      }
      getName(): string {
          return this.name
      }
      getAge(): number {
          return this.age;
      }
  }
  
  let u1 = new Person("deepak",23)
  console.log(u1.getAge())
  
  
  abstract class feature{
      protected myval:String;
      constructor(val:string){
          this.myval = val;
      }
      abstract setUp():number;
      print():void{
          console.log(this.myval);
      }
  }
  
  class men extends feature{
      constructor(val:string){
          super(val);
      }
      setUp(): number {
          return 123;
      }
  }
  
  let myobj = new men("hello")
  myobj.print();
  console.log(myobj.setUp())