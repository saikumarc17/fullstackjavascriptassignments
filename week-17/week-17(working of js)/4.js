console.log(var1);  // o/p -> from var , due to hoisting
console.log(var2);  // o/p -> Cannot access 'var2' before initialization due to reference error
console.log(var3);  // o/p -> Cannot access 'var2' before initialization due to reference error

var var1="from var";
let var2="from let";
const var3="from const";

console.log(var1);  // o/p -> from var 
console.log(var2);  // o/p -> from let
console.log(var3);  // o/p -> from const
