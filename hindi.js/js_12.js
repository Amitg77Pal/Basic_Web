//Number and  Maths 699669969669

//---------NUMBERS------------------------
// const score=400
// console.log(score)
// const balance=new Number(100)//show the type of element
// console.log(balance);
// console.log(balance.toString())//show given number
// console.log(balance.toString().length)//lenth of the number
// console.log(balance.toFixed(2))//decimal ke bad kitne times thak number chahiye-->precision value

// const otherNumber=23.8966
// console.log(otherNumber.toPrecision(3));//decimal ke bad 3 digit tak ke numbers ko roundoff kar ke dega

//const hundreds=1000000
//console.log(hundreds.toLocaleString());//based on the U.S standard format
//console.log(hundreds.toLocaleString('en-IN'));//ye commas indian standard ke hisab se lagayege

//-------------------Search& perform on Google-console

/*********************MATHS********************* */

// console.log(Math);
// console.log(Math.abs(4));//4 // agar ham -ve vlaue dege to bhi +ve hi return karega
// console.log(Math.abs(-4));//4
// console.log(Math.round(4.3))//4
// console.log(Math.round(4.6))//5
// console.log(Math.ceil(4.3))//decimal ke baad kuchh bhi likha ho top value hi lega
// console.log(Math.floor(4.3))//decimal ke baad kuchh bhi likha ho bottom value  hi lega
// console.log(Math.min(4, 3, 6, 8))//give minimum value
// console.log(Math.max(4, 3, 6, 8))//give maximum value

// console.log(Math.random())//Math.random() ki value hamse (0-1) ke bheech me aayegi 
// console.log((Math.random()*10)+1);//sometimes value 0 aaya to 0*10 =0 ho jayega so we write (value*10)+1-->for min -->1
// console.log(Math.random()*10)+1;
// console.log(Math.floor(Math.random()*10)+1);//floor minimum value per round-off kar deta hai

// const min=10
// const max=20
// console.log((Math.random()*(max-min+1))+min)
// console.log(Math.floor(Math.random()*(max-min+1))+min)

/*------------&&&&&&&&&&&&&Date and Time-----------------------+++++++++++++++++++++++++++++++++*/
// let myDate = new Date()//object or instance
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);
//agar kisi bhi element ka type pta karna hai to console.log(typeof "___"); se pta chal jayega.


// let myCreatedDate = new Date(2023, 0, 23)//it is an arbitary
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());


// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate);
// console.log(myCreatedDate.toLocaleString());

// let myCreatedDate = new Date("2023-01-14")
// console.log(myCreatedDate.toLocaleString());
// let myTimeStamp=Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());//values coming in milliseconds used for comparision.
// console.log(Date.now())
// console.log(Date.now()/1000);//show current time and we are convert in seconds previously it is in milliseconds
// console.log(Math.floor(Date.now()/1000))


// let newDate = new Date()
// console.log(newDate);
// console.log(newDate.getMonth()+1);
// console.log(newDate.getDay());
// //'${newDate.getDay()} and the time'
// newDate.toLocaleString('default',{
//     weekday:"long",
//     timeZone:"UTC",
// })
// let myTimeStamp1=Date.now();






