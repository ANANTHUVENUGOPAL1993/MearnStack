/////crt an object employee with id,1000,emp_name nikhil, designation developer, slary 20000
/////q1:pritn employee name
/////q2 : print empl9ueee designation

////q3 updateemployee salary as 30000;'
//q4 add new keyvalue pairv email niki@gmail.com



var employee={
    id:1000,
    name:"nikhil",
    desig:"developer",
    salary:20000
}

console.log(employee.name);
console.log(employee.desig);
employee.salary=30000;
console.log(employee);
employee.email="niki@gmail.com"
console.log(employee);


//////exp exit
console.log("exp" in employee);



//////exp if exit exp+1 else exp:1


if("exp" in employee){
    employee.exp+=1
}
else{
    employee.exp=1
}

console.log(employee);