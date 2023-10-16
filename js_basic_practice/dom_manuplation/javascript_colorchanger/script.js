let buttondoc=document.getElementById("button");


const generateColor=()=>{
    let val="0123456789ABCDEF";
    let colCode="#";
    for(let i=0;i<6;i++){
        colCode=colCode+val[Math.floor(Math.random()*16)];
    }
    console.log(colCode);
    return colCode;
}

function changecolor(){
    document.body.style.backgroundColor=generateColor();
}

buttondoc.addEventListener("click",changecolor)
