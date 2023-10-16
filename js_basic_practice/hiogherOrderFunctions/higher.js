// const powertwo=(n)=>{
//     return n**2
// }

// passing function as an arguments
// function powerthree(powertwo,n){
//     return powertwo(n)*n
// }

// console.log(powerthree(powertwo,2));

// Returning as an function
// function test(){
//     return ()=>{
//         console.log("hello from test");
//     }
// }

// assigning function to the variable
// let guess=test();
// console.log(guess);

// guess()


// returning rested functions 

const higherorder=(a)=>{
    const onefun=b=>{
        const twofun=c=>{
            return a+b+c
        }
        return twofun
    }
    return onefun
}

console.log(higherorder(2)(3)(4));