
/*
//const tinderUser=new Object()//it is a singleton object
const tinderUser={} //it is a non-singleton object //both are same(object)
console.log(tinderUser);

tinderUser.id="123abc"
tinderUser.name="sammuy"
tinderUser.isLoggedIn = false

const regularUser = {//here regularUser is a variable
    email:"someruy@gmail.com",
    fullname:{     //fullname is a property of the regularUser object, and it contains another object userfullname                
        //here,created object inside object
        userfullname:{
            firstname:"hitesh",
            lastname:"fbklgk"
        }
    }
}
console.log(regularUser.fullname)
console.log(regularUser.fullname.userfullname.firstname)
console.log(regularUser.fullname?.userfullname.firstname)
//The optional chaining operator (?.) allows you to access properties of an object when it's uncertain whether those
// properties exist. It is used to avoid errors that would occur if you try to access properties of null or undefined.

const obj1={1:"a", 2:"b"}
const obj2={3:"c", 4:"d"}
const obj3={obj1,obj2}
console.log(obj3);
const obj4 = Object.assign(obj1,obj2)
console.log(obj4)
const obj5 = Object.assign({},obj1,obj2)
console.log(obj5)

{} --> is a empty array it helps ki hame  exactly pta nhi hota hai ki kitne object lene hai 
({},obj1,obj2)-->{} is target obj. && obj1,obj2 are the source objects.
suppose (obj1,obj2,obj3)-->{}ko target obj nhi de rhe hai to syntactically  sari values obj1 me ja rhi hai
//const returnedTarget = Object.assign(target, source);

//Note: Object.assign() does not throw on null or undefined sources.

const obj6={...obj1,...obj2}
console.log(obj6)

const users=[
    {
        id:1,
        email:"test@example.com"
    },
    {
        id:2,
        email:"test@example1.com"
    },

]
users[1].email//we are access first value
console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));//you asked to the tinderuser you have value of isLogged ->True or Flase.
*/

//Lecture no.-->18
//DeStructuring --> Array or Objects dono ki hoti hai

const courses = {
    coursename:"js in hindi",
    price:"999",
    Instructor:"Amit"
}

//course.Instructor//not a good way
// const {Instructor}=courses;//value kha se extract karni hai -->courses se||kya value extract karni hia-->Instructor
// console.log(Instructor);
const {Instructor:Pal}=courses;//Agar tum name change karna chahte ho to 
console.log(Pal);

// const navbar=({company})=>{//Syntax-->({company})-->DeStructuring

// }
// navbar(company="hitesh")

//concept of API-->API  comes in format of object & Array also

                                                                                            // {
                                                                            //jSon-->objectwithout name
    
                                                                        // }
//Here,API in terms of object format
// {
//     "name":"Amit",//json me (key,value) dono (string,string) hoti hai
//     "coursename": "js in hindi",
//     "price":"free"
// }

//Here,API in terms of Array format
[
    {},
    {},
    {},
]





