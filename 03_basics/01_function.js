function sayMyName(){
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
console.log("h");
}

sayMyName()  //sayMyName <= function defination, () <= esko execution bolte hai.

// function addTwoNumber(num1, num2){  //function defination time jo bhi value pass kr rhe hai usko arguments bolte hai 
// console.log(num1+num2);

// }
//function call time jo bhi value pass kr rhe hai usko parameters
// addTwoNumber()  //NaN
// addTwoNumber(2, 3)  //5
// addTwoNumber(2, "3")  //23
// addTwoNumber(2, "")  //2
// addTwoNumber(2, null)  //2

//===============kya js me variable me store krna possible hai possible hai (possible hai but dusre tarika se)======================================
// const result = addTwoNumber(2, 3)  //5
// console.log("result " + result);  //undefined


//================================yes ab "result" me store ho jayegaa jab bhi function se retun aayegaa=================================================================
// function addTwoNumber(num1, num2){
// return num1+num2
// }

// const result = addTwoNumber(2, 3)  //yes ab result me store hogaa jo bhi return aayegaa function se
// console.log(result);  //5

//=====================================================================================================================================

function addTwoNumber(userName){
return userName
}

console.log(addTwoNumber());  //undefined

//======= rest operators ===> calculate kart price (mujhe pata nhi hota hai ki kitne parameters aane wala hai) ==================

/*
function calculateKartPrice(...price){
    return price
}

console.log(calculateKartPrice(200, 300, 500));  //[ 200, 300, 500 ]
*/

/*
function calculateKartPrice(val1, val2, ...price){  //200, 300 ====> val1, val2 ke under chala gyaa
    return price
}

console.log(calculateKartPrice(200, 300, 500, 600));  //[ 500, 600 ]
*/

//=====================================================Handle Object User======================================================
const user = {
    username: "hitesh",
    price: 199
}

function handleobject(anyobject){  //function call se anyobject ke under user store ho jayegaa
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);  //mujhe object ke naam se mtlb nhi hai main khud ki arguments se mtlb hai waise bhi to object store ho gyi hai na argument's variable me.
}

handleobject(user)

const myArray = [200, 500, 800, 659, 897]

function returnSecondValue(setArray){
    return setArray[0]
}

console.log(returnSecondValue(myArray)
);






