/*
primitive datatypes
    7 types : String, Number, Boolean, null, undefined,     
              Symbol, BigInt



reference datatypes
    Array, Objects, Functions
*/


/*
JavaScript is a dynamically typed language. This means that you don't have to specify the data type of a variable when you declare it. It also means that data types are automatically converted as-needed during script execution.
*/
let a = 1; // a is a number
let b = "hello"; // b is a string
let c = true; // c is a boolean

a = "hello"; // a is now a string
b = 1; // b is now a number
c = "true"; // c is now a string



const id = Symbol('21231')
const anotherId = Symbol('21231')
console.table([id,anotherId]);
console.log(id === anotherId);

const bigNumber = 3432532532523254n

const heros = ["shaktiman","naagraj","doga"]
let myObj = {
    name: "Yash",
    age: 21,
}

const myFunction = function(){
    console.log("hello world");
}
console.log(typeof myFunction);
