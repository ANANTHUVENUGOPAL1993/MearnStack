var book={
    book_name:"mp",
    author:"venugopal",
    price:120,
    avl_copy:2000


}


//localStorage.setItem(book.book_name,JSON.stringify(book))

//print all book name

// for( let i=0;i<localStorage.length;i++){
//     let key1=localStorage.key(i)
//     let book1=JSON.parse(localStorage.getItem(key1))
//     console.log(book1.book_name);
// }

var b_name="mp"

if(b_name in localStorage){
    let book=JSON.parse(localStorage.getItem(b_name))
    console.log(book);
}

