const name = "Yash"
let repoCount = 13

console.log(name +" have " + repoCount + " repos on Github.");
/*
above way of writing is old way, not used commonly nowadays
*/
console.log(`hello my name is ${name} and i have ${repoCount} repos on Github.`);
/*
above way of writing is modern and more readable
*/

const gameName = new String('YashRajput')

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('R'));

const newString = gameName.substring(0,10)
console.log(newString);

const anotherString = gameName.slice(-2,4);
console.log(anotherString);

const newStringOne = "    Yash    ";
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://lco.in.co%20yash%34dry"
console.log(url.replace('%20','_'));
console.log(url.includes('yash'));

console.log(gameName.split);