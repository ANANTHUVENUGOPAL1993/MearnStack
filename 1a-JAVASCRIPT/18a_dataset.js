var dataset=[
    {
        district:"palakad",temperature:30
    },
    {
        district:"tvm",temperature:31
    },
    {
        district:"palakad",temperature:31
    },
    {
        district:"tvm",temperature:29
    }
]

//////weather={"palakad":31,"tvm":31}

weather={}
for(let data of dataset){
    let placename=data.district;
    let cutemp=data.temperature;
    if(placename in weather){
        let oldtemp=weather[placename];
        if(cutemp>oldtemp){
            weather[placename]=cutemp
        }

    }
    else{
        weather[placename]=cutemp
    }
}
console.log(weather);