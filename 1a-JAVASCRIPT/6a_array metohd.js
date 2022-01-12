var arr=[2,6,7,3,4,5,8,9,10]
var sum=arr.reduce((num1,num2)=>num1+num2)
console.log(sum);

var max=arr.reduce((n1,n2)=>n1>n2?n1:n2)

console.log(max);

var min=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(min);