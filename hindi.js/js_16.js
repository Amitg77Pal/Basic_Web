//object are  declare in two types (1) with the help of literals, and (2) with the help of constructor
//singleton is a type of object,made with the help of constructor||literal singleton nhi bnta hai

//object literals
/*
const jsUser={  //{} ke ander key,values hote hai both are define 
    name:"Amit",//system process this name like "name"
    0:"Amit",
    age:18,//here,value declare
    location:"jaipur",
    email:"gkjgngjhjhk.com",
    isLoggedIn:false,
    lastLoginDay:["Mon", "Tue", "Wed"],
    "first name":"asdfggbbffjfjkb"//special case-->aap ese kabhi bhi (.)acess modifier ke help se access nhi kar payege

}
console.log(jsUser.email)//access the object--> not good in practice

//console.log(jsUser(email))//wrong way to represent

console.log(jsUser["email"])//why are we put email in braces because system understand like string

console.log(jsUser["first name"])//__>correct way
console.log(jsUser[0])//for system "name" treted like simple name only same condition for 0 also.
// jsUser.email="Amitdmkjifkfg@hdfg.com"
// Object.freeze(jsUser)//agar ke bar freeze kar diya to dubara change nhi hoga
// jsUser.email="Amandfkgkg@gkg.com"
// console.log(jsUser);
jsUser.greeting=function(){
    console.log("hello world");
}
console.log(jsUser.greeting);//undefine
console.log(jsUser.greeting());//jsUser.greeting is not a function
*/
const jsUser3={  //{} ke ander key,values hote hai both are define 
    name:"Amit",//system process this name like "name"
    0:"Amit",
    age:18,//here,value declare
    location:"jaipur",
    email:"gkjgngjhjhk.com",
    isLoggedIn:false,
    lastLoginDay:["Mon", "Tue", "Wed"],
    "first name":"asdfggbbffjfjkb"//special case-->aap ese kabhi bhi (.)acess modifier ke help se access nhi kar payege

}
jsUser3.greetingTwo=function(){
    console.log('hello world,${this.name}');//convert string to backticks me-->this is called String interpulation
    console.log(jsUser3.greetingTwo());
}

/*
//symbols
const mySym=Symbol("key1")

const jsUser1={
    mySym:"mykey1",
    //[mySym]:"mykey1" //reprentes the symbol
}

console.log(jsUser1.mySym)
console.log(typeof jsUser1.mySym)
console.log(typeof(mySym))
*/






