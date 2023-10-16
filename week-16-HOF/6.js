const linkdinPattern=/^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]\/$/

function validateProfileURL(url){
    return linkdinPattern.test(url);
}

let url="https://www.linkedin.com/ini/chedde-saikumar-7511aa17a/";

if(validateProfileURL(url)){
    console.log(`${url} is a valid url`);
}else{
    console.log(`${url} is not a valid url`);
}
