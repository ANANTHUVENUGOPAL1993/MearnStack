var m=49,n=49,res;
if(m>n){
    for(let i=0;i<=m;i++)
    if(m%i==0&&n%i===0)
    {
        res=i
    }
    console.log(res)
}

else if(m<n){
    for(let i=0;i<=n;i++)
    if(m%i==0&&n%i===0)
    {
        res=i
    }
    console.log(res)
}
else if(m==n) {
    console.log(m)
}
else{
    console.log(1)
}

