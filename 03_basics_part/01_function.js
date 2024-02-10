// function myname(){
//     console.log("M")
//     console.log("A")
//     console.log("N")
//     console.log("G")
//     console.log("E")
//     console.log("S")
//     console.log("H")
// }

// myname();

function addnumbers(num1,num2)
{
    // console.log(num1+num2)
    return num1+num2
}
// addnumbers(31,25)
let result=addnumbers(31,25)
console.log(result)

function print(username)
{
    if(!username)
    {
        console.log("Please enter the valid username")
        return 
    }
    return `${username} is just logged in`
}
console.log(print())

//spread operator converts the numbers of values in single array 
function addmorenumbers(...num1){
    return num1
}
console.log(addmorenumbers(200,300,400,2000)) 


const mali={
    name:"Mangesh",
    age:18
}

function descriptor(user){
    console.log(`username is ${user.name} and age is ${user.age}`)
}
descriptor(mali)

const mynewarray =[200,400,600]
function returnsecondvalue(getarray){
    return getarray[1] 
}

console.log(returnsecondvalue(mynewarray))