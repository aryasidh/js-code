const name = "prince kumar"
const repoCount = 25
// console.log(name + repoCount + " value");

// basics method above

//string interpolation

console.log(`hello my name is ${name} nad my name repo count is ${repoCount}`);

const gameName = new String("prince-hc")

console.log(gameName[0]);  //p
console.log(gameName.__proto__);  //{}

console.log(gameName.length);  //9
console.log(gameName.toUpperCase());  //PRINCE-HC
console.log(gameName.charAt(2));  //i
console.log(gameName.indexOf('n'))  //3

const newString = gameName.substring(0,3)  //last index excluded  (if you put -ve here then compiler ignore negative and continue from zero)
console.log(newString);  //pri

const anotherString = gameName.slice(-8, 4)  //rin (last index se start krta hai)
console.log(anotherString);

const newStringone = "     prince   "
console.log(newStringone.trim());  //prince(without space)
console.log(newStringone);  //        prince   (prince with space)

const url = "https://urban-robot-7v964gxppx942wwx7.github.dev/"
console.log(url.replace('dev', 'prince'));  //https://urban-robot-7v964gxppx942wwx7.github.prince/

console.log(url.includes("prin"));  //false


console.log(gameName.split('-'));  //[ 'prince', 'hc' ]  (kiske basis pe split krni hai)













