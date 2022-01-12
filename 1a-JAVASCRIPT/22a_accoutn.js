var accounts = [
    {
      acno: 1000, ac_type: "savings", balance: 5000, transactions: [
        { to: 1001, amount: 500, note: "ebill", method: "g-pay" },
        { to: 1002, amount: 600, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
      ]
    },
    {
      acno: 1001, ac_type: "savings", balance: 6000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1002, ac_type: "current", balance: 8000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1001, amount: 5000, note: "geto", method: "neft" },
        { to: 1003, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
    {
      acno: 1003, ac_type: "current", balance: 16000, transactions: [
        { to: 1000, amount: 1000, note: "emi", method: "phone-pay" },
        { to: 1002, amount: 500, note: "geto", method: "neft" },
        { to: 1001, amount: 100, note: "erchrge", method: "phone-pay" }
  
      ]
    },
  
  ]


  ////////print accoutn no only


  var acount_no=accounts.map(acc=>acc["acno"])
  console.log(acount_no);

  accounts.forEach(account=>console.log(account.acno))

  /////chk 1005 exit or not

  var is_exist=accounts.some(account=>account.acno==1005)
  console.log(is_exist);


  ////////print balance 1002

  var balance=accounts.filter(account=>account.acno==1002).map(data=>data.balance)
  console.log(balance);


  var user_data=accounts.find(account=>account.acno==1002)

  console.log(user_data.balance);



  ////////pritn tranctions 1001




  var trans=accounts.find(account=>account.acno==1001)
  console.log(trans.transactions)

  /////////pritn transcation 1001:amoutn>500

  var usertrans1=accounts.find(account=>account.acno==1001)

  usertrans1.transactions.filter(trans=>trans.amount>500).forEach(tran=>console.log(tran))

  ///////////using single line
  let trans_gr_500=accounts.find(account=>account.acno==1000).transactions.filter(trans=>trans.amount>500)

console.log(trans_gr_500);

    



///////payment history of 1000


var pyht=accounts.find(account=>account.acno==1000).balance
console.log("accoutn balance",pyht);


/////////payment history credit

var pcred=accounts.map(account=>account.transactions).flat().filter(trans=>trans.to==1000)
console.log(pcred);




///////payment history of 1000 debit

var pdebit=accounts.find(account=>account.acno==1000).transactions
console.log(pdebit);


/////////payment history

var phistory=[];
pdebit.map(trans=>phistory.push(trans))

pcred.map(trans=>phistory.push(trans))

console.log(phistory);





////////////spread operator for single line

///////three dot is given for spread operator.

phistory1=[]

phistory1=[...pdebit,...pcred]

console.log(phistory1);



