var expenses=[20000,22000,17000,27000,30000,20000]
//print feb expence
// console.log(expenses[1]);
//update jan to 22000
// expenses[0]=22000
//update march with curexp-2000
// expenses[2]=2000;
// console.log(expenses);
//
// for(let i=0;i<expenses.length;i++){
//     console.log(expenses[i]);
// }

// console.log(expenses);


// for(let amount of expenses)
// {
//     console.log(amount);
// }

///print expenses greater than25000;

// for (let amount of expenses)
// {
//     if (amount>25000)
//     {
//         console.log(amount)
//     }
// }
// var sum=0;
// for(let amount of expenses)
// {
//  sum+=Number(amount)
// }
// console.log(sum);
// var high=expenses[0];
// for (let amount of expenses)
// if(amount>high)
// {
//     high=amount;
// }

// console.log(high);
var low=expenses[0];
for (let amount of expenses)
if(amount<low)
{
    low=amount;
}

console.log(low);
