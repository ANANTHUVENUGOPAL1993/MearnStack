// var arr=[10,20,30,40]
// var arr1=[20,21,30,31]

// for(let num1 of arr){
//     for(let num2 of arr1){
//         if(num1==num2){
//             console.log(num1);
//         }
//             count++;
//     }
// }
// console.log(count);


var arr1=[20,10,21,30,11,13,13]
var arr2=[11,20,22,30,13,13]

arr1.sort((num1,num2)=>num1-num2);
arr2.sort((num1,num2)=>num1-num2);
var p1=0,p2=0;
console.log(arr1);
while(p1<arr1.length&&p2<arr2.length){
    if(arr1[p1]==arr2[p2]){
        console.log(arr1[p1]);
        p1++
        p2++
    }
    else if(arr1[p1]<arr2[p2]){
        p1++
    }
    else if(arr1[p1]>arr2[p2]){
        p2++
    }
}