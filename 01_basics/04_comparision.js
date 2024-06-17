console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2<=1);
console.log(2==1);
console.log(2!=1);
/*
all of the above comparisions were quite easy and expected
*/

// below comparisions may not be normal or expected
console.log("2">1); // true
console.log("02">1); //true


/*
below written comparisions should not be made
*/
console.log(null > 0);  //false "unpredictable results"
console.log(null == 0); //false "unpredictable results"
console.log(null >= 0); //true "unpredictable results"

console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined >= 0);
//*****************************************************


//**********************strict check***************
console.log("2"===2); //in these types of comparisions datatypes are also checked






