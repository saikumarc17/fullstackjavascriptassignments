let userlist=["hari","giri","mithum","krishna","naresh","suresh"];
let usercheck="mithum"

if(userlist.includes(usercheck)){
    console.log(` yes , ${usercheck} is a valid user`);
}else{
    console.log(` no , ${usercheck} is not a valid user`);
}