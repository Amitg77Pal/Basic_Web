//Control flow
if(true) {
    //if true then comes under curly brackets
}

//>,<,<=,>=,==(only for value),===(value && type both),
//!= (Inequality Operator)-->It checks if two values are not equal in value, but it doesn't consider their data types.
//!==(Strict Inequality Operator)-->Not only the values are compared, but also their data types.
// const temperature=41
// if(temperature === 40){
//     console.log("less than 50");
// }
// else{
//     console.log("temperature is greather than 50");
// }
// console.log("Execute");


const score=200
if(score>100)
{
    let power="fly"//let works locally only
    //var power="fly"//var works globally&locally
    //|| if here,we are use var and print line no.->25 then executed but if we will use let ithen it can't.
    console.log(`user power:${power}`);
}
// console.log(`user power:${power}`);

// const bal=1000
// if(bal>500) console.log("test"),console.log("test2");// here,semicolon may or may not be use
const bal=90
if(bal<500)
{
    console.log("less than 500");
}
else if(bal<750){
    console.log("less than 750");
}
else{
    console.log("i love you")
}

const userLoggedIn = true
const debitCard=true
if(userLoggedIn&&debitCard&&(2==2||4==4) ){
    console.log("Allow to buy course cards");
}

const month=2//in place of interger we take string also
switch (month) {
    case 1:
        console.log("january");             //for copy -->(shift+alt+down arrow)
        break;
    case 2:
        console.log("february");
        break;
    case 3:
        console.log("march");
        break;
    default:
        console.log("default case match");
        break;
}

//jha pe "key" match ho jya hai uske bad ka sara code execute ho jata hai
//agar csae 2 ka break commented hota to vhi per ruk jata || uske bad ka sara code execute nhi hota except "default".

//const userEmail="h@hitesh.ai"
const userEmail=[]

if(userEmail){//here,we are not do comparision and we have accepted ,This string is true forever-->suprising
    console.log("Go user email");
}
else{
    console.log("Don't have email");
}

if(userEmail.length===0){
    console.log("Array is empty");
}

//falsy values(((((((((((())))))))))))

//false,0,-0,nigInt 0n,"",null,undefined,NaN

//truthy values
//"0",'false',"false"," ",[],{},function(){}-->empty function

const emptyObj={}
if(Object.keys(emptyObj).length===0){//return the array of keys
    console.log("object is empty");
}
//Nullish Coalescing Operator(??):null undefined
let val1;
// val1=5??10
// val1=null?? 10
// val1=undefined?? 15
val1=null??10??15//jo null ke bad vali value hogi ohi aayegi-->fall back
console.log(val1);


//Terniary Operator

//condition ? true : false
const iceTeaPrice=100
iceTeaPrice<=80?console.log("less than 80"):console.log("more than 80")



