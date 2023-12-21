const MyArray =[0,1,3,4,5,6,7]
//creates shallow copies
const MyArray2 = new Array(1,3,4,3,2,4)
MyArray.push(8)
//console.log(MyArray);
MyArray.pop(4)
MyArray.unshift(9)
MyArray.shift()
//console.log(MyArray);
//join method converts into String
//slice,splice

const Myarr = [0,1,2,3,4,5,6]
const myn1 = Myarr.slice(1,3)
console.log("A",myn1)
const myn2 = Myarr.splice(1,3)
console.log("b",myn2)
console.log("c",Myarr)
//splice method changes the originak array by reoving the element 
//and it differes from alice methods in the range inclusion




const car = ["supra","rx7","buggati","konniseg"]
const bike = ["s1000rr","zx10r","panigale","CBr1000"]
//car.push(bike)
//console.log(car)

//spread operator
const all = [...car,...bike]
console.log(all)

//.falt operarins converts all ithe iner array into a single array
//convrting into an array
console.log(Array.from("ksuahnk"))
// go through iss array ,from , of methods thorugh the MDN 