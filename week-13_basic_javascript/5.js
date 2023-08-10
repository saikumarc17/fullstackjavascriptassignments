
let packageType="express";
switch(packageType){
    case "standard": console.log("might take 3-5 days");
    break;
    case "express": console.log("might take 1-2 days");
    break;
    case "overnight": console.log("would be delivered the next day") ;
    break;
    default : console.log("enter a valid Package type");
}