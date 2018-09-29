$(document).ready(function() {
    $("#addCommentForm").submit(function (event) {
        event.preventDefault();
        addComment();
    });
    function addComment(){
        var formData = {
            text :  $("#text").val(),
        }
        $.ajax({
            type : "POST",
            url : "/book/addCommentToBook/" + window.book.id,
            data : JSON.stringify(formData),
            contentType : "application/json; charset=utf-8",
            dataType : "json",
            success : function(result) {
                $("#name").innerHTML = "";
                markupCommentTable(result);
                console.log("success add comment!");
            },
            error : function(e) {
                console.error("ERROR: ", e);
            }
        });
    }
})
function addComment(){
    event.preventDefault();
    var formData = {
        text :  $("#commentText").val(),
    }
    $.ajax({
        type : "POST",
        url : "/book/addCommentToBook/" + window.book.id,
        data : JSON.stringify(formData),
        contentType : "application/json; charset=utf-8",
        dataType : "json",
        success : function(result) {
            $("#commentText").innerHTML = "";
            markupCommentTable(result);
            console.log("success add comment!");
        },
        error : function(e) {
            console.error("ERROR: ", e);
        }
    });
}