//
const arr = [1,2,3,4,5,6,7,]
for (const num  of arr) {
    //console.log(num);
    }

    const greetings = "kjsdhfksughfsf"
    for (const letter of greetings) {
       //console.log(letter);        
    }

    //MAPS known for unique valuses
    const map = new Map()
    map.set("india","in")
    map.set("usa","gsgg")
    map.set("wi","west inides")
    //console.log(map)

    for (const [key,value] of map) {//square bracket is used for destructuri g of arrays
        //console.log(key,"::",value)//for of loop csnnot wotk on the objects as it si not iterable
        
    }

    const myObject = {
        js:"javasript",
        cpp:"cplusplus",
        rb:"ruby",
        c : "c language"

    }
    for (const key in myObject) {
       //console.log(`${key} is used as shotcut for the ${[key]}` )
    }
    const prog = ["jj","cpp","ruby","rails","swift"]
    for (const key in prog) {
        //console.log(`output is ${prog[key]}`)
        
    }

    const arri = ["jj","cpp","ruby","rails","swift"]
    arri.forEach(function(item) {
        //console.log(item)
    });

    arri.forEach((value)=>{
       // console.log(value)

    })

    //objects inside the array 
    // items works as the object and to get soemthinf . method will be used to get ouput from the object array



    const coding = ["java","kotlin","php","cpp","html","css"]
    coding.forEach((item)=>{
    console.log(item)
    })//for each doesnot support return 

    const myNums =[2,3,4,6,9,,2,6,9,4,2,6,7]
   let numby =  myNums.filter((nums)=> nums >4 ) //callbacck functions
   console.log(numby) //if curly braces then return should be involved

const myyNums = [4,54,3,63,6,2,63,52,62]
const total = myyNums.reduce(function(acc,currval) {
console.log(`acc value is ${acc} and currval is ${currval}`);
return acc +currval},0)
console.log(total)