// const coding =["js","ruby","java","python","cpp"]
// const values=coding.forEach((item)=>{
//     //console.log(item);//return undefined

//     // console.log(item);//return undefined
//     // return item;

//     return item;//return undefine


// })
// console.log(values);

// const coding =["js","ruby","java","python","cpp"]
// const values=coding.forEach((item)=>{
    //console.log(item);//return undefined

    // console.log(item);//return undefined
    // return item;

    //return item;//return undefine


// })
// console.log(values);


// const myNums=[1,2,3,4,5,6,7,8,9,10]
// //filter also take callback function.
// //forEach values ko return nhi karta hai but, filter values ko return karta hai.
// const newNums=myNums.filter((num)=>num>4)//filter ke under ke callback function ke vlue ko each time acess kiya 
// //jayega and return kiya jayega with fulfill given condition.
// console.log(newNums)]


// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{
//     num>4
// })
// console.log(newNums);//return []

// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNums.filter((num)=>{
//     return num>4  //jab aap scope open karte hai to return keyword use karna padega
    
// })
// console.log(newNums);


// const myNums=[1,2,3,4,5,6,7,8,9,10]
// const newNums=[]
// myNums.forEach((num)=>{
//     if(num>4){
//         newNums.push(num)
//     }
// })
// console.log(newNums);


// const books = [
//     { title: "Book 1", genre: "Genre 1", publish: "Publish Date 1", edition: "1991" },
//     { title: "Book 2", genre: "Genre 2", publish: "Publish Date 2", edition: "1992" },
//     { title: "Book 3", genre: "Genre 3", publish: "Publish Date 3", edition: "1993" },
//     { title: "Book 4", genre: "Genre 4", publish: "Publish Date 4", edition: "2000" },
//     { title: "Book 5", genre: "Genre 5", publish: "Publish Date 5", edition: "2002" },
//     { title: "Book 6", genre: "Genre 6", publish: "Publish Date 6", edition: "2002" },
//     { title: "Book 7", genre: "Genre 1", publish: "Publish Date 7", edition: "2004" },
//     { title: "Book 8", genre: "Genre 8", publish: "Publish Date 8", edition: "2008" },
//     { title: "Book 9", genre: "Genre 9", publish: "Publish Date 9", edition: "2019" },
//     { title: "Book 10", genre: "Genre 10", publish: "Publish Date 10", edition: "2020" }
//   ];

//let userBooks = books.filter((bk)=>bk.genre ==='Genre 1')
//   console.log(userBooks);

// userBooks=books.filter((bk)=>{return bk.publish>=1995 && bk.edition==="2004"})
// console.log(userBooks); //print []

// userBooks=books.filter((bk)=>{return bk.publish>="Publish Date 8" && bk.edition==="2008"})
// console.log(userBooks);


// const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num)=>num+10)
// console.log(newNums)

// const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers.map((num)=>{return num+10})
// console.log(newNums);


// const myNumbers=[1,2,3,4,5,6,7,8,9,10]
// const newNums=myNumbers
//                     .map((num)=>num*10)
//                     .map((num)=> num+1)//here num=10+1
//                     .filter((num)=>num>=40)//num is  greather than  40 print them only
// console.log(newNums);

//Array reduce()(((((((((((((***********)))))))))))))
// const array1 = [1, 2, 3, 4];

// // 0 + 1 + 2 + 3 + 4
// const initialValue = 0;
// const sumWithInitial = array1.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   initialValue,//jo bhi aap intial value dete hai first time accumulator ke under chal jati hai , jab pahli baar loop 
//   //chalega to accumulator ke under value zero hogi -->first time accumulator + currentValue means 0+currentValue.
// );

// console.log(sumWithInitial);
// // Expected output: 10



// const myNums=[1,2,3]
// const myTotal=myNums.reduce(function(acc,currval){
//     console.log(`acc:${acc} and currval: ${currval}`);
//     return acc+currval
// },0)
// console.log(myTotal);


// const myNums=[1,2,3]
// const myTotal =myNums.reduce((acc,curr) => acc+curr, 0)
// console.log(myTotal);

const shoppingCart=[
    {
        itemCard:"js course",
        price:"2999"
    },
    {
        itemCard:"jva course",
        price:"3999"
    },
    {
        itemCard:"py course",
        price:"1999"
    }    
]

const priceToPay=shoppingCart.reduce((acc,item)=> acc + item.price, 0)
console.log(priceToPay);


