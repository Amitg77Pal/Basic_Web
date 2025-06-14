//stack memory(use in primitive) and Heap memory(use in non-primitive)
//stack memory me jo bhi apne variable decleare kiya hai uski apko ek copy milti hai.
// jab bhi memory "Heap memory" ke ander define hoti hai to original value ka reference milta hai-
// -jo bhi change karege o original value me change hoga

// let myYoutube="Amit_Pal"
// let anotherYoutube=myYoutube
// console.log(myYoutube)//Amit_Pal
// console.log(anotherYoutube)//Amit_Pal

// anotherYoutube="sdfghjk"
// console.log(myYoutube)//Amit_Pal
// console.log(anotherYoutube)//sdfghjk //see the difference bewteen line no 9 and 13 ,here, variable are same but accept differnt values

//Heap ke under same refrence milta hai(change in original value)
// let userOne=
// {
//     email: "user@example.com",
//     upi: "user@ybl"
// }

// let userTwo=userOne
// userTwo.email="amit04707@gmail.com"

// console.log(userOne.email);//amit04707@gmail.com
// console.log(userTwo.email);//amit04707@gmail.com

// // //LECTURE no-11(String -->string ko '' or "" quotes dono se denote karte hai)
// const name="hitesh"
// const repoCount=50
// //console.log(name +repoCount+" value");-->outdated//concatanate with repoCount

// //console.log('Hello my name is ${name} and my repo count is ${repoCount}');

// //string is a object

//const gameName=new String('Hiteshstdfgsesdfghnmhgff-fkmghfkg')
// console.log(gameName[0]);//H
// console.log(gameName.__proto__);//{}-->produce empty object
// console.log(gameName.length);//agar galat speeling likhege to undefined show karega print-->33
//console.log(gameName.toUpperCase());//sare element ko upper case me show karega//HITESHSTDFGSESDFGHNMHGFF-FKMGHFKG
// console.log(gameName.charAt(2));//index 2 per kon sa element hai//t
// console.log(gameName.indexOf('t'));//'t' starting se kis index per hai//2

// const newString = gameName.substring(0,4)//4th index vala element nhi consider hoga (stating index-->0and end index-->4[0,4))
// || agar substring me -ve value ko dege to 0 obey kar lega or starting 0th index se kar dega
// console.log(newString);

//const anotherString = gameName.slice(0,4)//Hite
//const anotherString = gameName.slice(-8,4)//-->not show output?
//(Start slicing 8 characters from the end-->-8 and slicing should end at the 4th index from the start of the string-->4)
//(Start slicing 8 characters from the end-->-8 and  End slicing 2 characters from the end-->-2).

//when start is greater than end, slice() will return an empty string because it doesn't make sense to start slicing.
// from a position that is after the ending position. In this case, -8 corresponds to an index near the end of the
// string, while 4 is near the beginning, so slice() returns an empty string.

// const anotherString = gameName.slice(-8 ,-2)//indexing positive or negative dono kar sakte hai
// console.log(anotherString);

//const newStringOne="   Amit   "
//const newStringOne="   Amit"//left se jitna space chhodege utna space bhi print hoga -->only in left
//console.log(newStringOne);
//console.log(newStringOne.trim());//remove all the spaces

const url="http://localhost%20xxx.com"
console.log(url.replace('%20','_'));
console.log(url.includes('Amit'));//available or not if not-->return false || available-->yes
console.log(gameName.split('_'))//bracket ke under show karega



