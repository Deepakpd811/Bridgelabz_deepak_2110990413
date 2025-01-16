// types flexible way to define custom types in TypeScript, including objects, unions, intersections, and function signatures.

// interface: A blueprint for the shape of objects or classes, used to define object properties and methods, and supports extension through inheritance.


// let point:{x:number, y:number} = {
//     x:10,
//     y:20,
// }

// console.log(point.x)

type point = {
    x:number,
    y:number
}

// function printCordinates (coordinates:{x:number,y:number}){
//     console.log(coordinates.x)
//     console.log(coordinates.y)
// }

function printCordinates (coordinates:point){
    console.log("cordinates of x",coordinates.x)
    console.log("cordinates of y",coordinates.y)
}

printCordinates({x:10,y:23})



interface pointInter{
    x:number,
    y:number
}


function printCordinatesInter (coordinates: pointInter){
    console.log("cordinates of x",coordinates.x)
    console.log("cordinates of y",coordinates.y)
}


// Type aliases and interfaces are very similar, and in many cases you can choose between them freely. Almost all features of an interface are available in type, the key distinction is that a type cannot be re-opened to add new properties vs an interface which is always extendable.
