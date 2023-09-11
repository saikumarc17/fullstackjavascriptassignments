const carmodel={
                make:" change paint color",
                model:"bm12#5",
                year:2023
                }

function getproperties(obj){
    console.log('properties of object are:- ');
    return Object.keys(obj).forEach((item)=>{
        console.log(item);
    }) ;
}

getproperties(carmodel)