//Immediately Invoked Function Expressions(IIFE)

// function chai(){
//     console.log(`DB connected`);
// }

// chai()

(function chai(){
    //name IIFE
    console.log(`DB connected`);//()()-->first one where we are write definition of function ||second one is -->execution call
    //IIFE-->jo function immediately execute ho jaye ||Global scope ke pollution se problem hoti hai kyi bar, 
    //to global scope ke variables ke declaration ke pollution ko hatane ke liye IIFE ka use karte hai.
})();//-->line ko end karne ke liye semi-colon ki need hai otherwise give error

// //write in form of arrow function
((name)=>{
    console.log(`DB connected two`);
})(`Amit`)

((name)=>{
    console.log(`DB connected two`);
})(`Amit`)


