let score = "yash"

// console.log(typeof score)

let valueInNumber = Number(score)
// console.log(typeof valueInNumber);
// console.log(valueInNumber)

//"33"=>33
//"33afa"=>NaN
//true=>1, false=>0

let isLoggedIn = 5
let booleanIsLoggedIn = Boolean(isLoggedIn)
// console.log(booleanIsLoggedIn);
// 1 => true, number greater than 0 is always true
// 0 => false

// *******************Operations***************************
let value = 6
let negValue = -value

// console.log(negValue);

// console.log(2-3);
// console.log(2+3);
// console.log(2*3);
// console.log(2**3);
// console.log(2/3);
// console.log(2%3);

let str1 = "Hello";
let str2 = " Yash";
let str3 = str1 + str2;
// console.log(str3); //this was normal, we all expected that

/*
but problem can be here
*/

// console.log("1"+4);
// console.log("5"-2);
// console.log(6*"4");
// console.log("7"/4);
// console.log("1"+"4");
// console.log("1"+4+2);
// console.log(1+4+"2");


// console.log(+true);
// console.log(+"");

let num1, num2, num3
num1 = num2 = num3 = 3 - 1  //this is not preffered, as it affects readability

let gameCounter = 100
gameCounter++;
console.log(gameCounter);
++gameCounter;
console.log(gameCounter);
/*
read and understand about prefix and postfix
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Increment
*/






