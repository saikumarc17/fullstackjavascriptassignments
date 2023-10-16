let arr=[1,2,3,4,5,6];

// arr.forEach((ele,index,ar)=>{
//     console.log(ele,index,ar);
// })

// arr.map((ele)=>{
//     console.log(ele,"from map");
// })

// const filter=arr.filter((h)=>{
//     return h%2===0;
// })
// console.log(filter); 

const result=arr.reduce((prev,cur)=>{
   return prev+cur
},0);
console.log(result);