
/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.log("Hello Mangesh");
let num=3
let strnum=String(num)
console.log(strnum)
console.log(typeof(strnum))
let num1=-3
let numpos=--num
console.log(numpos)
console.log(true) //it only prints true
console.log(+true) // it prints 1 as true value 
console.log(+"") //it prints 0