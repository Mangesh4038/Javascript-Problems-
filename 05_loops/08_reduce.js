const mynums =[1,2,3]
// const total =mynums.reduce(function (accu,currval){
//     console.log(`accu : ${accu} and currval : ${currval}`)
//     return accu+currval
// },0)


const  total= mynums.reduce((accu,currval) => accu+currval,0)
console.log(total)



const shoopingcart =[
    {
        itemname : "js",
        price : 2000
    },
    {
        itemname : "py",
        price : 1000
    },
    {
        itemname : "mobile development",
        price : 6000
    },
    {
        itemname : "data science",
        price : 13000
    }
]

const mytotal = shoopingcart.reduce((accu,item)=>accu+item.price,0)
console.log(mytotal)