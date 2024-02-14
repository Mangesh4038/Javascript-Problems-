//for 

// for (let i = 0; i < 10 ; i++) {
//     const element = i;
//     console.log(element)
//     if(element==5)
//     {
//         console.log("5 is the best number ")
//     }
// }

// for(let i=1;i<=3;i++)
// {
//     console.log(`outer loop : ${i}`)
//     for(let j=1;j<=3;j++)
//     {
//         // console.log(`inner loop ${j} for the outer loop : ${i}`)
//         console.log(`${i} * ${j} = ${i*j}`)
//     }
// }


// let myarray = ["flash","batman","superman"]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element)
// }

for (let index = 1; index <= 20; index++) {
    const element = index;
    if(index==5)
    {
        console.log("detected five")
        // break;
        continue;
    }
    console.log(index)
}