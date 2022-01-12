function smartMax(...args){
    return args.reduce((n1,n2)=>n1>n2?n1:n2)
}
console.log(smartMax(10,20));