// Defining books class
let books = [];
class book {
    constructor(name, author, year) {
        this.bookName = name;
        this.bookAuthor = author;
        this.bookYear = year;
    }

    addBook() {

    }

    removeBook() {

    }

    editBook() {

    }
}

$(".submit").click(function(e){
    e.preventDefault();
    let b = new book($(".inBookName").val(), $(".inBookAuth").val(), $(".inBookDate").val());
    books.push(b);
    b.addBook();
});