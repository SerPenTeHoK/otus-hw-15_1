$(document).ready(function() {
    $("#editBookForm").submit(function (event) {
        event.preventDefault();
        editBook();
    });
    function editBook(){
        var formData = {
            id : $("#book-id").val(),
            title : $("#book-title").val(),
        }
        $.ajax({
            type : "PUT",
            contentType : "application/json",
            url : "/book",
            data : JSON.stringify(formData),
            dataType : "json",
            success : function(result) {
                console.log("success edit book!");
            },
            error : function(e) {
                console.error("ERROR: ", e);
            }
        });
    }
})