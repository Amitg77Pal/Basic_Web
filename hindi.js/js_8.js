//COMPARISION OPERTIONS*********************88__________--------//
//console.log(2>1);
//(x>=,<,==,!=..y)

// console.log("2">1);//print-->true//javascript apne aap string ko numbers me convert kar deta hai for comparision
// console.log("02">1);//print-->true

//the reason is that an equality check == and comparisions >,<,>=,<= works differently.
//Comparisions convert null to a Number,treating it as 0
//that's why (3) null>=0 is true and(1) null>0 is false.
// console.log(null>0);//print-->false//null means empty 
// console.log(null==0);//print-->false
// console.log(null>=0);//print-->true//here problem of value conversion || actually ,we don't know about any value

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);

//=== streak check--> values ko streakly check karta hai means value ke sath uske data_type ko bhi check karta hai
console.log("2"=== 2);//false
console.log("2"=== "2");//true
console.log(2=== 2);//true
