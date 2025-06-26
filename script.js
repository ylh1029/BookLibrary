const myLibrary = [];

function Book(title, author, genre, pages, id){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.id = id;
}

function addBookToLibrary(title, author, genre, pages){
    const id = crypto.randomUUID();
    myLibrary.push(new Book(title, author, genre, pages, id));
}

while(true){
    
}
