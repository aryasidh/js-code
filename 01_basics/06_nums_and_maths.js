const score = 100;
console.log(score);  //100

const balance = new Number(100)
console.log(balance);  //[Number: 100]

console.log(balance.toString().length); //3
console.log(balance.toFixed(2))  //100.00

const anotherNumber = 123.678
console.log(anotherNumber.toPrecision(4)); //123.7 (but ye yaad rakhna ki decimal ke pahle 4 digit se jyada nhi honi chaiye nhi to exponentional me answer aayegaa)

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN'));  //10,00,000

//++++++++++++++++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.round(4.6));  //5
console.log(Math.ceil(4.2));  //5 (4.kuchh bhi 5 print kregaa)
console.log(Math.floor(4.9));   //4 (4.kuchh bhi 4 hi print kregaa)
console.log(Math.min(8,5,6,123,7));  //5
console.log(Math.max(8,5,23,9,151));  //151

console.log(Math.random()); // always zero to 1 
console.log((Math.random()*10) + 1)
console.log(Math.floor(Math.random()*10) + 1);


const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max-min+1)) + min);








