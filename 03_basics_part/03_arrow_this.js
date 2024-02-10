const user ={
    username:"Mangesh",
    price:199,
    welcomemsg:function(){
        console.log(`${this.username} welcome to website`)
        console.log(this);
    }

}

// user.welcomemsg()
// user.username="sam"
// user.welcomemsg()
// console.log(this);


// function chai(){
//     let username="Mangesh"
//     console.log(this.username)//it prints as undefined because it tret as a object not  function 
// }
// chai()


// const chai=function(){
//     let username="Mangesh"
//     console.log(this.username)//it prints as undefined because it tret as a object not  function 
// }
// chai()


// const chai=()=>{
//     let username="Mangesh"
//     console.log(this)
// }


//normal method  or explicit return method  
const addtwo = (num1,num2) =>{
    return num1+num2
}
console.log(addtwo(3,4))


//implicit return method 
const add =(num1,num2) => (num1+num2)

//to return object we have to wrap value into paranthesis otherwise it gives you undefined 
const addstring=(num1,num2) => ({username:"Mangesh"})

console.log(addstring(3,4))