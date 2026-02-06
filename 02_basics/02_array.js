const marvel_heros = ["thor", "ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);  //[ 'thor', 'ironman', 'spiderman', [ 'superman', 'flash', 'batman' ] ] 
// console.log(marvel_heros.length);  //4

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const allNewHeros = [...marvel_heros, ...dc_heros]  //spread operator
// console.log(allNewHeros);  //[ 'thor', 'ironman', 'spiderman', 'superman', 'flash', 'batman' ]

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)  //flat => sabhi array ko ek hi array me daal deta hai (infinite => ke place pe aap koi number bhi de skte hai aapko kitni defth me jana hai )
// console.log(real_another_array);   //[1, 2, 3, 4, 5,6, 7, 6, 7, 4, 5]

// console.log(Array.isArray("hitesh"));  //false (ye btata h ki array hai ya nhi)
// console.log(Array.from("hitesh"));  //[ 'h', 'i', 't', 'e', 's', 'h' ]  (array me convert ho jta h)

console.log(Array.from({name: "hitesh"}));  //[]   **interview**  aapko btana padegaa ki key ya value ko array bana hai.

let score1 = 101
let score2 = 102
let score3= 103
let score4 = 104
console.log(Array.of(score1, score2, score3, score4));  //[ 101, 102, 103, 104 ]  (of => sabhi element ko array me daal deta hai)







