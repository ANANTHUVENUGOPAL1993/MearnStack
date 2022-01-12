//thread
//multitasking - multiple task at a time-switching btwween diff task
//two type- process based and thread based
//multi thread-different thread is used t1,t2,t3 etc
//javascript is single threaded 

console.log("line1");
console.log("line2");
console.log("line3");

setTimeout(()=>{
    console.log("line4");
},2000)
setTimeout(()=>{
    console.log("line5");
},1000)

console.log("line6");

/////call stack , mh(memmory heap), call back q, event loop

//when a functoin is called it goes to call stack

//CALL STACK----MEMMORY HEEP---- WEB API  


//CALL BACK QUEUE -------------//EVENT LOOP

/////javascript - synchronous and single thread
///but behave as a asynchrous  due to call stack,mh,call, web api etc 



