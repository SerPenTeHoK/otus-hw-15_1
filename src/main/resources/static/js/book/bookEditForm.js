function createBookEditForm(book) {

    var root = document.getElementById("root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }

    var root = document.getElementById("root");

    // <a href="/">Return to main page</a>
    var aMainPage = document.createElement("a");
    aMainPage.setAttribute("href", "/");
    aMainPage.innerHTML = "Return to main page";
    root.appendChild(aMainPage);

//<form th:object="${book}" id="editBookForm">

    var divFormEditBook = document.createElement("DIV");
    var editBookForm = document.createElement("FORM");
    editBookForm.setAttribute("id", "editBookForm");


    // <h1>Books:</h1>
    var h1Books = document.createElement("H1");
    h1Books.innerHTML = "Book:";
    editBookForm.appendChild(h1Books);

    //             <p>Book title: <input type="text" id="title"/></p>
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

    event.preventDefault();

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
}