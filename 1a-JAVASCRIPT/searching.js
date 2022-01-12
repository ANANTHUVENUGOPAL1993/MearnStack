///////searching

var  arr=[10,11,12,13,14,15,16]

var element=25;
var flag=0;
var count=0;

for(let num of arr){
    if(num==element)
    {
       flag=1;
       break;
    }
   count++
}
console.log(flag==0?"element not found":"element found");
console.log(count);