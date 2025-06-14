/*
//Global and Local scopes

// let a=10
// const b=20
// var c=30
// console.log(a);
// console.log(b);
// console.log(c);

//{}-->scope

if(true){
   //variables a,b,c loop ke ander declare hai (means scope ke ander) to curly braces end hote hi (means loop end) 
   //hi  declaration bhi work karna band kar dega (loop ke bahar kuchh bhi hoga to function me affect nhi hota hai 
   //Generally except case of "var"-->that is demarite)
    let a=10//jo bhi curly braces ke ander likha hai use block scope bolte hai aur bahar vale ko globle scope.
//Global scope ke ander jo value likhte hai oo block scope per affect dalti hai but its vive-versa is not possible.
    const b=20
    var c=30
}
//console.log(a);
//console.log(b);
console.log(c);


// var c=300
// if(true){
                                //confusion -->create  a programming bug
//     var c=30
// }
// console.log(c);

//Block scope && Global Scope
let a=300
if(true)
{
    let a=10 //function ke ander jab tak rhege local value means 10 hi use karege ,jaise hi bahar jayege a=300 use karege.
   console.log("Inner:",a);
}
console.log(a);

//jab inspect kage code likhte hai to Globle scope different hai aur Code-environment me run karte hai to Globle scope different hai
*/

//Lecture no -22-->Scope level and min hoisting((((((((((((((()))))))))))))))
/*
function one(){//nested function me parent ke properties ko child access kar pate hai
    const username="hitesh"
    function two(){
        const website="youtube"
        console.log(username);
    }
   // console.log(website);
    two()
}
one()


if (true) {
    const username="hitesh"
    if(username==="hitesh"){
        const website=" youtube"
        console.log(username+website);
    }
    console.log(website);//produce errors
}
console.log(username);//produce errors
*/
//*******************************interesting***************************** */
/*
function addone(num){//methode->1 to create a function
    return num+1//only Declare
}
//addone(5)
console.log(addone(5))


const addTwo=function(num){//methode->2 to create a function
    return num+2//Here,Delaration+hold in variable
}
//addTwo(5)
console.log(addTwo(5))//agar esko function Declareation se pahle likhege to errors produce karega
*/

//Lecture no--->23//This and arrow function *************************************

//this keyword currrent context ke bare me batata hai 


const user = {
    username:"hitesh",
    price:999,              //{ 
                                        //our current context comes under this curly braces only (this.things)
                            //}
    welcomeMessage:function(){
        console.log(`${this.username} , welcome to website`);
        console.log(this);//show all data of current context
    }
}

//user.welcomeMessage//only execute not return anythings
// user.welcomeMessage()//method
// user.username="sam"
// user.welcomeMessage()
//console.log(this);//{}-->corrent context show empty object


// function chai(){
//     let username="hitesh"
//     console.log(this);
// //struture-clone,micro-task,global-values,ideal time,fetch-time  so on these are come if this execute in locally.
// }
// chai()

// const chai=function(){
//     let username="hitesh"
//     console.log(this.username);//undefine-->no idea 

// }
// chai()

const chai=()=>{//here,we are create arrow function-->syntax:()=>{}
    let username="hitesh"
    console.log(this.username);//undefine-->no idea 
    console.log(this);//{}

}
//chai()

const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,4))
//explicitly return -->write return to show something
//implicite return-->mai ne man liya ki aapko return statement likhne ki jarurat nhi hai
// agar curly braces me likhna padha to return likhna padhega
// otherwise no need to write return without curly braces means with parenthesis
const addTwo1=(num1,num2)=>num1+num2
console.log(addTwo1(3,33))

const addTwo3=(num1,num2)=>{username:"hitesh"}
console.log(addTwo3(6,7))//undefined

const addTwo4=(num1,num2)=>({username:"hitesh"})//block
console.log(addTwo4(6,7))

