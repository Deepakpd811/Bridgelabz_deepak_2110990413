let arr = [5, 2];

let area = function (radius) {
  return Math.PI * radius * radius;
};

Array.prototype.myMap = function (cb) {
  let op = [];
  for (let i = 0; i < arr.length; i++) {
    op.push(cb(arr[i]));
  }
  return op;
};

// console.log(calculate(arr,area))
console.log(arr.myMap((x) => x * 2));

// console.log(arr.map(area))

Array.prototype.myFilter = function (cb) {
  let op = [];
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i])) {
      op.push(arr[i]);
    }
  }

  return op;
};

console.log(arr.myFilter((x) => x % 2 == 0));

Array.prototype.myReuce = function (arr, cb, intial) {
  let acc = intial !== undefined ? intial : arr[0];

  for (let i = 0; i < arr.length; i++) {
    acc = cb(acc, arr[i], i, arr);
    // console.log(acc)
  }
  return acc;
};

console.log(myReuce(arr,(acc,x)=> acc + x,0))
