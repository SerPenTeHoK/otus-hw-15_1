function createBookEditForm(book) {

    var root = document.getElementById("root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }

    var root = document.getElementById("root");
    window.book = book;

    var divFormEditBook = document.createElement("DIV");
    var editBookForm = document.createElement("FORM");
    editBookForm.setAttribute("id", "editBookForm");

    var h1Books = document.createElement("H1");
    h1Books.innerHTML = "Book:";
    editBookForm.appendChild(h1Books);

    var pBookId = document.createElement("P");
    pBookId.innerHTML = "Book id: ";
    var bookIdInput = document.createElement("INPUT");
    bookIdInput.setAttribute("type", "text");
    bookIdInput.setAttribute("id", "id");
    bookIdInput.setAttribute("readonly", "readonly");
    bookIdInput.value = book["id"];
    pBookId.appendChild(bookIdInput);
    editBookForm.appendChild(pBookId);

    var pBookTitle = document.createElement("P");
    pBookTitle.innerHTML = "Book title: ";
    var bookTitleInput = document.createElement("INPUT");
    bookTitleInput.setAttribute("type", "text");
    bookTitleInput.setAttribute("id", "title");
    bookTitleInput.value = book["title"];
    pBookTitle.appendChild(bookTitleInput);
    editBookForm.appendChild(pBookTitle);

    var buttonEditBookForm = document.createElement("BUTTON");
    buttonEditBookForm.innerHTML = "Edit book";
    buttonEditBookForm.setAttribute("type", "submit");

    buttonEditBookForm.onclick =
        function () {
            editBook();
        };
    editBookForm.appendChild(buttonEditBookForm);
    divFormEditBook.appendChild(editBookForm);
    root.appendChild(divFormEditBook);

    //Genre
    var h1Genres = document.createElement("H1");
    h1Genres.innerHTML = "Genres:";
    root.appendChild(h1Genres);

    var divFormAddGenre = document.createElement("DIV");
    var addGenreFormBook = document.createElement("FORM");
    addGenreFormBook.setAttribute("id", "addGenreForm");

    var pGenreName = document.createElement("P");
    pGenreName.innerHTML = "Genre name: ";
    var genreNameInput = document.createElement("INPUT");
    genreNameInput.setAttribute("type", "text");
    genreNameInput.setAttribute("id", "genreName");
    pGenreName.appendChild(genreNameInput);

    var pGenreNameSubmit = document.createElement("P");
    var genreNameInputSubmit = document.createElement("INPUT");
    genreNameInputSubmit.setAttribute("type", "submit");
    genreNameInputSubmit.setAttribute("value", "Add genre");
    genreNameInputSubmit.onclick = function () {
        addGenre();
    };
    pGenreNameSubmit.appendChild(genreNameInputSubmit);

    addGenreFormBook.appendChild(pGenreName);
    addGenreFormBook.appendChild(pGenreNameSubmit);
    divFormAddGenre.appendChild(addGenreFormBook);
    root.appendChild(divFormAddGenre);

    var divGenresTable = document.createElement("DIV");
    divGenresTable.setAttribute("id", "genresTableDiv");
    root.appendChild(divGenresTable)

    window.genres = book.genres;

    markupGenreTable();



}