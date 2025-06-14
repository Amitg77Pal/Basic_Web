/*
//loop with break and continue
for(let index=0;index<=10;index++){//ctrl+d select same thing at multiple times
    const element=index;
    if(element==5){
        console.log("5 is the best number");
    }
    console.log(element);

}
//console.log(element);

// for(let i=0;i<=10;i++){
//     console.log(`outer loop value: ${i}`);
//     for(let j=0;j<=10;j++){
//         console.log(`inner loop value: ${j} and inner loop value: ${i} `);
//     }
// }

for(let i=0;i<=10;i++){
    console.log(`outer loop value: ${i}`);
    
    for(let j=0;j<=10;j++){
        console.log(i+'*'+j+'='+i*j);
        
    }
}

let myArray = ["flase","batman","superman"]
console.log(myArray.length);
for(let w=0;w<myArray.length;w++){
    const element=myArray[w];
    console.log(element);
}

//break and continue

for(let i=1;i<=20;i++)
{
    if(i==5)
    {
       console.log(`Detected 5`);
       break //5 pe loop break ho jayega
    }
    console.log(`value of i is ${i}`);
}


for(let i=1;i<=20;i++)
{
    if(i==5)
    {
       console.log(`Detected 5`);
       continue //5 will not print
    }
    console.log(`value of i is ${i}`);
}

*/

//lecture-->28(((((((((((((((((((******************)))))))))))))))))))
/*
// let i=0
// while(i<=10)
// {
//     console.log(`value of i is ${i}`);
//     i=i+2
// }

// let myArray=["flash","batman","superman"]
// let arr=0
// while(arr<myArray.length){
//     console.log(`value is ${myArray[arr]}`);
//     // arr=arr+1-->agar ye nhi likhege to code infinite times ke liye run krega
//     arr=arr+1

// }

// let score=1
let score=11
do{
    console.log(`score is ${score}`);
    score++
}while(score<=10)
*/

//Lecture-->29(((((((((&&&&&&&***********^^^^^^^)))))))))
//High Order Array loops

//for of

//["","",""]
//[{},{},{}]
const arr=[1,2,3,4,5]

// for of
for(const num of arr){//isko loop ko object hona jaruri nhi hai aap esko String ya kishi aur per bhi laga sakte hai
    console.log(num);
}
const greetings="Hello, world!"
for(const greet of greetings){
    console.log(`each char is ${greet}`)
}

//maps
//A Map holds key-value pairs where the keys can be any datatype and remembers the original insertion order of the keys. 
const map=new Map();
map.set('IN',"India")//(key ,value)pair
map.set('USA',"United States of America")
map.set('Fr',"France")
map.set('IN',"India")
//map known for unique value || duplicacy is not allowed||jish order me enter kiya hai usi order me rhti hai.
console.log(map)

for(const key of map){//(key,value)pairs comesin the form of Array
    console.log(key);

}

for(const [key,value] of map){//Destruture of array ,you are hold the seperate key and value
    // console.log(key);
    // console.log(value);
    console.log(key,':-',value);
}
//for of apply on Object

const myObject={
    'game1':'NFS',
    'game2':'spiderman'
    // game1:'NFS',
    // game2:'spiderman'
}
for(const[key,value] of myObject){
    console.log(key,':-',value);
}