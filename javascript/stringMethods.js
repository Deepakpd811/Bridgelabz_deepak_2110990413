//basic of string method

let s = "The quick brown fox jumps over the lazy dog ";

// String length
console.log("length of string" + s.length);

// String charAt()
console.log("char at index 6 is " + s.charAt(6));

// String slice()
let st = s.slice(4, 12);
console.log("slice the string --> " + st);

// String substring()
let subs = s.substring(4, 12);
console.log("substring ----> " + subs);

// String substr()
let sub = s.substr(4, 4);
console.log("substr ----> " + sub);

// String toUpperCase()
console.log("Uppercase ----> " + s.toUpperCase());

// String toLowerCase()
console.log("Lowercase ----> " + s.toLowerCase());

// String concat()
let sb = "new String hello ";
console.log("concat s in sb ----> " + sb.concat(s));
console.log("concat sb in s ----> " + s.concat(sb));

// String trim()
console.log("remove spaces  ----> " + s.trim());

// String trimStart()
console.log("remove spaces start ----> " + s.trimStart());

// String trimEnd()
console.log("remove spaces start ----> " + s.trimEnd());

// String repeat()
console.log("s repeat 4 times----> " + s.repeat(3));

// String replace()
console.log("replace the first match----> " + s.replace("fox", "cat"));
//To replace case insensitive, use a regular expression with an /i flag (insensitive):
console.log("replace the first match----> " + s.replace("/FoX/i", "cat"));

// String replaceAll()
console.log("replace the all match----> " + s.replace("fox", "cat"));

// String split()
let arr = s.split(" ");
console.log("split ----> " + arr);

// String Templates
let firstName = "deepak";
let lastName = "prasad";
console.log(`my name is ${firstName} ${lastName}`);
