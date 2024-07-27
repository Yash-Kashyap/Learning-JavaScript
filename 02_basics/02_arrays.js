const myArr = [1, 2, 4];
const marvel_heros = ["Thor","Spiderman","Ironman","Black Panther"]
const DC_heros = ["Superman","Batman","Flash"]


// marvel_heros.push(DC_heros)

// console.log(marvel_heros[4][1]);
// console.log(marvel_heros);

// const all_heros = marvel_heros.concat(DC_heros)
// console.log(all_heros);

// const all_heros = [...marvel_heros, ...DC_heros]
// console.log(all_heros);

// const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
// const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array);


console.log(Array.isArray("yash")); 
console.log(Array.from("yash"));
console.log(Array.from({name: "yash"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));


