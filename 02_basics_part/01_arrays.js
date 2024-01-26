const myarr=[0,1,2,3,4,5,6,"Mangesh"]
console.log(myarr)

// array methods 
myarr.push(7)
myarr.push(8)
console.log(myarr)
myarr.pop()
console.log(myarr)

myarr.unshift(9) //it only adds the value at the beginning of the array 
console.log(myarr)
myarr.shift() //it shifts the array left by one poition i.e left most element is removed from the array
console.log(myarr)

console.log(myarr.includes(9))
console.log(myarr.indexOf(9))

console.log(myarr.join()) // it binds the array and converts into the string datatpes 

//slicing dont includes the range of the elements 
//and also there is no change in the original array after performing slice 
const slice_arr=myarr.slice(1,3)
console.log(slice_arr)
console.log(myarr)

//splicing includes the range of the elements 
//and also there is change in the original array after performing splice 
const splice_arr=myarr.splice(1,3)
console.log(splice_arr)
console.log(myarr)
