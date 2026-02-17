const user = {
    username: "hitesh",
    prince: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website `);
        console.log(this);  //user object ka sabhi members print honge
    }
}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()

// console.log(this);  //{}


// function chai(){
//     console.log(this)   //this only object ke sath hi use hota hai 
// }

// chai()


const chai = () => {
    let username = "prince"
    console.log(this);     //arrow function ke under this undefined nhi deta hai 
    
}

chai()  //{}

/*genertally arrow function aise bnta hai 
() => {}
*/ 

// const addTwo = (num1, num2) => {
//     return num1+num2
// }


// implicet function
// const addTwo = (num1, num2) => num1+num2 //jab hm ek line me likhte hai to implicitelly compiler smjhleta hai ki wo return laga hua hai 

// const addTwo = (num1, num2) => (num1+num2)

// NOTE:- simmple yaad rakho jab curlie breases lgaoge to return krna pdegaa , jb parentheses lgaoge to nhi use krna pdegaa 

const addTwo = (num1, num2) => ({username: "hitesh"})

console.log(addTwo());  //



