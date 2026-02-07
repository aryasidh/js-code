const tinderUser = new Object()    //singleton object
// console.log(tinderUser);  //{}

// const tinderUser1 = {}   //non-singleton object
// console.log(tinderUser1);  //{}

tinderUser.id = "12151abc"
tinderUser.name = "prince"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "hitesh",
            lastname: "choudhary"
        }
    }
}

// console.log(regularUser.fullname.userfullname);  //{ firstname: 'hitesh', lastname: 'choudhary' }

const obj1 = {
    1: "a",
    2: "b",
}

const obj2 = {
    3: "a",
    4: "b"
}

// const obj3 = {obj1, obj2}    //(not recomended)
// console.log(obj3);   //{ obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'a', '4': 'b' } }

// const obj3 = Object.assign({}, obj1, obj2)  //
// console.log(obj3);    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

// const obj4 = {...obj1, ...obj2}  //99% aap ye use krenge upr walla nhi 
// console.log(obj4);    //{ '1': 'a', '2': 'b', '3': 'a', '4': 'b' }


//database se value jab aayegi  (array object me aati hai)
const users = [
    {id: 1,
     email: "ha@gmail.com"
    },
    {id: 1,
     email: "ha@gmail.com"
    },
    {id: 1,
     email: "ha@gmail.com"
    },
    {id: 1,
     email: "ha@gmail.com"
    }
]

users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser));   // [ 'id', 'name', 'isLoggedIn' ]  all keys of tinderuser (return in array)
// console.log(Object.values(tinderUser));  //[ '12151abc', 'prince', false ]
// console.log(Object.entries(tinderUser));  //[ [ 'id', '12151abc' ], [ 'name', 'prince' ], [ 'isLoggedIn', false ] ]

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "hitesh"
}

const {courseInstructor: inst} = course
// console.log(courseInstructor);
console.log(inst);

//========================================================API============================================================
//apna kaam kisi or pe daal doo.
//json formate me aati hai (pahle xml formate me aati thi jo ki bhot complex hoti thi)
//key and value dono string me aate hai 

//api in object form 
// {
//     name: "hitesh",
//     age: 25,
//     id: wmikoim88
// }


//api in array form
[
    {},
    {},
    {}
]



