//  Stack (primitive), Heap (non-primitive)



/*
below is stored in stack
*/
let myName = "Yash Kashyap"
let secondName = myName
secondName = "Kashyap"

console.log(myName);
console.log(secondName);


/*
below is stored in stack
*/
let userOne = {
    email: "user@gmail.com",
    upi: "user@ybl",
    contactNumber: 982415323,
    address: "palika vihar, Delhi"
}
let userTwo = userOne
userTwo.email="change@gmail.com"
console.log(userOne.email);
console.log(userTwo.email);
