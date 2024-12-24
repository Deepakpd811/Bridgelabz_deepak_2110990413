function fun(name,...rest){
  
  console.log(name)
  console.log(rest)
}

fun(1,2,3,344,4)

fun("1,2,3,4,",3)

fun("depk",12,3,4,5,76)
fun(12,3,2,3,"deepak")

let arr1= [1,2,3]
let arr2 = [4,7,3,2]

let ans = [...arr1,...arr2]

console.log(ans)

const [first, ,three,...others] = arr2

console.log(first) //4
console.log(three) // 3
console.log(others) // [2]