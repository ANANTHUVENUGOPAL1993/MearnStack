var arr1=[4,6,5,2,3]
var arr2=[]


var sum=5;

// for(i=0;i<arr1.length;i++)
// {
// if(arr1[i]>5)
// {
//     arr2[i]=arr1[i]+1;
// }

// else if (arr1[i]<5)
// {
//     arr2[i]=arr1[i]-1;
// }
// else{
//     arr2[i]=arr1[i];
// }
// };
// console.log(arr2);

for(let a of arr1){

 let b=a=>a>5?a+1:a-5
 arr2.push(b)


  

}
console.log(arr2);