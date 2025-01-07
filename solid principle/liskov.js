// Subtypes must be substitutable for their base types without altering the correctness of the program.


// class Bird {
//     fly() {
//       console.log("Flying");
//     }
//   }
  
//   class Penguin extends Bird {
//     fly() {
//       throw new Error("Penguins can't fly!");
//     }
//   }

class bird{
    move(){
        console.log("moving")
    }
}


class flybird extends bird{
    fly(){
        console.log("flying")
    }
}

class Penguin extends bird{
    swim(){
        console.log("swimming")
    }
}

const parrot = new flybird();
const penguin = new Penguin()

parrot.fly()
parrot.move()

penguin.move()
penguin.swim()









