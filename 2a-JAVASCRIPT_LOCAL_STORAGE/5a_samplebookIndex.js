

function validateBookNmae(book_name) {
    return book_name in localStorage ? true : false

}

function check() {
    let book_name = bk_name.value
    console.log(book_name);
    if (book_name == undefined) {
        swal("pls enter book", "failed", "error")

    }
    else {

        let book_name = bk_name.value;
        let author_name = author.value;
        let price = amount.value
        let book = {

            /////or
            //////book_name,author_name,price 
            /////automatically value will be asigned if key and value are equal but if key wants to be different, then : should be used
            book_name: book_name,
            author_name: author_name,
            price: price
        }


        if (validateBookNmae(book_name)) {
            swal("already exit", "failed", "error")
        }
        else {
            localStorage.setItem(book_name, JSON.stringify(book))
            swal("book hasbeen added", "success", "correct")

        }

    }

}







function findBook() {
    let book_name = bk_src.value
    if (validateBookNmae(book_name)) {

        let data = JSON.parse(localStorage.getItem(book_name))
        console.log(data);

    }
    else {
        console.log("no data");
    }
}

function getAllBooks(){
    var books=[];
    for(let i=0;i<localStorage.length;i++){
        let key=localStorage.key(i)
        let book=JSON.parse(localStorage.getItem(key))
        book.push(book)
    }
    console.log(books);
}
window.onload=getAllBooks();




