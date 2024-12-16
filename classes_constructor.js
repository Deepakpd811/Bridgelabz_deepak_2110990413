
function Person(name, age) {
  // function constructor
  this.name = name;
  this.age = age;
  this.course = "CSE";
  
}

const p1 = new Person("deepak", 23);
const p2 = new Person("Mohan", 21);
console.log(p1);
console.log(typeof p1);

p1.eyecolor = "brown"; //adding properties in p1 only

console.log(p1);
console.log(p2);

Person.prototype.changeName = function (name) {
  // adding method to a constructor
  this.name = name;
};

p2.changeName("Rahul");
console.log(p2);

// Objective: Create a class to manage a collection of Movie objects.
// Task:
// Define a class Movie with properties: title, director, and year.
// Create a class MovieCollection with methods to add a movie, remove a movie, and get all movies.
// Implement a method to get movies by a specific director

class Movie {
  constructor(title, director, year) {
    (this.title = title), (this.director = director), (this.year = year);
  }
}

class MovieCollection {
  constructor() {
    this.collection = [];
  }

  addMovie(movie) {
    this.collection.push(movie);
  }
  removeMovie(title) {
    this.collection = this.collection.filter((val) => val.title !== title);
  }
  getAll() {
    return this.collection;
  }
  getByDirector(director){
    this.collection = this.collection.filter((val)=> val.director==director)
  }
}

const colObj = new MovieCollection();
const movie1 = new Movie("Inception", "Christopher Nolan", 2010);
const movie2 = new Movie("Interstellar", "Christopher Nolan", 2014);
const movie3 = new Movie("Parasite", "Bong Joon-ho");

colObj.addMovie(movie1)
colObj.addMovie(movie2)
colObj.addMovie(movie3)

colObj.getByDirector("Christopher Nolan")

console.log(colObj.collection)
console.log(colObj.getAll)

