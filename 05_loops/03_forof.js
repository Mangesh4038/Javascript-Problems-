// for of 
const arr=[1,2,3,4,5]

for (const i of arr) {
    console.log(i)   
}

const grretings ="Hello Mangesh"
for (const i of grretings) {
    console.log(`each char is ${i}`)
}

//maps 
const map =new Map ()
map.set('In', "India ")
map.set('USA', "United states of america")
map.set('Fr',"France ")
map.set('In',"India ")
console.log(map)

for (const [key, value] of map) {
    console.log(key, ':-', value)
}

//maps are not iterable so it can be printed using forin loop 
