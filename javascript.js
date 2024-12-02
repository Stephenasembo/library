const output = document.querySelector('output');
const addNewBook = document.querySelector('#new-book');
const dialog = document.querySelector('dialog');
const confirmBtn = document.querySelector('#confirmBtn');
const cancelBtn = document.querySelector('#cancelBtn');

const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');

const library = [];

function addBookToLibrary () {
    library.push(harry)
    library.push(winnie)
}

function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

let harry = new Book ('Harry Porter', 'Harry', 295, 'not read')
let winnie = new Book ('Winnie the Poo', 'Nick', 100, 'read')
addBookToLibrary()

function displayBook () {
    for (let book of library) {
        const card = document.createElement('div');

        const titlepara = document.createElement('p');
        titlepara.innerText = book.title;
        card.appendChild(titlepara);

        const authorpara = document.createElement('p');
        authorpara.innerText = book.author;
        card.appendChild(authorpara);

        const pagespara = document.createElement('p');
        pagespara.innerText = book.pages;
        card.appendChild(pagespara);

        const readpara = document.createElement('p');
        readpara.innerText = book.read;
        card.appendChild(readpara);

        output.appendChild(card);
    }
}

displayBook();

addNewBook.addEventListener('click', () => dialog.showModal());

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close()
    console.log(bookTitle.value)
    console.log(bookAuthor.value)
    console.log(bookPages.value)

    const readStatus = document.querySelector('input[type = "radio"]:checked')
    console.log(readStatus.value);
});

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
});