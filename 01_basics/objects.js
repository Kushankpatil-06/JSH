//singleton
//object literals
const mySym = Symbol("key1")
 const Jsuser = {
    name:"kushank" ,
    [mySym]:"key1",
    age :18,
    location:"pune",
    email: "kjshf@gmail.com",
    isLoggedIn:"false"

}
console.log(Jsuser.email)
console.log(Jsuser["email"])
console.log(Jsuser[mySym])
