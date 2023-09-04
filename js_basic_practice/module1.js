// let myarray=[0,1,2,3,4,5,6];
// console.log(myarray)
// console.log("slice",myarray.slice(1,3));

// console.log("before splice",myarray)
// console.log(myarray.splice(1,2));
// console.log("after splice",myarray)

let myarray=[0,1,2,3,4,[5,6],[4,5,6,[1,2,3]]];
console.log(myarray.flat(5));