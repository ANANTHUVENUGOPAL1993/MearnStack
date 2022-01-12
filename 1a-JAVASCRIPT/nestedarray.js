// var employees=[
//     [1000,"ram","developer",25000],
//     [1001,"ravi","developer",26000],
//     [1002,"raju","ba",26000],
//      [1003,"nikil","mrkt",24000]

// ]
// //print empoly slary>25k
// for(let emp of employees){
//     if(emp[3]>25000){
//         console.log(emp);
//     }

// }


var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",26000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
     [1003,"nikil","mrkt",24000,2000,2007]

]
//print empoly name
for(let emp of employees){
    console.log(emp[1]);
}

///print develop name
for (let emp of employees)
{
    if(emp[2]=="developer")
    {
        console.log(emp[1]);
    }
}
