function numberOfProperties(obj){
   return Object.keys(obj).length
}

const obj={
    name:"john",
    age:18,
    grade:"A"
}
console.log(numberOfProperties(obj));