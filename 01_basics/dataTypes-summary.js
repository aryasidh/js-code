// Premetives
// 7 Types => string, Number, boolean, null, undefined, symbol, bigint

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
console.log(typeof isLoggedIn);
const outsideTemp = null
console.log(typeof outsideTemp);  //object
let userEmail;
console.log(typeof userEmail);  //undefined

const id = Symbol("123")
const anotherId = Symbol("123")
console.log(typeof anotherId);

console.log(id === anotherId); //flase

const bigNumber = 8481487487481451484894287n  //not too m uch used at production level


// Reference(non-premetives)
// Array, Object, Functions
//NOTE:-agar "function ka "typeof" se check kroge to "function" aayegaa but ye to "object" hai na but defth me documentations padhoge to pata chalegaa ki "function object" return krtaa hai 

const heros = ["shaktiman", "naagraj", "doga"];
console.log(typeof heros);  //object

let myObj = {
    name: "prince",
    age: 22,
}
console.log(typeof myObj);  //object

const myFunction = function(){
    console.log("hello world")
}

// console.log(typeof bigNumber);  //bigint

console.log(typeof myFunction);  //function


/* CONCLUSIONS FOR TYPEOF
----FOR PREMETIVES------
typeof(string)----string
typeof(number)----number
type(boolean)-----boolean
typeof(null)------object   (special case)
typeof(undefined)-undefined
typeof(symbol)----symbol
typeof(bigint)----bigint


----Reference(FOR NON-PREMETIVES)------
typeof(OBJECT)----bject
typeof(array)-----object
typeof(function)---function (special case)

*/


/*********************************************************************************************
stack (premetives), heap(non-premetives)
stack-----------------------------------value ki copy milti hai
heap------------------------------------value ki reference milti hai
*/

let myYtName = "prince kumar"

let anotherName = myYtName
anotherName = "chaiorcode"

console.log(myYtName);  //prince kumar
console.log(anotherName);  //chaiorcode

let userOne = {
    email: "krprince@gmail.com",
    upi: "myUpiId"
}

let userTwo = userOne
userTwo.email = "hites@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);







