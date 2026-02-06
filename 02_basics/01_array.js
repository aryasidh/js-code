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

//splice
const myn2 = myArr.splice(1,3)
console.log("C ", myArr);
console.log(myn2);
