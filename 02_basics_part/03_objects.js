//singelton:- when you make constuctors then object is singleton
// Object.create()


//object literals 
//if we make objects through other methods then object have its multiple instances 


const jsuser={
    name:"Mangesh",
    "full name":"Mangesh Ishwara Mali",
    age:18,
    location:"Rendal",
    email:"Mangesh@gmail.comm",
    isloggerin:false,
    lastlogin:["Monday","Saturday"]
}

//two methods to access the elements from objects 
console.log(jsuser.name)
console.log(jsuser["name"])
//console.log(jsuser.full name)
console.log(jsuser["full name"])

//override values 
jsuser.email="mangeshmali2002@gmail.com"
Object.freeze(jsuser)// prevents the previous modification of the objects 
console.log(jsuser.email)
console.log(jsuser)


//functions
jsuser.greeting=function(){
    console.log("hello js user")
}
console.log(jsuser.greeting)