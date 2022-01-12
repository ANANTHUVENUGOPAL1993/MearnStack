var student={
    name:"ajay",
    total:140,
    course:"django"
}

for(let k in student){
    //console.log(k);
    console.log(student[k]);

}



if("total" in student){

console.log(student["total"])
}
else{
    console.log(student["name"]);
}
