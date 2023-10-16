// const Pattern = /^(https?:\/\/)[a-zA-Z0-9\-._~:/?#[\]@!$&'()*+,;=%]+[.][a-zA-Z]+$/;
const pattern=/^(https?:\/\/)[a-zA_Z0-9\-._~:/?#[\]@!$&'()"+,;=%]+[.][a-zA_Z]+$/;

function validateURL(url){
   return pattern.test(url);
}

url="https://google.com"
if(validateURL(url)){
    console.log(`${url} is a valid url`);
}else{
    console.log(`${url} is not a valid url`);
}

