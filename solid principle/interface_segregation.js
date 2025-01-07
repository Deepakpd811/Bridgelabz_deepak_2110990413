// class Animal {
//     eat() {}
//     fly() {}
//     swim() {}
//   }
  
//   class Dog extends Animal {
//     fly() {
//       throw new Error("Dogs can't fly");
//     }
  
//     swim() {
//       console.log("Dogs can swim");
//     }
// }


// No client should be forced to depend on methods it does not use.

// In JavaScript, while we don’t have traditional interfaces, we can still follow this principle by splitting large interfaces into more specific ones.


class Eater {
    eat() {
      console.log("Eating");
    }
  }
  
  class Swimmer {
    swim() {
      console.log("Swimming");
    }
  }
  
  class Flyer {
    fly() {
      console.log("Flying");
    }
  }
  
  class Dog extends Eater {}
  class Duck extends Eater {
    swim() {
      console.log("Swimming");
    }
  
    fly() {
      console.log("Flying");
    }
  }
  
  const dog = new Dog();
  const duck = new Duck();
  
  dog.eat();  // Works
  duck.fly(); // Works
  duck.swim();// Works

