var products=[
    ["001","complan",275,50],
    ["002","boost",255,20],
    ["003","horlicks",225,5],
    ["004","bournvita",230,0],
    ["005","pediasure",220,10],
]

// print product names

// print avaialable product name

// print out of stock product details


// list all products whose price > 250

// low cost product

// is there any item available under 200


var p=products.filter(n=>n[2]<250)

if(p[2]==true){
    console.log("yes");
}
else{
    console.log("no");
}

