var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",26000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
     [1003,"nikil","mrkt",24000,2000,2007]

]
///////name and experiewnxw of the employee;

for( let emp of employees){
    console.log(emp[1],emp[5]-emp[4]);
}

//////details of employee slaary gresater than 25k

for( let emp of employees){
    if(emp[3]>25000)
    console.log(emp);
}
////////////highest paid employeeee

for( let emp of employees){
   
    for(let emp1 of employees){
        
    }
   
}

///////////////highewsr slay
var max=employees.reduce((emp1,emp2)=>emp1[3]>emp1[2]?emp1[3]:emp2[3])