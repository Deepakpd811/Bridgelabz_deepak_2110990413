let Stack = require("./Stack_Implimentation.js");

function removeStars(s) {
  let ans = "";
  let st = new Stack();

  for (let i = 0; i < s.length; i++) {
    if (st.isEmpty()) {
      st.push(s.charAt(i));
    } else if (s.charAt(i) == "*") {
      st.pop();
    } else {
      st.push(s.charAt(i));
    }
  }

  while (!st.isEmpty()) {
    ans = st.pop() + ans;
  }

  return ans;
}

let string = "leet**cod*e";

console.log(removeStars(string));
