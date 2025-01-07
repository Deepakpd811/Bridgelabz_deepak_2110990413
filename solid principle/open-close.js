// class Rectangle {
//     constructor(width, height) {
//       this.width = width;
//       this.height = height;
//     }
  
//     area() {
//       return this.width * this.height;
//     }
//   }
  
//   class AreaCalculator {
//     calculate(shape) {
//       if (shape instanceof Rectangle) {
//         return shape.area();
//       }
//       // More conditions for other shapes...
//     }
//   }

// Software entities should be open for extension but closed for modification.

// You should be able to add new functionality to a class without altering its existing code. This principle encourages the use of inheritance or interfaces.


class shape{
    area(){
        throw new Error("override it")
    }
}

class Rectangle extends shape{
    construstor(width,height){
        super()
        this.width = width;
        this.height = height

    }
    area(){
        let area = this.height * this.width
        return area;
    }
}
