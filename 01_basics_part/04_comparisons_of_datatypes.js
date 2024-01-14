console.log(null>0)
console.log(null==0)
console.log(null>=0)

console.log(undefined>0)
console.log(undefined==0)
console.log(undefined>=0)

// we have to avoid such types of conversions

// the reason is that the equality check == 
// comparators > >= < <= works differently
// comparators operators treat null as  0 and then operations are performed 
// == checks value after conversion "2"==2 true
// === checks the datatypes and then compares "2" === 2 false 
