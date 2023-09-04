function uniquecharcheck(name){
   let charset=new Set();
    for(let char of name){
        if(charset.has(char)){
            console.log("The input string contains duplicates.");
            return false;
        }else{
            charset.add(char)
        }
    }
    console.log("The input string contains only unique characters.");
    return true;
}

uniquecharcheck('helllo');
uniquecharcheck('anish');





