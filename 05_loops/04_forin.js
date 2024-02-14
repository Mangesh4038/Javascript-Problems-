const myobject ={
    'js': "Javascript",
    'CPP' : "C++",
    'r' : "ruby",
    'Swift' : "swift by apple"
}

for (const key in myobject) {
    console.log(`${key} is shortcut for ${myobject[key]}`)
}

const programming =["mangesh","ishwara",'Mali']
for (const key in programming) {
   console.log(programming[key])
}

//objects can be iterated using forin rather than forof 