const myArr = [0,1,8,5,9,5]
const myheros = ["shaktiman", "nagraj"]

// const myArr2 = new Array(1,8,123,5,25,6,1,5,1,5)
// console.log(myArr[4])

//Array Methods

// myArr.push(7)  //element added at last
// console.log(myArr);  //[0,1,8,5,9,5,7]

// myArr.pop()  //element delet from last
// console.log(myArr);  //[ 0, 1, 8, 5, 9 ]

// myArr.unshift(-1)  //element added at 0 index
// console.log(myArr);  //[ -1, 0, 1, 8,5, 9, 5]

// myArr.shift()  // remove element at 0 index
// console.log(myArr);  //[ -1, 0, 1, 8,5, 9, 5]

// console.log(myArr.includes(9));  //true  (if avilable => true, otherwise => false)
// console.log(myArr.indexOf(5));  //3 (return index of first occurance)

// const newArr = myArr.join()
// console.log(myArr);  //[ 0, 1, 8, 5, 9, 5 ]
// console.log(newArr);  //0,1,8,5,9,5  (all value converted into string)
// console.log(typeof newArr);  //string

//slice, splice

console.log("A ", myArr);
//slice
const myn1 = myArr.slice(1,3)
console.log(myn1);

console.log("B ", myArr);

// //splice
// const myn2 = myArr.splice(1,3)
// console.log("C ", myArr);
// console.log(myn2);

// ======================= SPLICE NOTES =======================

// splice(startIndex, deleteCount, item1, item2, ...)

// 🔑 RULE:
// splice ka behavior PURELY arguments pe depend karta hai
// JS "add" ya "delete" keyword nahi dekhti

// ------------------------------------------------------------
// CASE 1: ONLY DELETE
// deleteCount > 0  AND koi add item nahi
let arr1 = [10, 20, 30, 40, 50];
arr1.splice(1, 2);
// index 1 se 2 elements delete
// BEFORE: [10, 20, 30, 40, 50]
// AFTER : [10, 40, 50]

// ------------------------------------------------------------
// CASE 2: ONLY ADD
// deleteCount = 0  → kuch delete nahi hoga
let arr2 = [10, 20, 30];
arr2.splice(1, 0, 15);
// index 1 pe sirf add
// BEFORE: [10, 20, 30]
// AFTER : [10, 15, 20, 30]

// ------------------------------------------------------------
// CASE 3: DELETE + ADD (REPLACE)
// deleteCount > 0 AND add items present
let arr3 = [10, 20, 30, 40];
arr3.splice(1, 2, 99, 100);
// index 1 se 2 delete, phir 99 & 100 add
// BEFORE: [10, 20, 30, 40]
// AFTER : [10, 99, 100, 40]

// ------------------------------------------------------------
// CASE 4: DELETE TILL END
// deleteCount missing → startIndex se end tak delete
let arr4 = [10, 20, 30, 40, 50];
arr4.splice(2);
// BEFORE: [10, 20, 30, 40, 50]
// AFTER : [10, 20]

// ------------------------------------------------------------
// IMPORTANT:
// splice ORIGINAL array ko CHANGE karta hai
// splice RETURN karta hai → deleted elements ka array
// ============================================================

