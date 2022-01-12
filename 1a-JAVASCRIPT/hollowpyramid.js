



let n=4
let m=7
let string=""

for (let row = 1; row <= n; row++) {
   
    for (let col = 1; col <= m; col++) {
        if (row + col == 5 || col - row == 3 || row == 4) {
            string+="*"
        }
        else {
            string+=" "
        }
       
    }
  
    string += "\n";
}
console.log(string);
