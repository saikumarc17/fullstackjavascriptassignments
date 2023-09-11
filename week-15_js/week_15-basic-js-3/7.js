const mapval=new Map();

// adding function
function addingMap(username,age,email){
   if(mapval.has(username)){
      console.log(`${username} user already exists`);
   }else{
      console.log(`adding user ${username}`);
      mapval.set(username,{name:username,age:age,email:email});

   }
}

// updating function
function updatemap(studentName,property,updatevalue){
   if(mapval.has(studentName)){
      console.log(`updating user details => ${studentName}`);
     mapval.get(studentName)[property]=updatevalue;
     console.log(mapval);
   }else{
      console.log("enter valid student name");
   }
}

// deleting function
function deletemapvalue(studentName){
   if(mapval.has(studentName)){
      console.log(`deleting user => ${studentName}`);
      mapval.delete(studentName);
      console.log(mapval);
    }else{
       console.log("enter valid student name");
    }
}

addingMap("hello",20,"xyz@gmail.com");
addingMap("hello1",20,"xyz@gmail.com");
addingMap("hello1",20,"xyz@gmail.com");
addingMap("Alice", 31, "newemail@example.com");

updatemap("hello","email","hello@gmail.com");
deletemapvalue("hello1");
