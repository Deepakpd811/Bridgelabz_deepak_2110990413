//Given a string containing parentheses, check if the parentheses are balanced.

const Stack = require("./Stack_Implimentation.js");

function isValid(s) {
  let st = new Stack();
  
  for (let ch of s) {
      if (ch == "(" || ch == "[" || ch == "{") {
          st.push(ch);
        } else {
            if (st.isEmpty()) return false;
            
            if (ch == ")" && st.peek() != "(") {
                return false;
            } else if (ch == "}" && st.peek() != "{") {
                return false;
            } else if (ch == "]" && st.peek() != "[") {
                return false;
            } else {
                st.pop();
            }
        }
        
    }
   
   
  return st.isEmpty();
}

// let str = "{{{}}}";
// let str = "{()}";

console.log(isValid(str));
