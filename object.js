const obj = {
    name:"deepak",
    age:23,
    info : function(){
        return `my name is ${this.name} and age is ${age}`
    }
}

console.log(obj)
obj.city = "imphal"
console.log(obj)

console.log(obj.info)

// loops in object

for(let x in obj) console.log(obj[x])

obj.getInfo = function(){
    return `my name is ${this.name} age is ${this.age} , i live in ${this.city}`
}

console.log(obj.getInfo())

//object values

const arr = Object.values(obj);

console.log(arr)
//[ 'deepak', 23, 'imphal', [Function (anonymous)] ]

const myArr = Object.entries(obj)
console.log(myArr)
// [
//     [ 'name', 'deepak' ],
//     [ 'age', 23 ],
//     [ 'city', 'imphal' ],
//     [ 'getInfo', [Function (anonymous)] ]
//   ]

//convert object to string_________________________

const objectString = JSON.stringify(obj)
console.log(typeof(objectString)+" type --->"+objectString)
//stringtype --->{"name":"deepak","age":23,"city":"imphal"}
