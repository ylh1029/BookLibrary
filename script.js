const standard = [
    {
        title: "The Poet X",
        author: "Elizabeth Acevedo",
        genre: "Poetry",
        pages: 384,
        id: crypto.randomUUID(),
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1498766234i/33294200.jpg",
        description: `
            Xiomara Batista feels unheard and unable to hide in her Harlem neighborhood- but secretly, she pours her dreams and 
            frustrationsonto the pages of her notebook like prayers. When she is invited to join her school's slam poetry club, 
            Xiomara doesn't know how she could ever attend without her religious mami find out. But even so, in the face of a 
            world that may not want to hear her, Xiomara refuses to be silent.`,
    },

    {
        title: "Shell",
        author: "Paula Rawsthorne",
        genre: "Sci-Fi",
        pages: 416,
        id: crypto.randomUUID(),
        cover: "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1510494293i/36581512.jpg",
        description: `
            What if you thought you had died, only to wake up in someone else's body? When Lucy, a teen diagnosed with terminal 
            cancer wakes up cancer-free, it should be a dream come true. But faced with a life she didn't choose and trapped in
            a new body, Lucy must face the bigget question of all... How far would you go to save the one you love?`,
    },

    {
        title: "Six of Crows",
        author: "Leigh Bardugo",
        genre: "Fantasy",
        pages: 480,
        id: crypto.randomUUID(),
        cover: "https://m.media-amazon.com/images/I/91tK5sU9oOL._AC_UF1000,1000_QL80_.jpg",
        description: `
            The Ice Court had been built to withstand an onslaught of armies, assassins, Grisha, and spies. When Inej said as much
            to Kaz, he simply replied. "But it hasn't been built to keep us out". His confidence unnerved her. "What makes you think 
            we can do this? There will be other teams out there, trained soldiers and spies, people with years of experience." "This 
            isn't a job for trained soldiers and spies. It's a job for thugs and thieves".`,
    },

    {
        title: "Divergent",
        author: "Veronica Roth",
        genre: "Dystopian",
        pages: 487,
        id: crypto.randomUUID(),
        cover: "https://thebookhousebroughtyferry.co.uk/cdn/shop/products/9780007420421.jpg?v=1710423586",
        description: `
            Sixteen-year-old Tris is forced to make a terrible choice. In a divided society where everyone must conform, Tris does 
            not fit. So she ventures out alone, determined to discover where she truly belongs. Shocked by her brutal new life, Tris
            can trust no one. And yet she is drawn to a boy who seems to both threaten and protect her. The hardest choice lies ahead.`,
    },

    {
        title: "The Hunger Games",
        author: "Suzanne Collins",
        genre: "Dystopian",
        pages: 374,
        id: crypto.randomUUID(),
        cover: "https://m.media-amazon.com/images/I/61I24wOsn8L.jpg",
        description: `
            Katniss Everdeen, girl on fire, has survived, even though her home has been destroyed. There are rebels. There are new leaders. 
            A revolution is unfolding. It is by design that Katniss was rescuded from the arena in the cruel and haunting Quarter Quell, and
            it is by design that she has long been part of the revolution without knowing it. District 13 really does exist, and now it has 
            come out of the shadows and it plotting to overthrow the Capitol. Everyone, it seems, has had a hand in the carefully laid palns - 
            except Katniss.`,
    },
];

const myLibrary = [];

function Book(title, author, genre, id, cover, description){
    this.title = title;
    this.author = author;
    this.genre = genre;
    this.id = id;
    this.cover = cover;
    this.description = description;
}

function addBookToLibrary(title, author, genre, cover, description){
    const id = crypto.randomUUID();
    const newBook = new Book(title, author, genre, id, cover, description);
    myLibrary.push(newBook);
    displayBook(newBook);
}

standard.forEach(book => myLibrary.push(book));
myLibrary.forEach(book => displayBook(book));

function displayBook(book){
    const container = document.querySelector("main");
    const card = document.createElement("div");
    const display = document.createElement("span");
    const title = document.createElement("p");
    const author = document.createElement("p");
    const description = document.createElement("p");
    const icon_container = document.createElement("div");
    const remove = document.createElement("ion-icon");
    const read = document.createElement("ion-icon");

    card.classList.add("card");
    title.classList.add("title");
    author.classList.add("author");
    display.classList.add("display");
    description.classList.add("description");
    remove.classList.add("remove");
    icon_container.classList.add("icon-container");
    read.classList.add("read");

    card.style.background = `url(${book.cover})`;
    card.style.backgroundSize = "cover";
    card.style.backgroundPosition = "0 0";
    title.textContent = book.title;
    author.textContent = `By ${book.author}`;
    description.textContent = `${book.description}`;
    remove.setAttribute("name", "trash-outline");
    read.setAttribute("name", "book-outline");

    remove.addEventListener("click", () => removeBook(book));
    assignEventRead(read);

    display.append(title);
    display.append(author);
    display.append(description);
    card.append(display);
    icon_container.append(read);
    icon_container.append(remove);
    card.append(icon_container);
    container.append(card);
}

const slider = document.querySelector(".switchColumn_Row");
const main = document.querySelector("main");

slider.addEventListener("click", () => {
    const card = document.querySelectorAll(".card");
    if(main.classList.value === "row"){
        main.classList.remove("row");
        main.classList.add("column");

        for(let i = 0; i < card.length; i++){
            card[i].style.background = "#D9C3A8";
            const cover = document.createElement("div");
            
            cover.classList.add("cover");
            cover.style.height = "300px";
            cover.style.width = "200px";
            cover.style.background = `url(${myLibrary[i].cover})`;
            cover.style.backgroundSize = "cover";
            cover.style.backgroundPosition = "0 0";
            card[i].append(cover);
        }
    }

    else{
        main.classList.remove("column");
        main.classList.add("row");
        const cover = document.querySelectorAll(".cover");
        for(let i = 0; i < card.length; i++){
            cover[i].remove();
            card[i].style.background = `url(${myLibrary[i].cover})`;
            card[i].style.backgroundSize = "cover";
            card[i].style.backgroundPosition = "0 0";
        }
    }
});

const popUp = document.querySelector("dialog");
const botton = document.querySelector(".add");
botton.addEventListener("click", () => {
    popUp.showModal(); 
});

const closePopUp = document.querySelector(".close");
closePopUp.addEventListener("click", () => {
    popUp.close();
});

const formSubmit = document.querySelector(".submit");
formSubmit.addEventListener("click", (event) => {
    const title = document.querySelector("#title");
    const author = document.querySelector("#author");
    const genre = document.querySelector("#genre");
    const description = document.querySelector("#description");
    const cover = document.querySelector("#url");
    if(!cover.value){
        cover.value = "https://www.mobileread.com/forums/attachment.php?attachmentid=111264&d=1378642555";
    }
    addBookToLibrary(title.value, author.value, genre.value, cover.value, description.value);
})

let remove = document.querySelectorAll(".remove");

assignEventListener(remove);

function removeBook(book){
    const index = myLibrary.indexOf(book);
    let card = document.querySelectorAll(".card");
    if (card[index]) { 
        card[index].remove();
        myLibrary.splice(index, 1);
    }
}

function assignEventListener(array){
    for(let i = 0; i < array.length; i++){
        const book = myLibrary[i];
        array[i].addEventListener("click", () => removeBook(book));
    }
}

function assignEventRead(item){
    item.addEventListener("click", () => {
        const span = document.querySelectorAll(".display_read");

        if(item.classList.value === "read md hydrated selected"){
            item.classList.remove("selected");
            item.setAttribute("name", "book-outline");
        }

        else{
            item.classList.add("selected");
            item.setAttribute("name", "book");
        }
    });
}