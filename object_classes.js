const user = {
  name: "John",
  age: 30,
  greet() {
    console.log("Hello I am " + this.name);
  },
};

user.greet(); // Hello, I am John

class person {
  constructor() {
    this.name = "John";
    this.age = 30;
  }
  greet() {
    console.log("Hello I am " + this.name);
  }
}

const person1 = new person();
person1.greet(); // Hello, I am John

// Nested Objects
// optional chaining
// nullish coalescing operator
const user2 = {
  id: 1,
  name: "John Doe",
  address: {
    street: "123 Main St",
    city: "Anytown",
    country: {
      name: "USA",
      code: "US",
    },
  },
};

console.log(user2.address.country.name); // USA
console.log(user2.address.country.pincode); // undefined
console.log(user2.address?.country?.pincode ?? "pincode not available"); // pincode not available
console.log(user2.address?.state?.name ?? " not found"); // not found

// -----------------Shallow copy -----------------------------

// A shallow copy creates a new object, but it only copies the properties of the original object at the top level. If the original object contains nested objects (objects within objects), the references to those nested objects are copied, not the actual nested objects themselves. This means that changes to the nested objects in the copied object will affect the original object, as both the original and the copied object reference the same nested object.

let obj = {
  name: "deepak",
  age: 23,
  address: {
    city: "rajpura",
    state: "punjab",
  },
};

let shallowCopy = Object.assign({}, obj); // for copying a object

shallowCopy.age = 20;
shallowCopy.address.city = "banur";

console.log(obj.age); // output 23 not change
console.log(obj.address.city); // output banur change

//deep-copy
// A deep copy creates a new object and recursively copies all properties and nested objects. This means that changes to the copied object do not affect the original object at all, even for nested objects.

let deepcopy = JSON.parse(JSON.stringify(obj));

deepcopy.age = 31;
deepcopy.address.city = "imphal";

console.log(obj.age); // not change
console.log(obj.address.city); // not change

console.log(deepcopy.address.city);

//__________________________object methods_________________________________________

// const person2 = {
//   firstName: "John",
//   lastName: "Doe",
//   age: 50,
//   eyeColor: "blue",
//   language: "EN",
// };

// let text = Object.entries(person);
// [
//     [ 'firstName', 'John' ],
//     [ 'lastName', 'Doe' ],
//     [ 'age', 50 ],
//     [ 'eyeColor', 'blue' ]
//   ]

// let text = Object.keys(person);    //   [ 'firstName', 'lastName', 'age', 'eyeColor' ]
// let text = Object.values(person);  //   [ 'John', 'Doe', 50, 'blue' ]

// console.log(Object.getOwnPropertyNames(person))

// console.log(Object.getOwnPropertyDescriptors(Math, "PI"));

// Property flags and
//  descriptors
const obj1 = {}

Object.defineProperty(obj1,"property",{
  value:4,
  writable:false,
  enumerable: true,
  configurable: true
})

console.log(Object.getOwnPropertyDescriptor(obj1,"property"))
console.log(Object.getPrototypeOf(obj1,"property"))
// obj1.property = 6;


// delete obj1.property;

// console.log(Object.keys(obj1))

// console.log("sada",obj1.property)



let x = 10;
console.log(x.__proto__) // Number
console.log(x.__proto__.__proto__) // Object
console.log(x.__proto__.__proto__.__proto__) // null

let str = "string";
console.log(x.__proto__) // String
console.log(x.__proto__.__proto__) // Object
console.log(x.__proto__.__proto__.__proto__) // null

let isFlase = true;
console.log(x.__proto__) // Boolean
console.log(x.__proto__.__proto__) // Object
console.log(x.__proto__.__proto__.__proto__) // null

let arr = [];
console.log(x.__proto__) // array
console.log(x.__proto__.__proto__) // Object
console.log(x.__proto__.__proto__.__proto__) // null

let obj3 = {};
console.log(obj3.__proto__) // Object
console.log(obj3.__proto__.__proto__) // null


// create two objects and explanin the prototype chain

let p1 = {
  xp1:"this is p1"
}
let p2 = {
  xp2:"this is p2"
}

let p3 = Object.create(p1)

console.log(p3) // {}
console.log(p3.xp1) // this is p1

