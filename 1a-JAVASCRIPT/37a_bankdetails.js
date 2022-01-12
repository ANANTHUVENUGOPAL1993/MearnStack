class Bank {

    session = {}
    account_details = {
        1000: { account_number: 1000, balance: 3000, password: "userone", transaction: [] },
        1001: { account_number: 1001, balance: 2000, password: "usertwo", transaction: [] },
        1002: { account_number: 1002, balance: 4000, password: "userthree", transaction: [] },
        1003: { account_number: 1003, balance: 5000, password: "userfour", transaction: [] }

    }


    validateAccountNumber(accno) {
        return accno in this.account_details ? true : false
    }

    authenticate(acno, password) {
        if (this.validateAccountNumber(acno)) {
            let pwd = this.account_details[acno].password

            if (pwd == password) {
                return 1
            }

            else {
                return 0 ////invalid password
            }
        }
        else {
            return -1////invalid accoutn number
        }


    }

    login(acno, password) {

        let user = this.authenticate(acno, password);

        if (user == 1) {
            console.log("Access Granted");

            this.session["user"] = acno//session ={"user":1000}
            /////// console.log(this.session);
        }
        else {
            console.log("Access Denied");
        }

    }



    getBalance() {
        if ("user" in this.session) {

            let logged_user = this.session["user"]
            let aval_balance = this.account_details[logged_user].balance
            return aval_balance;


        }

        else {
            return 2
        }

    }
    balanceEnquiry() {


        let bal = this.getBalance()

        if (bal == 2) {
            console.log("you must login first");
        }
        else {
            console.log(bal);
        }


        //return balance of authenticated user

        // if ("user" in this.session) {

        //     let logged_user=this.session["user"]
        //     let aval_balance=this.account_details[logged_user].balance
        //     console.log(aval_balance);


        // }

        // else {
        //         console.log("you must login first");
        // }
    }


    logOut() {

        if ("user" in this.session) {
            delete this.session["user"]
        }

        else {
            console.log("you must login first");
        }




    }


    fundTransfer(amount, to_acno, confirm_acno) {

        //////check user is authenticated or not
        //////check acno and confirmacono
        //////validate acno
        //////sufficient balance check

        if ("user" in this.session) {

            if (to_acno == confirm_acno) {
                if (this.validateAccountNumber(to_acno)) {

                    // let logged_user_acno=this.session["user"]
                    let aval_bal = this.getBalance()

                    if (amount > aval_bal) {
                        console.log("insufficent amount");
                    }

                    else {
                        //////main
                        console.log("amount transfered");
                    }



                }
                else {
                    console.log("account no not exit to transfer the amount");
                }
            }

            else{
                console.log("account no mismatched");
            }

        }
        else {
            console.log("you must login first");
        }



    }

}


var obj = new Bank()
// console.log(obj.authenticate(1000, "usertwo"));

 obj.login(1000, "userone")
obj.balanceEnquiry()
obj.logOut()
obj.balanceEnquiry()
obj.fundTransfer()
obj.login(1000, "userone")
obj.fundTransfer(10000,1000,1000)











