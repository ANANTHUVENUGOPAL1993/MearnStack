// var arr=[1,2,3,4]

// var sum=6;

//   if(arr[0]+arr[1]==sum)
//     {
// console.log(`(${arr[0]},${arr[1]})`)
//     }
//     else if(arr[0]+arr[2]==sum)
//     {
// console.log(`(${arr[0]},${arr[2]})`)
//     }

//  else if(arr[0]+arr[3]==sum)
//     {
// console.log(`(${arr[0]},${arr[3]})`)
//     }
//     else if(arr[1]+arr[2]==sum)
//     {
// console.log(`(${arr[1]},${arr[2]})`)
//     }
//     else if(arr[1]+arr[3]==sum)
//     {
// console.log(`(${arr[1]},${arr[3]})`)
//     }
//     else 
//     {
// console.log(`(${arr[2]},${arr[3]})`)
//     }


///////////////only sorted array////////////
var arr = [2, 3, 4, 5, 6, 7, 8]
var low = 0, upper = arr.length - 1;
var sum = 6;
while (low < upper) {
    let total = arr[low] + arr[upper]
    //case 1
    if (total == sum) {
        console.log(`${arr[low]},${arr[upper]}`);
        break;

    }
    //case 2
    else if (total > sum) {
        upper -= 1;
    }
    //case 3
    else if (total < sum) {
        low += 1;
    }
}