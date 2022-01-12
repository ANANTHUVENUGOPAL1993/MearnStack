var text="hai hello goodmorning"
//upper case 

var words=text.split(" ");
    for (let word of words){
        console.log(word.toUpperCase());
    }


    var upp_words=text.split(" ").map(word=>word.toUpperCase())
    console.log(upp_words);


    