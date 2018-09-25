function createTableAuthors(authorsData){

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


/*

    var editAuthorCreateForm = document.createElement("FORM");
    editAuthorCreateForm.setAttribute("id", "createAuthorForm");

    var authorCreateFirstNameP = document.createElement("P");
    authorCreateFirstNameP.innerHTML = "Author firstName: ";
    var authorCreateFirstNameInput = document.createElement("INPUT");
    authorCreateFirstNameInput.setAttribute("id", "firstNameCreate");
    authorCreateFirstNameP.appendChild(authorCreateFirstNameInput);
    editAuthorCreateForm.appendChild(authorCreateFirstNameP);


    var buttonFormEditAuthorCreate = document.createElement("BUTTON");
    buttonFormEditAuthorCreate.innerHTML = "Create new author";
    buttonFormEditAuthorCreate.setAttribute("type", "submit");
    buttonFormEditAuthorCreate.onclick = createNewAuthor;
    editAuthorCreateForm.appendChild(buttonFormEditAuthorCreate);
    root.appendChild(editAuthorCreateForm);

    var table = document.createElement("TABLE");
    table.setAttribute("id", "authorsTable");
    var tableBody = document.createElement("TBODY");
    var trHead = document.createElement("tr");

    var thIdAuthor = document.createElement("th");
    thIdAuthor.innerHTML = "Author id";
    var thFirstName = document.createElement("th");
    thFirstName.innerHTML = "Author first name";
    var thSecondName = document.createElement("th");
    thSecondName.innerHTML = "Author second name";
    var thDeleteAuthor = document.createElement("th");
    thDeleteAuthor.innerHTML = "Delete author";

    trHead.appendChild(thIdAuthor);
    trHead.appendChild(thFirstName);
    trHead.appendChild(thSecondName);
    trHead.appendChild(thDeleteAuthor);
    tableBody.appendChild(trHead);

    authorsData.forEach(function(author) {
        var tr = document.createElement("tr");
        var tdId = document.createElement("td");
        tdId.setAttribute("id", "idDelete");
        var linkId = document.createElement("a");
        linkId.href= "#" + author.id;
        linkId.onclick = function(){
            editAuthorForm(author);
        };
        var linkIdText = document.createTextNode(author["id"]);
        linkId.appendChild(linkIdText);
        tdId.appendChild(linkId);
        var tdFirstName = document.createElement("td");
        tdFirstName.innerHTML = author["firstName"];
        var tdSecondName = document.createElement("td");
        tdSecondName.innerHTML = author["secondName"];
        var tdButtonDelete = document.createElement("td");
        var buttonDelete = document.createElement("BUTTON");
        var textButtonDelete = document.createTextNode("Delete author");
        buttonDelete.appendChild(textButtonDelete);
        buttonDelete.onclick = function(){
            deleteAuthor(author["id"]);
        };
        tdButtonDelete.appendChild(buttonDelete);

        tr.appendChild(tdId);
        tr.appendChild(tdFirstName);
        tr.appendChild(tdSecondName);
        tr.appendChild(tdButtonDelete);
        tableBody.appendChild(tr);
    });

    table.appendChild(tableBody);
    root.appendChild(table);

    */
}