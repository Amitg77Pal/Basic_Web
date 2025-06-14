//Data types of javascripts//
//primitive Type &non-primitive Types &  reference type
//primitive-->call by value --> memory ka refence nhi diya jata hai || memory ka copy diya jata hai
/*
//7 types:String,Number,Boolean,null,undefined,Symbol,BigInt
// undefined-->variable aready decleared ,but aap kya value assign karege abhi tak define nhi kiya hai
// Symbol-->kishi bhi value ko unique banane ke liye,symbol use karte hai suppose button ko symbol ke ander rap 
//kar dete hai aur oo unique ban jata hai
//BigInt-->use for big interger or data

const score= 33 || "33" || false || no need to define type it is a integer ,string ,boolean or so on.
-->Dynamic language
type define--> javascript me kabhi type(language ko define nhi karte hai) ko define nhi karte hai.
//let useEmail;-->value undefine 

//for Symbol
// const id=Symbol('123')
// const anotherId=Symbol('123')
// console.log(id===anotherId);//both are not same

//bigInt
//const bigNumber=2345678909876543n //put 'n' in the last it will convert into bigInt



//null(means empty|| not a empty string,not a zero)

//undefined-->(variable are declare already but value kya dalege ye dicide nhi hua hai
//(variable declared but,value not assigned))
//Symbol-->kishi bhi value ko unique banane ke liye use karte hai
bigInt(scientific value or large value)
*/


//Reference(Non-primitive)-->value ko memory ke refernce me directly allocate kiya ja sakta hai
//Array,objects,Functions
// const score =100
// const scoreValue=100.3  //100 and 100.3 both are integer values only ,there is no concept of float 

// const isLoggedIn=false
// const outsideTemp=null//means empty ||not Zero
// let userEmail//undefined

// const id=Symbol('123')
// const anotherId=Symbol('123')//agar value bhi same pass karoge (like-string,integer so on) to bhi return type different rhega
// console.log(id===anotherId)//false

//const bigNumber=2345678987654567456n  //(for bigInt in last use 'n')


// const heros=["shaktiman","naagraj","doga"]
//objects{
//curly brackets ke ander jo kuchh bhi hota hai usse object kahte hai
// const  }
// let myObj=
// {
//     name:"Amit",
//     age: 22,
// }
//function
// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof bigNumber);//undefine //console.log(typeof variable_name);


// const outsideTemp=null
// console.log(outsideTemp);
// console.log(typeof outsideTemp);//object

// console.log(typeof myFunction);//output-->function, but we can say object-function


// == (Equality Operator)
// Performs type coercion: If the two values being compared are of different types, JavaScript attempts to convert them to the same type before comparing.
// Examples:

// 5 == "5";   // true (string "5" is converted to number 5)
// 0 == false; // true (false is converted to 0)
// null == undefined; // true (they are treated as equal)
// === (Strict Equality Operator)
// No type coercion: It checks both the value and the type. If the types differ, it immediately returns false.
// Examples:

// 5 === "5";   // false (different types: number and string)
// 0 === false; // false (different types: number and boolean)
// null === undefined; // false (different types)





