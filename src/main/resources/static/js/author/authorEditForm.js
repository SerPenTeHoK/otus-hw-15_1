function editAuthorForm(author) {

    var root = document.getElementById("root");
    while (root.firstChild) {
        root.removeChild(root.firstChild);
    }

    var editAuthorFormDiv = document.getElementById("root");
    var editAuthorForm = document.createElement("FORM");
    editAuthorForm.setAttribute("id", "editAuthorForm");

    var authorIdP = document.createElement("P");
    authorIdP.innerHTML = "Author id: ";
    var authorIdInput = document.createElement("INPUT");
    authorIdInput.setAttribute("id", "id");
    authorIdInput.value = author["id"];
    authorIdP.appendChild(authorIdInput);
    editAuthorForm.appendChild(authorIdP);

    var authorFirstNameP = document.createElement("P");
    authorFirstNameP.innerHTML = "Author firstName: ";
    var authorFirstNameInput = document.createElement("INPUT");
    authorFirstNameInput.setAttribute("id", "firstName");
    authorFirstNameInput.value = author["firstName"];
    authorFirstNameP.appendChild(authorFirstNameInput);
    editAuthorForm.appendChild(authorFirstNameP);

    var authorSecondNameP = document.createElement("P");
    authorSecondNameP.innerHTML = "Book secondName: ";
    var authorSecondNameInput = document.createElement("INPUT");
    authorSecondNameInput.setAttribute("id", "secondName");
    authorSecondNameInput.value = author["secondName"];
    authorSecondNameP.appendChild(authorSecondNameInput);
    editAuthorForm.appendChild(authorSecondNameP);

    var buttonFormEditAuthor = document.createElement("BUTTON");
    buttonFormEditAuthor.innerHTML = "Edit author";
    buttonFormEditAuthor.setAttribute("type", "submit");
    buttonFormEditAuthor.onclick = editAuthor;
    editAuthorForm.appendChild(buttonFormEditAuthor);
    editAuthorFormDiv.appendChild(editAuthorForm);

}