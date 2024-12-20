class Car {
  constructor(name, year) {
    this._name = name;
    this._year = year;
    this._engineRunning = false;
  }

  start() {
    if (!this._engineRunning) {
      this._engineRunning = true;
      console.log(`${this._name} engine is started`);
    } else {
      console.log(`${this._name} engine is Already started`);
    }
  }

  drive() {
    if (this._engineRunning) {
      console.log(`${this._name}  is driving`);
    } else {
      console.log(`${this._name}  is need to start the engine first`);
    }
  }

  stop() {
    if (this._engineRunning) {
      this._engineRunning = false;
      console.log(`${this._name}  is now stoped`);
    } else {
      console.log(`${this._name}  is now Already stoped`);
    }
  }

}

let car = new Car("ford","f-123");
console.log(car._engineRunning)
car.stop()
car.start()
car.drive()
car.stop()
car.drive()

