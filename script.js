let numBooks = 0;

const standard = [
    {
        title: "The Poet X",
        author: "Elizabeth Acevedo",
        genre: "Poetry",
        pages: 384,
        id: 1,
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1498766234i/33294200.jpg",
    },

    {
        title: "Shell",
        author: "Paula Rawsthorne",
        genre: "Sci-Fi",
        pages: 416,
        id: 2,
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1510494293i/36581512.jpg",
    },

    {
        title: "Six of Crows",
        author: "Leigh Bardugo",
        genre: "Fantasy",
        pages: 480,
        id: 3,
        cover: "https://m.media-amazon.com/images/I/91tK5sU9oOL._AC_UF1000,1000_QL80_.jpg",
    },

    {
        title: "Divergent",
        author: "Veronica Roth",
        genre: "Dystopian",
        pages: 487,
        cover: "https://thebookhousebroughtyferry.co.uk/cdn/shop/products/9780007420421.jpg?v=1710423586"
    },

    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian",
        pages: 374,
        cover: "https://m.media-amazon.com/images/I/61I24wOsn8L.jpg"
    },
];

const myLibrary = [];

function Book(title, author, genre, pages, id, cover){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.pages = pages;
    this.id = id;
    this.cover = cover;
}

function addBookToLibrary(title, author, genre, pages){
    const id = crypto.randomUUID();
    myLibrary.push(new Book(title, author, genre, pages, id));
}

standard.forEach(book => myLibrary.push(book));
myLibrary.forEach(book => displayBook(book));

function displayBook(book){
    const container = document.querySelector("main");
    const card = document.createElement("div");
    const display = document.createElement("span");
    const title = document.createElement("p");
    const author = document.createElement("p");

    card.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");

    card.style.background = `url(${book.cover})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "0 0";
    title.textContent = book.title;
    author.textContent = `By ${book.author}`;

    display.append(title);
    display.append(author);
    card.append(display);
    container.append(card);
}