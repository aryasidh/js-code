console.log(2>1);  //true
console.log(2>=2);  //true
console.log(1<2);  //true
console.log(2==2);  //true
console.log(2!=1);  //true
//above all the comparison is very easy no need to investigate or revision

//comparision se pahle data type should be same
console.log("2" > 1);  //true
console.log("02" > 1);  //true

/* 
1️⃣ Loose comparison (==, <, >, <=, >=)
👉 Yahan type coercion hoti hai
👉 JS zarurat padne par value ko number me convert kar deta hai

Example
"5" == 5      // true
"10" > 2      // true
true == 1     // true
false == 0    // true

Yahan kya hua?
"5" → 5
"10" → 10
true → 1
false → 0 
*/


console.log("5" === 5)    // false
console.log(true === 1)   // false
/*
2️⃣ Strict comparison (===, !==)
👉 Koi conversion nahi hoti
👉 Type + value dono same hone chahiye
"5" === 5    // false
true === 1   // false
*/


console.log("20" > "3");  //false
/*
3️⃣ Strings ka comparison (important trap ⚠️)
"20" > "3"   // false 😵
Kyun?
👉 Dono string hain
👉 Lexicographical (dictionary) order se compare hota hai
👉 "2" < "3"
*/

/*-------------------------------------ONLY FOR KNOWLEDGE PRACTICAL KOI USE NHI HAI----------------------------------------- */
console.log(null > 0);//  false
// comparison me null number ban jata hai (null → 0)
// 0 > 0 ❌ false

console.log(null == 0);  //false
// == null ko sirf undefined ke saath equal maanta hai
// null == undefined ✔️, but null == 0 ❌

console.log(null >= 0); //true
// >= comparison me null → 0
// 0 >= 0 ✔️ true




