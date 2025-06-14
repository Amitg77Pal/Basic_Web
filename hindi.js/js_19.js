/*
function sayMyName(){
    console.log("H");
    console.log("E");
    console.log("Y");
    console.log("T");
    console.log("P");
}
//sayMyName();//print the elements of function

// function addTwoNumbers(num1,num2){//variable -->parameters
//     console.log(num1+num2);
// }                                                       
//addTwoNumbers(3,4)//7  //values-->fixed value
// addTwoNumbers(5,"6")//56
// addTwoNumbers("5",6)//56
// addTwoNumbers("5","6")
// addTwoNumbers(3,null)//3
// addTwoNumbers("3",null)//3null
// addTwoNumbers(3,"null")//3null
// addTwoNumbers("3","null")//3null

// const result =addTwoNumbers(3,5);//8
// console.log("Result",result);//undefined



// function addTwoNumbers(num1,num2){
//     // let result=num1+num2;
//     // return result;
//     // console.log("Amit")//By Default agar ek bar function return kar diya to uske bad kuchh print or return means kuchh nhi karega
//     //return se pahle print hoga return ke bad nhi 
//     return num1+num2;

// }
// const result =addTwoNumbers(3,5);
// console.log("Result",result);

function loginUserMessage(username){
    return `${username} just logged in`//backtacs -->message ||{message(values)}-->variable
}
console.log(loginUserMessage("Amit"))//${Amit} just logged in-->check it correct or not
console.log(loginUserMessage())//if not pass any value then return undefined 

console.log(loginUserMessage(" "))//just logged in




function loginUserMessage(username){
    if(username===undefined){//situation evaluted in true then this condition will right(run) ||
        //agar app kuchh pass hi nhi kar rhe ho to username undefine hai.
        console.log("please enter a username");
        return //agar ham chahte hai ki  return '${username} just logged in' ->return n ho to simple return likh dege
    }
    return `${username} just logged in`
}
console.log(loginUserMessage("Amit"))
console.log(loginUserMessage())

//javascript me kuchh value ko false man liya jata hai
// such as ""-->empty string ko man liya jata hai ki false value hai
// undefine ko false value man liya jata hia

if(undefined){//indefine--indicate-->false condition-->pahle se hi condition false ho to  us function ke ander jayege hi nhi.
    console.log("please enter a username");
    return 
}
if(!undefined){//indefine--indicate-->True condition-->condition True ho to  us function ke ander jayege.
    console.log("please enter a username");
    return 
}


function loginUserMessage(username="Sam"){//username ki value kabhi bhi undefined nhi ho sakti hai(username ki minimum value "sam" hogi) to ham if condition me jayege hi nhi
    if(!username){
        console.log("please enter a username");
        return 
    }
    return `${username} just logged in`
}
*/

function calculatedCarPrice(num1){
    return num1
}
console.log(calculatedCarPrice(200))
console.log(calculatedCarPrice(200,400,500))

function calculatedCarPrice(...num1){//(...)->Rest operator or spread operator bola jata hai 
    return num1
}
//(...)->values Array me store ho kar return hoti hai
console.log(calculatedCarPrice(200,400,500))//Rest operator means pack these in bunduls and return 

const user={//user -->object
    username:"hitesh",
    price:199
}

function handleObject(anyobject){//anyobject ke place per "user" bhi likh sakte hai koi problem nhi hoga
    //generically anyobject rhega to koi bhi object pass kar sakte hai 
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
//handleObject(user)
handleObject({
    username:"sam",
    price:399
})


const myArray=[200,400,100,600]

function returnSecondValue(getArray){
    return getArray[1]//index value
}
console.log(returnSecondValue(myArray));
console.log(returnSecondValue([200,400,500,1000]));

