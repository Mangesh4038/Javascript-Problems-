const score=400;
console.log(score)

const balance=new Number(100)
console.log(balance)

console.log(score.toString().length)
console.log(balance.toFixed(1))

const anothernumber=27.27
console.log(anothernumber.toPrecision(3)) // this is very confusing part of methods so we have to take care when using the toPrecision method 

const hundreds =1000000;
console.log(hundreds.toLocaleString('en-IN'))


//*************************************************  // ******************************************************//
console.log(Math)
console.log(Math.abs(-4))
console.log(Math.round(4.6))
console.log(Math.ceil(4.2))
console.log(Math.floor(4.9))

console.log(Math.random())
console.log(Math.random()*10+1)
console.log(Math.floor(Math.random()*10+1))

const min =10
const max=20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)