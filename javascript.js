const library = [];

function addBookToLibrary () {
    library.push(harry)
    library.push(winnie)
}

function Book (title, author, pages, read) {
    this.title = title,
    this.author = title,
    this.pages = pages,
    this.read = read
};

let harry = new Book ('Harry Porter', 'Harry', 295, 'not read')
let winnie = new Book ('Winnie the Poo', 'Nick', 100, 'read')
addBookToLibrary()

function displayBook () {
    for (let book of library) {
        console.log(book.title);
        console.log(book.author);
        console.log(book.pages);
        console.log(book.read);
    }
}

displayBook()