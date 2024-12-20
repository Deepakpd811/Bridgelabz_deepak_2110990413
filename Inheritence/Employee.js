
class Person {
    constructor(name,age){
        this._name = name;
        this._age = age;
    }
    displayInfo(){
        console.log(`Name: ${this._name} \nAge: ${this._age}`)
    }
}

class Employee extends Person{
    constructor(name,age,jobTitle){
        super(name,age);
        this._jobTitle = jobTitle;
    }
    displayInfo(){
        super.displayInfo();
        console.log(`JobTitle: ${this._jobTitle}`)
    }
}

class Manager extends Employee{
    constructor(name,age,jobTitle,department){
        super(name,age,jobTitle);
        this._department = department;
    }
    displayInfo(){
        super.displayInfo();
        console.log(`Department: ${this._department}`)
    }
}


let emp1 = new Employee("ritick",21,"dev");
let emp2 = new Employee("Rahul",24,"devops");
emp1.displayInfo()
emp2.displayInfo()

let Manager1 = new Manager("devesh",24,"deveops","hr")
Manager1.displayInfo()