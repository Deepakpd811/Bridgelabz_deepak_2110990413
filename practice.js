
const myCar = {
    speed:0,

    operate(speedLimit,cb){
        boundcb = cb.bind(this)
        boundcb(speedLimit) 
        console.log("operate --> "+this.speed)
    }

}

function drive(speed){
    this.speed = speed
    console.log("Drive function " +this.speed)
    // console.log(speedLimit)
}

myCar.operate(55,drive)



const product = {
    price: 100,
    discount (dispercent,cb){
        boundCallback = cb.bind(this)
       this.price =  boundCallback(dispercent)
        console.log(this.price)
    }
}

function calculateDiscount(dispercent){
    let disprice = (this.price * dispercent) /100
    console.log(disprice)
    return disprice
}


product.discount(30,calculateDiscount)
const Timer = {
    time: 0, 
    start(seconds) {
        this.time = seconds; 
        console.log(`Timer started for ${this.time} seconds...`);
            
        const boundNotify = notify.bind(this); 
        setTimeout(boundNotify, this.time * 1000); 
    }
};

function notify() {
   
    console.log(`Time's up! The timer was set for ${this.time} seconds.`);
}


Timer.start(3); 

const obj1 = {name:"deepak",roll:"2110990413"}
const obj2 = {name:"deepak",roll:"2110990413"}

console.log(obj1==obj2) //false
console.log(obj1===obj2) //false

const obj3 = obj1;  // refrence to obj1

console.log(obj1==obj3) //true
console.log(obj1===obj3) //true

const obj4 = {...obj1}  // create a new object shallow copy does not affect the original array
console.log(obj4==obj1) // false
console.log(obj4===obj1) // false

const obj5 = Object.create(obj1) // create a new object 
console.log(obj5==obj1) // false
console.log(obj5===obj1) // false


function add(x){
    return function (y){
        return x+y
    }
}



console.log(add(5)(6))
