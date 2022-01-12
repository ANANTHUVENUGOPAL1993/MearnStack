var arr=[10,11,12,13,14,15,16]
///step1=sort
arr.sort((num1,num2)=>num1-num2);
///low to zero and upper to last position
var  low=0;
var element=12;
var flag=0;

var upper=arr.length-1;
////checking if low<upper////
while(low<=upper){
    let mid=Math.floor((low+upper)/2)//0+4/2=2;
    //Case1
    if(element>arr[mid]){
        low=mid+1
    }
    else if(element<arr[mid]){
        upper=mid-1;
    }
    else if(element==arr[mid]){
        flag=1;
        break;
    }
}

flag==0?console.log("not found"):console.log("found");
