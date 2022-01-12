var dataset = [
    {
        district: "ekm", temperature: 5
    },
    {
        district: "alp", temperature: 3
    },
    {
        district: "alp", temperature: 3
    },
    {
        district: "ekm", temperature: 29
    },
    {
        district: "ekm", temperature: 30
    },
    {
        district: "alp", temperature: 45
    },
    {
        district: "alp", temperature: 0
    },
    {
        district: "ekm", temperature: 1
    }



]

weather = {};

for (let n of dataset) {
    let cutemp = n.temperature;
    let dis = n.district;
    if (dis in weather) {
        let temp = weather[dis];

        if (temp < cutemp) {
            weather[dis] = temp;
        }
        else{
            weather[dis]=cutemp
        }
    }
    else {
        weather[dis] = cutemp;
    }
}

console.log(weather);









