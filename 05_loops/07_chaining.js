const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnums = mynums.map((num)=> {return num+10})

// chaining (number of methods in single line)
const newnums = mynums
                .map((num)=> num+10)
                .map((num)=>num+1)
                .filter((num)=>num>16)

console.log(newnums);
