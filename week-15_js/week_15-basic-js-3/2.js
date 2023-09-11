const studentDetails={
    name:"john",
    age:18,
    grade:"A"
}

function updategrade(grade){
    studentDetails.grade=grade;
}

updategrade("B");
console.log(studentDetails);