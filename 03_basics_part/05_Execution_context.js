// global execution context 
// function execution context 
// Eval Execution context 


/* How javascript Code runs 
    1) Memory Creation Phase / Creation Phase
    2)Execution Phase 


    let val1=10;
    let val2=5;
    function addnum(num1,num2){
        let total=num1+num2;
        return total
    }
    let result1=addnum(val1,val2)
    let result2=addnum(10,15)
    
    
    a)Global Execution :- this 
    b)Memory creation Phase
        val1->undefined 
        val2->undefined 
        addnum->defination of function
        result1->undefined 
        result2->undefined 

    c)Execution Phase
        val1=10;
        val2=5;
        result1 : addnum -> New variable enviornment + Execution Thread (New execution context) 
            c.1)Memory creation Phase 
                val1->undefined 
                val2->undefined 
                total->undefined 

            c.2)execution context 
                num1=10;
                num2=5;
                total=15;
        return total;
                delete execution context 
        
        result2 : addnum -> New variable enviornment + Execution Thread (New Execution Context)
            c.1)Memory creation Phase 
                val1->undefined 
                val2->undefined 
                total->undefined 

            c.2)execution context 
                num1=10;
                num2=15;
                total=25;
        return total;
            delete execution context 

*/