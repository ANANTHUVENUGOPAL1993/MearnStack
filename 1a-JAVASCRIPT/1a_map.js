var arr=[2,6,7,3,4]

var mapout= arr.map( num=>num<5?num-1:num>5?num+1:num)
console.log(mapout);

let ab=[];

for (a of arr){
    let b=num=>num<5?num-1:num>5?num+1:num
    ab.push(b(a))

}

console.log(ab);