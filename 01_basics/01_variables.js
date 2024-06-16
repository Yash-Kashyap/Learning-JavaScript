const accountId = 133134
let accountEmail = "temp@gmail.com"
var accountPassword = "12345678"
accountCity = "Jodhpur"
let accountState; // will be undefined

// accountId = 231432 //not allowed
accountEmail = "swap@gmail.com"
accountPassword = "231234"
accountCity = "goa"

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
/*
this is another way of getting a output on console if number of things are required to be printed
*/