const arr1=["Mangesh","Ishwara","Mali"]
const arr2=["Sneha","Ishwara","Mali"]
const arr3=["sangita","ishwara","Mali"]
// concat function add and store elements of second array into first array 
//it can add two arrays at a time 
console.log(arr1.concat(arr2))

//spread function 
//this function is most preferred as it can add multiple arrays at a time  
console.log(...arr1,...arr2,...arr3)

//flat can be used for making arra of array into single array 
//flat function takes argument as depth which can be depth of the original array you want to perform 
const new_arr=[1,2,3,[4,5,6],[7,8,[9,10]]]
console.log(new_arr.flat(Infinity))

console.log(Array.isArray("Mangesh")) //checks it array or not  
console.log(Array.from("Mangesh")) //makes array of characters from word 
console.log(Array.of("Mangesh","Mali",1,5,6,"My kingdom")) //makes array of the given elements  


