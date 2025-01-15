
abstract class Shape{

    abstract area():number;

    display():void{
        console.log("this is shape")
    }

}

class Circle extends Shape{
    private name:string;
    private radius:number;
    constructor(name:string,radius:number){
        super()
        this.name = name;
        this.radius = radius;

    }

    area(): number {
        return Math.PI *this.radius*this.radius;
    }
}

class Rectangle extends Shape{
    private name:string
    private length:number;
    private breadth:number;

    constructor(name:string,length:number,breadth:number){
        super();
        this.name =name
        this.length = length;
        this.breadth = breadth;
    }
    area(): number {
        return this.length* this.breadth;
    }
}

const x = new Rectangle("rect",2,3);
const area = x.area()
console.log(area)