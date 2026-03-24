//if else
const x=0;
if(x){
    console.log(`condition is true`);
}
else{
    console.log(`condition is false`);  //false
}

//<, >, <=, >=, ==, !=, ===, !==

//==
if(2=="2"){
    console.log("condition is true");  //true
}

//===
if(2==="2"){
    console.log("condition is true");
}
else{
    console.log("condition is false");
}

//switch case
const month =4;
switch(month){
    case 1:
        console.log("jan");
        break;
    case 2:
        console.log("feb");
        break;
    case 3:
        console.log("march");
        break;
    case 4:
        console.log("april");
        break;
    default:
        console.log("default case match");
}

//NOTE:- (false)---0, -0, 0n, "", null, undefined, NaN.
//NOTE:- (true)---"0", `false`, " ", [], {}, function(){}

//check empty array
const arr = [];
if(arr.length===0){
    console.log("Array is empty");
}

const obj = {}
if(Object.keys(obj).length===0){
    console.log("Object is empty");
    
}