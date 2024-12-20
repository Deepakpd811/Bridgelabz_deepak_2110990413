

class Vehicle{
    constructor(make,model,year){
        this.make = make;
        this.model = model;
        this.year = year;
    }

    displayInfo(){
        console.log(`Vehicle make in ${this.make} model is ${this.model} year ${this.year}`)
    }
}


class Car extends Vehicle{
    constructor(make,model,year,doors){
        super(make,model,year);
        this.doors = doors;
    }
    displayInfo(){
        super.displayInfo()
        console.log(`Doors is  ${this.doors}`)
    }
}

class Truck extends Vehicle{
    constructor(make,model,year,payloadCapacity){
        super(make,model,year);
        this._payloadCapacity = payloadCapacity;
    }

    displayInfo(){
        super.displayInfo();
        console.log(`payloadCapacity: ${this._payloadCapacity}`)
    }
}


const car = new Car('Toyota', 'Camry', 2020, 4);
car.displayInfo()

const truck = new Truck("ford","f-245",2024,5000)
truck.displayInfo()