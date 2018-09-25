function createAuthorListForm(authorsData1){

    var root = document. getElementById("root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }
    var root = document.getElementById("root");

    // <h1>Authors:</h1>
    var h1Authors = document.createElement("H1");
    h1Authors.innerHTML = "Authors:";
    root.appendChild(h1Authors);
    // <a href="/">Return to main page</a>
    var aMainPage = document.createElement("a");
    aMainPage.setAttribute("href", "/");
    aMainPage.innerHTML = "Return to main page";
    root.appendChild(aMainPage);

    // <div>
    //         <form id="addAuthorForm">
    var divFormAddAuthor = document.createElement("DIV");
    var addAuthorForm = document.createElement("FORM");
    addAuthorForm.setAttribute("id", "addAuthorForm");
    //             <p>Author name: <input type="text" id="name"/></p>
    var pAuthorName = document.createElement("P");
    pAuthorName.innerHTML = "Author name: ";
    var authorNameInput = document.createElement("INPUT");
    authorNameInput.setAttribute("type", "text");
    authorNameInput.setAttribute("id", "name");
    pAuthorName.appendChild(authorNameInput);
    //             <p><input type="submit" value="Add author"/></p>
    var pAuthorNameSubmit = document.createElement("P");
    var authorNameInputSubmit = document.createElement("INPUT");
    authorNameInputSubmit.setAttribute("type", "submit");
    authorNameInputSubmit.setAttribute("value", "Add author");
    pAuthorNameSubmit.appendChild(authorNameInputSubmit);

    addAuthorForm.appendChild(pAuthorName);
    addAuthorForm.appendChild(pAuthorNameSubmit);
    divFormAddAuthor.appendChild(addAuthorForm);
    root.appendChild(divFormAddAuthor);

    //<div id="authorsTableDiv">
    var divAuthorsTable = document.createElement("DIV");
    divAuthorsTable.setAttribute("id", "authorsTableDiv");
    root.appendChild(divAuthorsTable)

    window.authors = authorsData1;

    markupAuthorsTable();
}