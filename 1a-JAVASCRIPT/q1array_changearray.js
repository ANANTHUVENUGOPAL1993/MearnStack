var arr1=[4,3,5,6,7,8,9]
var arr2=[];
// var sum=arr1[0]+arr1[1]+arr1[2];


// for(let i=0;i<arr1.length;i++)
// {
//     arr2[i]=sum-arr1[i]
// }
// console.log(arr2);

let sum=0
for(let a of arr1){
    sum=sum+a
}
console.log(sum);
for(let a of arr1){
arr2.push(sum-a)
}
console.log(arr2);




