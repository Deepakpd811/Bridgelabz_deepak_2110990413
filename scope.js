
// _________________________________________Scope_______________________________________________________

let global = "this is global"


function outer(){
    let outerVar = "this is outer"
    
    function inner(){
      let innerVar = "this is inner"
      
      console.log(`this is inside inner global ${global}`)
      console.log(`this is inside inner outerVar ${outerVar}`)
      console.log(`this is inside inner innerVar ${innerVar}`)
      
      
    }
      console.log(`this is inside inner global ${global}`)
      console.log(`this is inside inner outerVar ${outerVar}`)
      // console.log(`this is inside inner innerVar ${innerVar}`) // inner not defined
    inner();
}

outer();


    console.log(`this is inside inner global ${global}`)
      // console.log(`this is inside inner outerVar ${outerVar}`)// outerVar is not defined
      // console.log(`this is inside inner innerVar ${innerVar}`) // innerVar is not defined
      