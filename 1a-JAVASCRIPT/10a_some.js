var employees=[
    [1000,"ram","developer",25000,1990,2005],
    [1001,"ravi","developer",26000,2000,2003],
    [1002,"raju","ba",26000,1995,2005],
     [1003,"nikil","mrkt",24000,2000,2007]

]

///is threre amy empolyee developer;

var b=employees.some(n=>n[2]=="developer")
console.log(b);

////is there any employee experience grater than 15yersr

var ex=employees.some((n1,n2)=>n1[4]-n2[4]>15)
console.log(ex);


//////is there employee salary===50000

var sa=employees.some(n1=>n1[3]>5000)
console.log(sa);

//////////total salary of the employ

var to=employees.map((n)=>n[3])
var s=0;
for(let n of to){
     s=s+n;
}
console.log(s);

////////////reduce find the greatest
var re=employees.reduce((n1,n2)=>n1[3]>n2[3]?n1:n2)
console.log(re);


//////////////find the array with a condition filter


