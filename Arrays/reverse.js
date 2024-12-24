

const reverse = (arr)=>{
    let n = arr.length
    let i =0;
    let j = n-1;
    while(i<j){
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
        i++;
        j--;
    }
    return arr;
}

Array.prototype.reverseArray  = function(){ // polyfills
    return reverse(this)
}

let arr = [1,2,3,4,5]

// console.log(reverse(arr))
console.log(arr.reverseArray())



