var text="hello hai hello hai"

////print word count

///hello:2 hai:2


var words=text.split(" ")
console.log(words);

var wordcount={};

for (let word of words)
{
    if(word in wordcount){
        wordcount[word]+=1
    }
    else{
        wordcount[word]=1
    }
}
console.log(wordcount);

////////// one line method


for (let word of words)
{
    word in wordcount?wordcount[word]+=1:wordcount[word]=1
}
console.log(wordcount);

///////////////map method

text.split(" ").map(word=>word in wordcount?wordcount[word]+=1:wordcount[word]=1)