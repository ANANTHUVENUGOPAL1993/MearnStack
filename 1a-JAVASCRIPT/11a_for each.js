var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",26000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
     [1003,"nikil","mrkt",24000,2000,2007]

]


///////external iteration -------- for loop
////////internal iteration-----------foreach , map , filter

//employees.forEach(emp=>console.log(emp[1]));

var fo=employees.forEach(n=>console.log(n[0]))

////////////map will form an array and foreach will display it as a number,that is the only difference

var ma=employees.map(n=>n[0])
console.log(ma);
