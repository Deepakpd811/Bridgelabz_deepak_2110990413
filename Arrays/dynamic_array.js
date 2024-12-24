class dynamicArray {
  constructor() {
    this.arr = new Array(4);
    this.size = 0;
    this.capacity = 4;
  }

  resize() {
    this.capacity = this.capacity * 2;
    let newArray = new Array(this.capacity);
    for (let i = 0; i < newArray.length; i++) {
      newArray[i] = this.arr[i];
    }
    this.arr = newArray;
  }

  add(ele) {
    if (this.size == this.capacity) {
      this.resize();
    }
    this.arr[this.size] = ele;
    this.size++;
  }

  get(index) {
    if (index > this.size) {
      throw new Error("out of bound");
    }

    return this.arr[index];
  }

  print() {
    let newArray = new Array();
    for (let i = 0; i < this.arr.length; i++) {
      if (this.arr[i] ?? "") {
        newArray[i] = this.arr[i];
      }
    }
    return [...newArray];
  }
}

let arr = new dynamicArray();
arr.add(1);
arr.add(1);
arr.add(2);
arr.add(6);
arr.add(1);
arr.add(1);
// console.log(arr.get(8))
console.log(arr.print());

console.log(arr.capacity);
