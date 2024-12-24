function mergeTwoArray(arr, arr2) {
  let n = arr.length;
  let m = arr2.length;

  let i = 0;
  let j = 0;

  let ans = new Array(arr.length + arr2.length);
  let k = 0;

  while (i < n && j < m) {
    if (arr[i] <= arr2[j]) {
      ans[k++] = arr[i++];
    } else {
      ans[k++] = arr2[j++];
    }
  }

  while (i < n) {
    ans[k++] = arr[i++];
  }
  while (j < m) {
    ans[k++] = arr2[j++];
  }

  return ans;
}

let arr = [1, 5, 2, 34, 76, 99];
let arr1 = [2, 66, 88, 102, 111];

let res = mergeTwoArray(arr, arr1);

console.log(res);
