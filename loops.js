//Loop file
for(let i=1; i<=10; i++){
    console.log(i);
}

    for(let i=1; i<=10; i++){
        console.log(5+" * "+i+" = " + 5*i);
    }

    let i = 1;
    let sum =0;
    while(i<=10){
         sum += i; 
         i++;
    }
    console.log(sum)


    let j = 10;
    while(j>=0){
        console.log(j)
        j--;
    }



    let k = 1
    do {
        console.log(k+"k")
        k++;
    } while (k<=5);

let fact=3;
let ans = 1;
do {
    if(fact==0){
        break;
    }
    ans *= fact;
    fact--;
} while (fact>0);
console.log("fact "+ ans) 


// *
// **
// ***
// ****
// *****

for (let i = 0; i < 5; i++) {
    let line = "";
    for (let j = 0; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}


for(let i=1; i<=10; i++){
    if(i==5){
        continue;
    }
    console.log(i)
}

for(let i=1; i<=10; i++){
    if(i==7){
        break;
    }
    console.log(i)
}




let n = 5;  

for (let i = 0; i < n; i++) {
    let line = ""; 
    
    
    for (let k = n - 1; k > i; k--) {
        line += " ";
    }
    
    
    for (let j = 0; j <= i; j++) {
        line += "* ";
    }
    
    console.log(line); // Print the line
}
