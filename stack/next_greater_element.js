const Stack = require("./Stack_Implimentation.js");

var nextGreaterElement = function (nums1, nums2) {
  let map = {};
  let stack = new Stack();

  for (let i = nums2.length - 1; i >= 0; i--) {
    while (!stack.isEmpty() && stack.peek() <= nums2[i]) {
      stack.pop();
    }

    let temp = stack.isEmpty() ? -1 : stack.peek();

    stack.push(nums2[i]);

    map[nums2[i]] = temp;
  }

  let res = new Array(nums1.length);
  for (let i = 0; i < nums1.length; i++) {
    res[i] = map[nums1[i]];
  }

  return res;
};

let nums1 = [4, 1, 2];
let nums2 = [1, 3, 4, 2];
console.log(nextGreaterElement(nums1, nums2));

