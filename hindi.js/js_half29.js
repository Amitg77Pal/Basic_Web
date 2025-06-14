// const myObject={
//     js:'javascript',
//     cpp:'c++',
//     rb:"ruby",
//     swift:"swift by apple"
// }
// for (const key in myObject) {
//     //console.log(myObject[key]);
//       console.log(`${key} shortcut is for ${myObject[key]}`);                          
// }
// const programming=["js", "cpp", "rb", "swift","java"]
// for(const key in programming) {
//     //console.log(key);//print index of programming
//     console.log(programming[key]);
// }

const coding=["js", "cpp", "rb", "swift","python"]
//callBack function ka nam nhi hota hai|| function Array ke under chal rha hai to jo value(item) hogi o parameter ki tarah value le ke aayega 
// coding.forEach( function (item){
//     console.log(item);

// })//callback function means muchhe ek function dedo ki muchhe kya karna hai.


// coding.forEach((item)=>{
//     console.log(item);
// })

// function printMe(item){
//     console.log(item);
// }

// coding.forEach(printMe)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
// })

const myCoding=[
    {
        languageName:"javascript",
        lnguageFile:"js"
    },
    {
        languageName:"java",
        lnguageFile:"java"
    },
    {
        languageName:"python",
        lnguageFile:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.languageName);

})