
function fun(x,y,cbm,cbe){
    
    console.log("exuction first all operation")

    let poduct = cbm(x,y)
    return cbe(poduct)
}
function multiply(a,b){
    return a*b
    
}


function extractdigit(num){
    let d = Math.floor(num%10)
    return d;
}



// console.log(fun(555,25,multiply,extractdigit))
// console.log(fun(555,25,multiply,(x)=> x))



function sum(...args){
    console.log(arguments)

    console.log(this)
}

const obj = {
    name:"deepak"
}

sum.call(obj,(1,2,3,3,4,4,4,4,4,4,4,4,4,4,4,4,4))


function loadScript(src,callback){
   let script = src
    script.onload = () => callback(null, script);
    script.onload = callback(null, script);
}

