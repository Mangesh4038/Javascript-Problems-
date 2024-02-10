//immediately invoked function Expression (IIFE)

//Named IIFE
(function chai(){
    console.log("DB connected")
})();

//to end this IIFE we have to give semicolon at end of this function

//()()  first parenthesis is for function defination and second parenthesis is for code execution/calling
//globbal scope of functionn creates problem so to avoid this problem we use the  IIFE 


//simple IIFE 
(() => {
    console.log("DB connected two")
})()