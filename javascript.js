const output = document.querySelector('output');
const addNewBook = document.querySelector('#new-book');
const dialog = document.querySelector('dialog');
const confirmBtn = document.querySelector('#confirmBtn');
const cancelBtn = document.querySelector('#cancelBtn');

const bookTitle = document.querySelector('#bookTitle');
const bookAuthor = document.querySelector('#bookAuthor');
const bookPages = document.querySelector('#bookPages');

const yesRadio = document.querySelector('#yes');
const noRadio = document.querySelector('#no');

const library = [];

function addBookToLibrary (book) {
    library.push(book);
}

function Book (title, author, pages, read) {
    this.title = title,
    this.author = author,
    this.pages = pages,
    this.read = read
};

let harry = new Book ('Harry Porter', 'Harry', 295, 'not read');
let winnie = new Book ('Winnie the Poo', 'Nick', 100, 'read');
addBookToLibrary(harry);
addBookToLibrary(winnie);

function displayLibrary () {
    for (let book of library) {
        displayNewBook(book);
    }
}

displayLibrary();

addNewBook.addEventListener('click', () => dialog.showModal());

confirmBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close()
    const newTitle = bookTitle.value;
    const newAuthor = bookAuthor.value;
    const newPages = bookPages.value;
    const readStatus = document.querySelector('input[type = "radio"]:checked');
    let newRead;

    if (readStatus) {
        newRead = readStatus.value;
    };

    readStatus.checked = false;

    const newBook = new Book (newTitle, newAuthor, newPages, newRead);
    addBookToLibrary(newBook);
    displayNewBook(newBook);
});

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    yesRadio.checked = false;
    noRadio.checked = false;
});

function displayNewBook (book) {
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