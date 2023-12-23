const user ={
    username : "kkkk",
    price: "199",
      welcomeMessage(){
    console.log(`heelo ${this.username} how are you welcome`)
 }
}

user.welcomeMessage()
user.username ="ssam"
user.welcomeMessage()
console.log(this) //empty because engine is standalone and in browser this refers to the windoww
//this reffers to a object not to s function in function it will be undefied

/*const chai = () =>{ //arrrow functionsss
    let username = "fgsdg"
    console.log(this.username)
}
chai()*/


//const addTwo = (num1,num2) => num1 + num2 //implicit arrow func
//const addrwo = (num1,num2) => num1 + num2//no need for the return key
//console.log(addtwo(3.5))

////IIFE 
//immidieatly invoked function expression
//to avoid pollution occured to the global varibale
//(//fucntion)(//execution)

//(() => { })();

(() => {
    console.log("connected")
})();

((name) => {
    console.log(`print this ${name}`);
})(`hitesh`)