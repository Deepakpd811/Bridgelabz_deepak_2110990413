
function min(arr){
    if(!arr) return ;
    const n = arr.length; 
    let min = Number.MAX_SAFE_INTEGER;
    for(let i=0; i<n; i++){
        if(arr[i]<min){
            min = arr[i];
        }
    }
    return min;
}
function max(arr){
    if(!arr) return ;
    const n = arr.length; 
    let max = Number.MIN_SAFE_INTEGER;
    for(let i=0; i<n; i++){
        if(arr[i]>max){
            max = arr[i];
        }
    }
    return max;
}

// Array.prototype.findMinValue = function(){ // polyfill
//     if(!arr) return ;
//     const n = arr.length; 
//     let min = Number.MAX_SAFE_INTEGER;
//     for(let i=0; i<n; i++){
//         if(arr[i]<min){
//             min = arr[i];
//         }
//     }
//     return min;
// }

Array.prototype.findMinValue = function(){
    return min(this);
}
Array.prototype.findMaxValue = function(){
    return max(this);
}



let arr = [2,4,6,7,4,2,5]

console.log(min(arr))  
console.log(arr.findMinValue())  


console.log(max(arr))
console.log(arr.findMaxValue())



