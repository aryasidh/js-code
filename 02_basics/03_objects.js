/*singleton
agar literals se bnayenge to singleton nhi bnegaa
agar constructor se bnayenge to singleton hi bnegaa
*/

//object literals

const mySymb = Symbol("key1")

const jsUser = {     //{} <=== esko hi object bolte hai
    name: "hitesh",                 //key(name), value(hitesh) ===> computer key ko string smjhta hai mtlb wo aise "name" store krta hai
    "full name": "hitesh choudhary",
    [mySymb]: "mykey1",        // jb symbol ko refer krna ho to square bracket me daalte hai 
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







