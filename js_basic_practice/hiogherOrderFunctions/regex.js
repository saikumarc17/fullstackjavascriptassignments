let pattern='tests';
let regexone=new RegExp(pattern);
let flag='gi'

const stringcheck="test is a test used to test for testing to test"
const result=regexone.test(stringcheck)
console.log(result);

let regexpattern=/test/gi;
const anotherres=stringcheck.match(regexpattern);
console.log(anotherres);