

function validateBookNmae(book_name) {
    return book_name in localStorage ? true : false

}

function check() {


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









function findBook() {
    let html_data = ``
    let book_name = bk_src.value
    if (validateBookNmae(book_name)) {

        let data = JSON.parse(localStorage.getItem(book_name))
        html_data = `<p>Book name ${data.book_name}</p>
        <p>Author is${data.author_name}</p>
        <p>price is ${data.price}</p> `
        document.querySelector("#result1").innerHTML = html_data

    }
    else {
        console.log("no data");
    }
}

function getAllBooks() {
    var books = [];
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let book = JSON.parse(localStorage.getItem(key))
        books.push(book)
    }

    ////////// console.log(books);
    displayValues(books);
}

////////no need for function bracket/////////////////////////
window.onload = getAllBooks;
function displayValues(books) {

    let html_data = ``
    for (let book of books) {
        html_data += `<tr>
        <td>
        ${book.book_name}</td>
        <td>
        ${book.author_name}</td>
        <td>
        ${book.price}</td></tr>`


    }
    document.querySelector("#result").innerHTML = html_data

}