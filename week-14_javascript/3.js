const students=[
    {name:"Mithum",marks:95},
    {name:"Prabir",marks:75},
    {name:"alka",marks:92},
    {name:"shivam",marks:70},
    {name:"Farman",marks:99}
]
// "Congratulations [Student Name]! You have cleared the exam1"

function checkresults(studentname){
    for (let std of students) {
        if(std.name===studentname){
          return  std.marks>90?console.log(`Congratulations ${studentname}! You have cleared the exam`):console.log(`${studentname} ,  You have not cleared the exam`)
        }
    }
    console.log("user not found");

}


checkresults("xyz")
checkresults("Prabir")
checkresults("alka")
checkresults("shivam")
checkresults("Farman")