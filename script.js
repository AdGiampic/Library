let myLibrary = [];

function Book() {
  // the constructor...
}

function addBookToLibrary() {
  // do stuff here
}

function createCard() {
    let card = document.createElement('div');
    card.className = "card"
    let p1 = document.createElement('p');
    p1.textContent = "Yada yada yada"
    let p2 = document.createElement('p');
    p2.textContent = "Some text Lorem ipsum hamanet"
    let p3 = document.createElement('p');
    p3.textContent = "189 pages";
    let btRead = document.createElement('button');
    btRead.textContent = "Read"
    p1.className = "book-txt";
    p2.className = "book-txt";
    p3.className = "book-txt";
    card.appendChild(p1);
    card.appendChild(p2);
    card.appendChild(p3);
    card.appendChild(btRead);
    document.getElementById('cards-container').appendChild(card);
}