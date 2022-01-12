var employees=[
    [1000,"ram","developer",21000,1990,2005],
    [1001,"ravi","developer",27000,2000,2003],
    [1002,"raju","ba",22000,1995,2005],
     [1003,"nikil","mrkt",23000,2000,2007]

]



// var max=employees.reduce((emp1,emp2)=>emp1[3]>emp2[3]?emp1:emp2)

// console.log(max[3]);


// var min=employees.reduce((emp1,emp2)=>emp1[3]<emp2[3]?emp1:emp2)
// console.log(min[3]);

var sr=employees.sort((n1,n2)=>n1[3]-n2[3])
console.log(sr)


