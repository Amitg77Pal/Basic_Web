// let score = 33
// console.log(typeof score);
// //both are same and print --> numbers
// console.log(typeof(score));//The parentheses are not required for typeof(because it's not a method or function)

// let score = "33"
// console.log(typeof score);
// //both are same and print --> Strings
// console.log(typeof(score));
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);

// let score = "33avc"
// console.log(typeof score);//print-->Strings
// console.log(typeof(score));//print-->Strings
// let valueInNumber = Number(score)//print-->numbers
// console.log(valueInNumber);//value convert hogi but "NaN" print hoga//NaN(it is a type)-> means not a number

// let score = null;
//     //let score = undefined;
// console.log(typeof score);//print-->Object
// //console.log(typeof(score));//print-->undefined
// let valueInNumber = Number(score)
// console.log(typeof valueInNumber);//print-->number
// console.log(valueInNumber);//print-->0

//conversion 
//"33"=>33
//"33abc"=>NaN
//true=>1;false=>0
//let isLoggedIn = true(conversion in Boolean)
//let isLoggedIn = "" //return false
//let isLoggedIn = 1 //return true
// let booleanIsLoggedIn=Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
//1=>true;0=>false
// "" =>false
//"hitesh" => true


let someNumber=33
console.log(someNumber);
console.log(typeof someNumber)
let stringNumber=String(someNumber)
console.log(stringNumber)
console.log(typeof stringNumber);//return string