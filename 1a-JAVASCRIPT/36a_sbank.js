
    account_details = {
        1000: { account_number: 1000, balance: 3000, password: "userone", transaction: [] },
        1001: { account_number: 1001, balance: 2000, password: "usertwo", transaction: [] },
        1002: { account_number: 1002, balance: 4000, password: "userthree", transaction: [] },
        1003: { account_number: 1003, balance: 5000, password: "userfour", transaction: [] }

    }


    function validateAccoutNumber(accno){
        return accno in account_details ? true:false
    }

///console.log(account_details[1000].password);


function authenticateUser(accno,password){
    if(validateAccoutNumber(accno)){
        let pwd=account_details[accno].password
        if(password==pwd){

            return 1;
          ///  console.log("access granted");
        }
        else{
            return 0;
         ///   console.log("invalid passsword");
        }
    }

    else{
        return -1;
      ///  console.log("invalid account number");
    }
}


authenticateUser(1000,"usertwo")