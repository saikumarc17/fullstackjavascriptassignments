function totalCartValue(){
    let cartValue=0;
    for(let i=0;i<arguments.length;i++){
        cartValue=cartValue+arguments[i];
    }
    console.log(`The total cart value is ${cartValue}`);
}

totalCartValue(1,2,3,4);