

const obj = {
    name:"deepak",
    age :23
}

let obj2 = Object.create(obj)
console.log(obj2.name) // deepak

let person = {
    username:"john",
    city:"newYork"
}

Object.freeze(person)

person.username="fsdal";
person.address = "usa"
console.log(person.username) // john not chande
console.log(person.address) // undifined not added to  person object


let animal = {
    name:"dog",
    sound(){
        console.log("Bark")
    }
}

// Object.seal(animal)
animal.name = "cat"
animal.color = "white"
console.log(animal.name) // cat change
console.log(animal.color) // undifined not change

let newobj = Object.assign({},animal)
console.log(newobj)

let entries = Object.entries(animal);
let value = Object.values(animal);
let key = Object.keys(animal);

console.log(entries)
console.log(value)
console.log(key)


// Object.defineProperties(animal, {
//     weight: {
//         value: 30,
//         writable: true,
//         enumerable: true,
//         configurable: true
//     },
//     height: {
//         value: '60cm',
//         writable: true,
//         enumerable: true,
//         configurable: true
//     }
// });

console.log(animal); // Outputs: { name: "dog", sound: ƒ, breed: "Labrador", age: 3, color: "Black", weight: 30, height: "60cm"}


const bank = {
    status:"active",
    location:{
        // address:"punjab",
        pincode :"324832"
    }
}

console.log(bank?.location?.address ?? "address not found")
console.log(bank?.location?.address ?? "address not found")
// console.log(bank.location.address )            // error
console.log(bank.location.address ?? "fdjka")  // error


const account = {
    _status:"active",
    exp:"22_04_28",

   get status(){
        return this._status
   },
   set status(status){
    this._status = status
   }
}

// console.log(account.getstatus())// error 
console.log(account.status) // javascript internally called get status()


let myobj ={
    name:"deepak",
    num :10,
    num2 :110,
    valueOf(){
        return this.num
    },
    valueOf(){
        return this.num2
    },
    toString(){
        return this.name
    }
}

// let numObj = Number(myobj) // number
let strObj = myobj + 10

console.log(typeof(myobj))
console.log(strObj)
console.log(typeof(strObj))



