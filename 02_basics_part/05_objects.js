//objet de-structuring
 let user={
    name:"mangesh",
    phooneno: 7887347055,
    age : 18
 }

 //variables names should be the same for the below as in object 
 let {name,phooneno,age}=user
 console.log(name)
 console.log(phooneno)
 console.log(age)

 //another method of object destructuring by changing the names of the variables 
 let {name:n,phooneno:p,age:a}=user
 {
    console.log(n)
    console.log(p)
    console.log(a)
 }