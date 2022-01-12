var product={
    product_name:"fivestar",
    mrp:40,
    manufacture:"cabury",
    acal_qty:200
}

//localStorage.setItem(product.product_name,JSON.stringify(product))

// if("fivestar" in localStorage){
//     data=JSON.parse(localStorage.getItem("fivestar"))
// }
//console.log(data);



for( let i=0;i<localStorage.length;i++){
    let key1=localStorage.key(i)
    console.log(key1);
    let data=JSON.parse(localStorage.getItem(key1))
    console.log(data);
}