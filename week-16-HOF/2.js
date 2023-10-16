function startcounter(count){
    const timer=setInterval(()=>{
        console.log(`generating random number in ${count} .....`);
        count--;

    if(count===0){
        clearInterval(timer);
        let num= Math.random()*100;
        console.log(Math.floor(num));
    }
},1000)
}

startcounter(3);


