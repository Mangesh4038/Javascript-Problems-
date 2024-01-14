let newdate=new Date();

// difference types to print the date in js 
console.log(newdate)
console.log(newdate.toString())
console.log(newdate.toDateString())
console.log(newdate.toLocaleDateString())

let mycreatedate=new Date(2023,1,23)
console.log(mycreatedate.toDateString())

// date, array, function is of object datatype
console.log(typeof newdate) 

//time stamp  
let mytimestamp=Date.now();
console.log(mycreatedate.getTime())
console.log(Math.floor(mytimestamp/1000))

// various methods of date and time 
console.log(newdate.getMonth())
console.log(newdate.getUTCDay())
console.log(newdate.getFullYear())

// `${newdate.getUTCDay()} and the time is ${mycreatedate.getTime()}`
newdate.toLocaleString('default',{
    weekDay: "long"
})