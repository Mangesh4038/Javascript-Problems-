let name="Mangesh"
let repocount=9
console.log(`my name is ${name} and my repocount is ${repocount}`)
 
let gamename=new String('mangesh')
console.log(gamename[0]) //gives 0th value from string as string is the key value pair in javascript

console.log(gamename.__proto__) //prints empty 

console.log(gamename.toUpperCase()) // it does not change original value 

console.log(gamename.charAt(2))
console.log(gamename.indexOf('m'))

console.log(gamename.substring(0,4))
console.log(gamename.slice(-6,4))

let anotherstring = new String('      Mangeshmali')
console.log(anotherstring)
console.log(anotherstring.trim())