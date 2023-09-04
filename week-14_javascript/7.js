function generateotp(){
  return Math.floor(Math.random()*9999)
}
console.log(`Here is your otp: ${generateotp()}`);
