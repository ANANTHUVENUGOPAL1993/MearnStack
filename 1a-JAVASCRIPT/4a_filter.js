var arr=[2,6,7,3,4,8,9,10,11]
var evens=arr.filter(num=>num%2==0)
console.log(evens);

var grt=arr.filter(num=>num>5)
console.log(grt);

var grtsqr=arr.filter(num=>num>5).map(nup=>nup**2)
console.log(grtsqr);

var grtsqrs=arr.filter(num=>(num>5&num<10)).map(nup=>nup**2)
console.log(grtsqrs);

var grtm=arr.filter(n=>n/9==1).map(n=>n**2)
console.log(grtm);