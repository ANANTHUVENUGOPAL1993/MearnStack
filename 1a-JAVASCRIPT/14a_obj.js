//////first recusive character
//////ABACC
//////BBACC
var pattern="ABACC"
var finder={};

for (let char of pattern){
    if(char in finder){
        console.log(char);
        break;

    }
    else{
        finder[char]=1;
    }
}