
class Shape{
    constructor(color){
        this._color = color;
    }

    dispalyColor(){
        console.log(`color: ${this._color}`)
    }

}

class Circle extends Shape{
    constructor(color,radius){
        super(color);
        this._radius = radius;
    }

    calculateArea(){
        return Math.PI * this._radius **2;    
    }

    dispalyInfo(){
        console.log("Circle")
        this.dispalyColor();
        console.log(`Radius: ${this._radius}`)
        console.log(`Area: ${this.calculateArea()}`)
    }

}

class Rectangle extends Shape{
    constructor(color,length,breadth){
        super(color);
        this._length = length;
        this._breadth = breadth;
    }

    calculateArea(){
        return  this._length * this._breadth;
    }

    dispalyInfo(){
        console.log("Rectangle")
        this.dispalyColor();
        console.log(`len: ${this._length} \nbreadth: ${this._breadth}`)
        console.log(`Area: ${this.calculateArea()}`)
    }

}

let c1 = new Circle("red",5);
c1.dispalyInfo();

let rect1 = new Rectangle("blue",3,8);
rect1.dispalyInfo()