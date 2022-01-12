var arr=[10,9,11,8,12];





////////first method////////////////


// function sortNumbers(obj1,obj2){
//     if(obj1>obj2){
//         return -1//obj1,obj2
//     }
//     else{
//         return 1;
//     }
// }



let u=arr.sort ((num1,num2)=>num2-num1);/////////ascending order
console.log(u);

let v=arr.sort ((num1,num2)=>num1-num2);/////////descending order 
console.log(v);

