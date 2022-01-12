class Bank{
    createAccount(acno,p_name,ac_type,balance){
        this.acno=acno;
        this.ac_type=ac_type;
        this.balance=balance; 
        this.name=p_name
    }

    deposit(amount){
        this.balance+=amount;
        console.log(`your account no ${this.acno} is credited with ${amount} your available balance is ${this.balance}`);
    }


    withdraw(amount){

        if(amount>this.balance)
        {
console.log("insuffient");
        }
       else{
this.balance-=amount;
console.log(`your account no ${this.acno} is debited with ${amount} your available balance is ${this.balance}`);

       }
    }

    balanceEnquiry(){
        console.log("your balancew="+this.balance);
    }
}

var obj = new Bank

obj.createAccount(1000,"tisa","saving",2000)
obj.deposit(5000);

obj.withdraw(5000)