class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  describe() {
    console.log(`${this.name} is ${this.age} years old.`);
  }
}

class Employee extends Person {
  constructor(name, age, jobTitle) {
    super(name, age);
    this.jobTitle = jobTitle;
  }

  describe() {
    console.log(
      `${this.name} is ${this.age} years old and works as a ${this.jobTitle}.`
    );
  }
}

class Manager extends Employee {
  constructor(name, age, jobTitle, department) {
    super(name, age, jobTitle);
    this.department = department;
  }

  describe() {
    console.log(
      `${this.name} is ${this.age} years old, works as a ${this.jobTitle}, and manages the ${this.department} department.`
    );
  }
}

const person = new Person("Alice", 30);
const employee = new Employee("Bob", 40, "Software Engineer");
const manager = new Manager("Charlie", 50, "Product Manager", "Development");

person.describe();
employee.describe();
manager.describe();
