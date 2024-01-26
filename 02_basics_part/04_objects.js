const tinderuser = {}
tinderuser.id="123mali"
tinderuser.name="Mangesh"
tinderuser.isloggedin=false
console.log(tinderuser)

const regularuser ={
    email:"mangeshmali@gmail.com",
    fullname:{
        userfullname:{
            firstname:"Mangesh",
            lastname:"Mali"
        }
    }
}
console.log(regularuser.fullname.userfullname.firstname)
obj1={1:"a",2:"b"}
obj2={3:"a",4:"b"}

//if we dont put empty curly braces then assign function merge all object values and put it in a object 1
///if we put  empty curly braces then all merged values of objects are put it into empty curly bracess as target  
const resultobj3=Object.assign(obj1,obj2)
// const obj3=Object.assign({},obj1,obj2)
console.log(resultobj3===obj1)//true 

//we also use spread function which is vary easy and latest 
const obj4={...obj1,...obj2}
console.log(obj4)


//objects is collection of array 
const users =[
    {},
    {},
    {}
]
users[1].email //this is method through which we can access the first object or any object and its values 

console.log(Object.keys(tinderuser))//returns the array of keys in the object 
console.log(Object.values(tinderuser))//returns array of the values in object 
console.log(Object.entries(tinderuser))//returns array of arrays of keys and values pair 
console.log(tinderuser.hasOwnProperty("isloggedin"))//check for existence of property in object 