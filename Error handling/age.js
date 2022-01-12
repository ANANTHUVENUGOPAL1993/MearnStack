// to make customised throw

// var age=19;

// try{
//     if(age<18){
//        throw new Error("invalid age");
//     }
// }

// catch(err){
//     console.log(err.message);
// }

// console.log("here");

var age="ss";

// try{

//     var n= console.log(isNaN(age));
//     console.log(n);
//     if(n){
//        throw new Error("invalid age");
//     }
// }

// catch(err){
//     console.log(err.message);
// }
age="17n"

try{
    if(isNaN(age)){
        throw new Error("invalid age")
    }
    else{
        console.log("proceed");
    }
}
catch(err){
    console.log(err.message);

}
