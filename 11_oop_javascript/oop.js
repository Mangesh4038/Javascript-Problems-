// Object literal
const user = {
    username : "mangesh",
    logincount : 8,
    signin : true,

    getuserdetails : function(){
        // console.log("got user detail fromm database");
        // console.log(username) this shows the error as username is not defined 
        console.log(this.username)
        console.log(this)
    }
}
console.log(user.getuserdetails());
console.log(this)

// Constructor function
function User(username, logincnt, islogedin){
    this.username = username;
    this.logincnt = logincnt;
    this.islogedin = islogedin;

    return this
}

const userone = new User("Mangesh", 8, true)
const usertwo = new User("mali", 10, false)

console.log(userone);


// whenn we use new keyword then always new instance is created 
// new keyword calls constructor function 
// all arguments are injected into this 
// and we get that into  functions

// without new there will be overriding of values 




