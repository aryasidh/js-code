/*singleton
agar literals se bnayenge to singleton nhi bnegaa
agar constructor se bnayenge to singleton hi bnegaa
*/

//object literals

const mySymb = Symbol("key1")

const jsUser = {     //{} <=== esko hi object bolte hai  (non-singleton object)
    name: "hitesh",                 //key(name), value(hitesh) ===> computer key ko string smjhta hai mtlb wo aise "name" store krta hai
    "full name": "hitesh choudhary",
    [mySymb]: "mykey1",        // jb symbol ko refer krna ho to square bracket me daalte hai 
    // mySymb: "mykey1"   // ❌ string ban jaayega
    agr: 18,
    location: "jaipur",
    email: "prince@google.com",
    login: false,
    lastLoginDay: ["monday", "saturday"]
}

// console.log(jsUser.name);  //hitesh  (jb hm loog dot se acces krte hai to string me likhne ki koi need nhi hai)
// console.log(jsUser["name"]);  //hitesh   (jb hm loog square bracket se access krte hai to string me input dena hota hai mtlb string )
// console.log(jsUser["full name"]);
// console.log(jsUser[mySymb]);

// jsUser.email = "hitesh@chatgpt"
// Object.freeze(jsUser)                  // freeze krne ke baad koi bhi change nhi kr sktaa hai 
// jsUser.email = "hitesh@microsoft.com"  //error nhi aayegaa but change bhi nhi hoga
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${this.name}`);
    
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



/*===================================================================================================================
OBJECT & SYMBOL — QUICK NOTES (JS)
================================== */

/*
1) OBJECT BAS KYA HAI?
--------------------
JS me object = key : value ka box
{} likhte hi object ban jata hai
Class / constructor ki need nahi
*/

/*
2) OBJECT KE RULES
-----------------
- Key internally STRING hoti hai
- Value kuchh bhi ho sakti hai
  (number, string, array, object, symbol)
*/

/*
3) DOT vs SQUARE BRACKET
-----------------------
obj.name        → simple key
obj["full name"]→ space/special char
*/

/*
4) SYMBOL KYA HAI?
-----------------
Symbol = unique VALUE
Do same Symbol kabhi equal nahi hote
Symbol("a") !== Symbol("a")
*/

/*
5) Symbol("prince") ME "prince" KYA HAI?
--------------------------------------
"prince" = sirf description / label
Fix nahi hota
Key decide nahi karta
Sirf readability ke liye
*/

/*
6) SYMBOL OBJECT KEY KAISE BANTA HAI?
-----------------------------------
Square bracket ka rule:
{ [expression]: value }

expression evaluate hota hai
Result key ban jata hai
*/

/* CORRECT */
const mySymb1 = Symbol("prince")
const user = {
  [mySymb1]: "value"
}

/* WRONG */
const user2 = {
  mySymb1: "value"   // "mySymb" string ban jaata hai
}

/*
7) IMPORTANT SUMMARY
-------------------
- mySymb → variable
- Symbol("prince") → Symbol value
- Symbol value → object key
- "prince" → sirf label
- "value" → object value
*/

/*
ONE LINE RULE:
Symbol ke andar likhi string key nahi hoti,
actual key Symbol khud hota hai
*/




