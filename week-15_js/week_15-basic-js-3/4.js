function propertyName(obj,propName){
    return Object.hasOwn(obj,propName);
}

const sampleobj={
    name:"john",
    age:18,
    grade:"A"
}
console.log(propertyName(sampleobj,"age"));
console.log(propertyName(sampleobj,"grade"));
console.log(propertyName(sampleobj,"secton"));