let str = "hello";

let i = 0;
let j = str.length - 1;


let strArray = str.split('');

while (i < j) {
    // Swap characters
    let temp = strArray[i];
    strArray[i] = strArray[j];
    strArray[j] = temp;
    i++;
    j--;
}


str = strArray.join('');

console.log(str); // Output: "olleh"


function subset(arr, n, ans, list) {
    if (n === 0) {
        // Make a copy of the list and add it to ans
        ans.push([...list]);
        return;
    }

    // Include 
    list.push(arr[n-1]);
    subset(arr, n-1, ans, list);

    // Exclude 
    list.pop();
    subset(arr, n-1, ans, list);
}

let arr = [1, 2, 3,];
let ans = [];
let list =[];

subset(arr, arr.length, ans, list);
console.log(ans.sort());
