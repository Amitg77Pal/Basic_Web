//Arrays
/*
//JavaScript arrays are resizable and can contain a mix of different data types
const myArr=[0, 1, 2, 3, 14, 5, true, "Amit"]//array is resizable(mutable)
console.log(myArr[6]);
// A deep copy creates a new object that copies all of the properties and nested objects of the original object(stack memory allocation).
// A shallow copy creates a new object that references the same values or objects as the original(Heap memory allocation).

//Array methods
myArr.push(6)
myArr.push(7)
console.log(myArr)
myArr.pop()
console.log(myArr)

// myArr.unshift(4)//"4" 0th index per aa jayega  aur sabhi value shift hoge ek-ek index right me
// console.log(myArr)
// myArr.shift()//"4" ko useke(original) index per shift kar diya
// console.log(myArr)
console.log(myArr.includes(9));//array me 9 hsi ki nhi -->check
console.log(myArr.indexOf(14));//"14" kis index per hai
const newArr=myArr.join();//Adds all the elements of the array into a string, separated by
// the specificed separator string
console.log(newArr);
console.log(typeof(newArr));

//slice,  splice****************

console.log("A ",myArr);
const myn1=myArr.slice(1,3)//inducle starting ingex-element and exclude last index-element -->here,3th index will not include
console.log(myn1)
console.log("B",myArr);

const myn2=myArr.splice(1,3)
console.log("C",myArr);
console.log(myn2);

//A --> is the original array || B is second array where we are using slice(x,y),where x is included 
//and y is excluded and in the main array,there will be no change|| c is the third array where we are using 
//splice(x,y),where x and y both are included but in main array (associated with c ) those elements will be deleted.

//A --> is the original array|| and B is second array(A ke sath associated hai) where we are using slice(x,y),where 
//x is included and y is excluded-->agar x to (y-1) element ko bahar nikalte ho to original array me bhi present 
//rhta hai But,in c (A ke sath associated hai) where we are using splice(x,y),where x and y both are included but 
//in main array (associated with c ) those elements will be deleted and in other subarray.
*/

//Array part2
const mar_heros=["a","b","c","d","e","f","g"]
const dc_heros=["a1","a2","a3","a4","a5","a6"]//works as a single element
mar_heros.push(dc_heros);
console.log(mar_heros)
console.log(mar_heros[7][1]);//if we want to be access the index 1 element of dc_heros
mar_heros.concat(dc_heros);
console.log(mar_heros)
//The push() method adds one or more elements to the end of an array and returns the new length of the array. 
//The original array is modified.

//The concat() method is used to merge two or more arrays. It takes one or more arrays as arguments and returns 
//a new array containing the elements of the original arrays. The original arrays are not modified.

const all_new_heros=[...mar_heros, ...dc_heros]//... means spread(broken down into multiple parts).
console.log(all_new_heros)

const another_array=[1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_antother_array=another_array.flat(Infinity)//all the arrays are spread out in a single array
console.log(real_antother_array)

console.log(Array.isArray("Hitish"))//it is array or not?
console.log(Array.from("Hitish"))//convert string,objects into array.

console.log(Array.from({name:"hitesh"}))//{name:"hitesh"}-->string inside the object
//keys se aaray banau? values se array banau? agar from array nhi bna pa rha hai to []empty array dega hamesa 
let score1=100
let score2=200
let score3=300
console.log(Array.of(score1, score2, score3))//return a new arrays from a set of elements
