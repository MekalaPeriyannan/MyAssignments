
for(let i=1; i<=20 ; i++){
    if( i%2 !== 0)
      console.log(i)
}


// another way of printing only odd numbers
for(let i=1; i<=20; i++){
    if(i%2 === 0){
        continue        //condition skipped if the value divided by 2 and remaining is zero
    }
console.log("Odd Numbers are :" + i)          //print the odd numbers alone
}


// another way 
let i=10                     // Declared the variable 
for(i ; i<=20 ; i++){        
    if( i%2 !== 0)
      console.log(i)
}