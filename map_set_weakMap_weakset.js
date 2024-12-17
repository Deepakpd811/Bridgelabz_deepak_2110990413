// WeakSet
// A WeakSet is a collection of objects where the objects are held weakly. This means that if there are no other references to an object stored in a WeakSet, the object can be garbage-collected, even if it still exists in the WeakSet.


let weakset = new WeakSet();
let obj = { name: "John" };

weakset.add(obj);
console.log(weakset.has(obj)); // Output: true

obj = null; // The object is now eligible for garbage collection
console.log(weakset.has(obj)); // Output: false (after garbage collection)

// WeakMap
// A WeakMap is a collection of key-value pairs where the keys are objects held weakly. This means that if there are no other references to a key object stored in a WeakMap, the key-value pair can be garbage-collected.



// set(key, value): Sets the value for a specific key in the WeakMap.
// get(key): Gets the value associated with a specific key.
// delete(key): Removes the key-value pair from the WeakMap.
// has(key): Checks if a key exists in the WeakMap.



let weakmap = new WeakMap();
let keyObj = { id: 1 };

weakmap.set(keyObj, "some value");
console.log(weakmap.get(keyObj)); 

keyObj = null; 