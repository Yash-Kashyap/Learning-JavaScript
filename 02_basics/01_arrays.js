// array

const myArr = [0, 1, 2, "yash", true]
const myHeros = ["Batman", "superman"]
const myArr2 = new Array (1,2,3,4,5)

console.log(myArr2[3]);

// methods of arrays
myArr.push("i love Biryani")
console.log(myArr);

myArr.pop()
console.log(myArr);

myArr.unshift(9)
console.log(myArr);

myArr.shift()
console.log(myArr);

myArr.shift()
console.log(myArr);

console.log(myArr.includes(7));
console.log(myArr.indexOf(2));
console.log(myArr.indexOf(7));

const newArr = myArr.join()
console.log(newArr);
console.log(myArr);
console.log(typeof(newArr));
console.log(typeof(myArr));

// slice and splice

console.log("A ",myArr);
const myNew1 = myArr.slice(1,3)
console.log(myNew1);
console.log("B ",myArr);


console.log("A ",myArr);
const myNew2 = myArr.splice(1,3)
console.log(myNew2);
console.log("B ",myArr);