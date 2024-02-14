// foreach filter  does not return any values 

const coding = ["js","ruby","java","python","cpp"]

const values = coding.forEach((item) => {
    // console.log(item)
    return item 
})
// console.log(values )


// when we use scope for filter we have to return value by using return keyword  
// when we dont use scope then return is not required 
const mynums = [1,2,3,4,5,6]
const newvalue = mynums.filter((item) => {
    // return item > 4
    // num>4
})


mynums.forEach((item)=>{
    if(item>4)
    {
        newvalue.push(item)
    }
})
console.log(newvalue)