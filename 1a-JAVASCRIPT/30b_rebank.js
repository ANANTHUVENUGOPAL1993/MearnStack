

class SBank {
    constructor(name, place, balance) {
        this.name = name;
        this.place = place;
        this.balance = balance;
    }


    addLName(n1){
        this.name=this.name+" "+n1
        console.log(this.name);

    }


    Deposit(amount){

    }



}

var obj = new SBank("ananthu","ekm",1000);

// obj.addLName("venugopal")



var obj1= new SBank("Arathy","EKM",1000)


obj1.addLName("Venugopal");

console.log(obj1.name);
var obj2="Arathy"
console.log(obj2[1]);
