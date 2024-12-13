


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
