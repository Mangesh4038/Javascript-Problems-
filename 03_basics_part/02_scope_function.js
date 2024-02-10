let a=500;

if(true)
{
    let a=10; //variables declared with let and const are have block level scope 
    const b=20; // so it can not be accessed outside the block 
    var c=30; // but var can be accessed from outside the block so it can create the problem 

    console.log("Inner : ",a)
}

console.log(a)
// console.log(b)
// console.log(c)

//nested scope 
function one(){
    const name="Mangesh"
    function two(){
        const website="Youtube"
        console.log(name)
    }
    // console.log(website)
    two()
}
one()