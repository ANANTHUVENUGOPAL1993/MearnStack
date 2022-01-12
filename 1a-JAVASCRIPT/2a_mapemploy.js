var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
    [1003,"nikil","mrkt",24000,2000,2007]

]

///pritn employee names

// var emp_names=employees.map(emp=>emp[1])

// console.log(emp_names);

///print experience


var exp=employees.map(ep=>[(ep[5]-ep[4]),ep[1]])

console.log(exp);


// var developers_gr_25k=employees.filter(emp=>(emp[2]=="developer")&(emp[3]>25000))
// console.log(developers_gr_25k);