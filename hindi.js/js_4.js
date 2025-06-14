//In JavaScript, const is a keyword used to declare a constant variable. Once a variable is declared with const,
// its value cannot be reassigned.


/*dynamically-typed languages performed type checking at runtime( Python, JavaScript, Ruby, PHP
), while statically typed languages performed type 
checking at compile time.( Java, C++, C#, TypeScript)*/

//let const and var properties
//console.log("Amit")
//constraints ek bar Decalere kar diya to change nhi karna padta hai
//varaiable age me ja kar change kar sakte hai
//variable decleare karne ka do(two) tarika hai (1) let ,(2) var ||but we are generally use let
//{}-->scope
/*
Prefer not to use var
because of issue in block scope and functional scope(means agar ek jagah variable me value insert kar diye aur 
    koi kahi aur bhi value insert kar diya to pahle jaha-jaha same variable hai vaha jka value change ho jayega).
*/
const  accountId =144553//const,let,var ko memory ke andar assign kar do
let accountEmail="amitd456jk@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
//accountId=2//not allowed-->TypeError: Assignment to constant variable.
accountEmail="cfvbg456@gmail.com"
accountPassword="1234567"
accountCity="Bengaluru"//bina variable ke aage kuchh likhe huye, variable ki memory reserve kar sakte ho-->wrong way
// console.log(accountId);
// console.log(accountEmail);
console.table([accountId, accountEmail,accountPassword,accountCity,accountState]);
//javascript me variable ko bina assign ke bhi value put kar sakte hai


//differnce bewteen let and const.


// Reassignment and Redeclaration:
// var: Can be reassigned and redeclared within its scope.
// let: Can be reassigned, but not redeclared within its scope.
// const: Cannot be reassigned or redeclared. It must be initialized when declared.

// // Using let
// let x = 10;  // Declaring and initializing x
// console.log(x); // Output: 10

// x = 20;  // Reassigning x
// console.log(x); // Output: 20

// // let x = 30;  // This would throw an error because let cannot be redeclared in the same scope

// // Using const
// const y = 15;  // Declaring and initializing y
// console.log(y); // Output: 15

// // y = 25;  // This would throw an error because const cannot be reassigned

// // const y = 35;  // This would throw an error because const cannot be redeclared
