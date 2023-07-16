let myLibrary = [];

document.getElementById('form').style.display = 'none';

function showForm() { // function that displays the form
  document.getElementById('form').style.display = 'flex';
}

function hideForm() {
  document.getElementById('form').style.display = 'none';
}

function Book(title,author,pages,read,id) {
  // the constructor...
  if (title == "" || author == "" || pages == 0) {
    return
  }
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = id;
}

function addBookToLibrary() {
  // catch the value of the form
  let title = document.getElementById('book-title').value;
  let author = document.getElementById('author').value;
  let nrPages = document.getElementById('pages').value;
  let readBook = document.getElementById('read').checked;
  // checking if a book is already in the library before creating a book
  let i = 0;
  for (i; i < myLibrary.length; i++) {
    if (title === myLibrary[i].title && author === myLibrary[i].author) {
      alert("Book already present in the library.")
      return
    }
  }
	let book = new Book (title, author, nrPages, readBook,i); // add the book inside myLibrary array
  myLibrary.push(book);
  if (nrPages > 0) {
    createCard(title, author, nrPages, readBook,i);
  }
  // reset form
  document.getElementById('book-title').value = "";
  document.getElementById('author').value = "";
  document.getElementById('pages').value = "";
  document.getElementById('read').checked = false;
}

function createCard(title, author, nrPages, readBook,i) {
  let card = document.createElement('div');
  card.className = "card";
  card.id = i;
  let p1 = document.createElement('p');
  p1.textContent = title;
  let p2 = document.createElement('p');
  p2.textContent = author
  let p3 = document.createElement('p');
  p3.textContent = nrPages + " pages";
  let btRead = document.createElement('button');
  btRead.className = "btn";
  if (readBook == true) {
    btRead.id = "read-btn"
    btRead.textContent = "Read";
  } else {
    btRead.id = "notRead-btn"
    btRead.textContent = "Not read yet";
  }
  // anonymous function that changes the status of the book
  btRead.onclick = function () {
    if (this.id === "read-btn") {
      btRead.id = "notRead-btn"
      btRead.textContent = "Not read yet";
    } else {
      btRead.id = "read-btn"
      btRead.textContent = "Read";
    }
  };
  let btDel = document.createElement('button');
  btDel.textContent = "Delete";
  btDel.className = "btn";
  // anonymous function that deletes a book
  btDel.onclick = function () {
    for (let i = 0; i<myLibrary.length; i++) {
      if (parseInt(card.id) === i) {
        myLibrary.splice(i,1);
        document.getElementById(card.id).style.display = 'none';
      }
    }
  }
  p1.className = "book-txt";
  p2.className = "book-txt";
  p3.className = "book-txt";
  card.appendChild(p1);
  card.appendChild(p2);
  card.appendChild(p3);
  card.appendChild(btRead);
  card.appendChild(btDel);
  document.getElementById('cards-container').appendChild(card);
}