
class Person{
    public name:String;
    public age:number;
    constructor(name:string, age:number){
        this.name = name;
        this.age = age;
    }
    display():string{
        return `my name is ${this.name}  and age is ${this.age}`
    }
}

class Employee extends Person{
    public jobTitle:string;
    constructor(name:string, age:number,job:string){
        super(name, age)
        this.jobTitle = job;
    }

    display():string{
        return `my name is ${this.name}, age is ${this.age} and my jobtitile is ${this.jobTitle}`
    }

}

let emp1 = new Employee("ritick",22, "intern")
console.log(emp1.display())