const library = [];

function addBookToLibrary () {
    library.push(harry)
}

function Book (title, author, pages, read) {
    this.title = title,
    this.author = title,
    this.pages = pages,
    this.read = read
};

let harry = new Book ('Harry Porter', 'Harry', 295, 'not read')

function displayBook () {
    for (let book in library) {

    }
}

addBookToLibrary()
console.log(library);