const output = document.querySelector('output');
const addNewBook = document.querySelector('#new-book');
const dialog = document.querySelector('dialog');
const form = document.querySelector('form');
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

class Book {
    constructor(title, author, pages, read){
        this.title = title,
        this.author = author,
        this.pages = pages,
        this.read = read
    }
}

let harry = new Book ('Harry Porter And The Philospher\'s Stone', 'J K Rowling', 223, 'Not read');
let winnie = new Book ('Winnie the Pooh', 'A. A Milne', 176, 'Finished reading');
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
    // event.preventDefault();
    let error = formError();
    // dialog.close()
    if (!error){
        const newTitle = bookTitle.value;
        const newAuthor = bookAuthor.value;
        const newPages = bookPages.value;
        const readStatus = document.querySelector('input[type = "radio"]:checked');
        let newRead;

        if (readStatus) {
            if (readStatus.value == 'Yes')
                {
                    newRead = 'Finished reading';
                }
            else {
                newRead = 'Not read';
            }
        };
    }

    // let error = inputError(newTitle, newAuthor, newPages, readStatus);

    /*
    if (!error) {
        const newBook = new Book (newTitle, newAuthor, newPages, newRead);
        addBookToLibrary(newBook);
        displayNewBook(newBook);    
        resetForm();
    }
    */
});

cancelBtn.addEventListener('click', (event) => {
    event.preventDefault();
    dialog.close();
    resetForm();
});

function displayNewBook (book) {
    const card = document.createElement('div');

    const titlepara = document.createElement('p');
    titlepara.innerText = `Title: ${book.title}`;
    card.appendChild(titlepara);

    const authorpara = document.createElement('p');
    authorpara.innerText = `Author: ${book.author}`;
    card.appendChild(authorpara);

    const pagespara = document.createElement('p');
    pagespara.innerText = `Number of pages: ${book.pages} pages`;
    card.appendChild(pagespara);

    const readpara = document.createElement('p');
    let readStatus = book.read;
    readpara.innerText = `Reading status: ${readStatus}`;
    card.appendChild(readpara);

    const btnPara = document.createElement('p');
    const readingStatus = document.createElement('button');
    readingStatus.textContent = 'Change Reading Status';
    readingStatus.addEventListener('click', () => {
        if (readStatus == 'Finished reading')
            {
                readStatus = 'Not read';
                readpara.innerText = `Reading status: ${readStatus}`;
            }
        else if (readStatus == 'Not read')
            {
                readStatus = 'Finished reading';
                readpara.innerText = `Reading status: ${readStatus}`;
            }    
    });
    
    btnPara.appendChild(readingStatus)
    deleteBook(card, btnPara);

    card.appendChild(btnPara);

    output.appendChild(card);
}

function resetForm () {
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    yesRadio.checked = false;
    noRadio.checked = false;
}

function inputError (title, author, pages, readStatus) {
    if (!title) {
        // alert ('Cannot create book. Title field is empty');
        return true;
    }
    if (!author) {
        alert ('Cannot create book. Author field is empty');
        return true;
    }
    if (!pages) {
        alert ('Cannot create book. Pages field is empty');
        return true;
    }
    if (!readStatus) {
        alert ('Cannot create book. Reading status is not provided');
        return true;
    }

    return false;
}

function deleteBook (card, btnPara) {
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Delete Book';

    deleteBtn.addEventListener('click', () => {
        output.removeChild(card);
    })
    btnPara.appendChild(deleteBtn);
}

function formError(){
    if (bookTitle.validity.valueMissing) {
        bookTitle.setCustomValidity('Please input the book title')
        return true;
    } else {
        bookTitle.setCustomValidity('');
    }
    if (bookAuthor.validity.valueMissing) {
        bookAuthor.setCustomValidity('Please input the author of the book');
        return true;
    } else {
        bookAuthor.setCustomValidity('');
    }
    if (bookPages.validity.valueMissing) {
        bookPages.setCustomValidity('Please input the number of pages of the book')
        return true;
    } else {
        bookPages.setCustomValidity('');
    }
    let checkStatus = document.querySelector('input[type = "radio"]:checked');
    if (!checkStatus){
        yesRadio.setCustomValidity('Please select your reading status of the book')
    } else {
        yesRadio.setCustomValidity('');
    }
    return false
}