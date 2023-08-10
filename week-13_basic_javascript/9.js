const dataarray=[1,2,3,4,5,"hello",99,"book"];
for(let i=0;i<dataarray.length;i++){
    if(typeof(dataarray[i])==="string"){
        console.log("found the first string ==>",dataarray[i]);
        break;
    }
}