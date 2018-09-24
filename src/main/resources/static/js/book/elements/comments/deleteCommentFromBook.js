function deleteComment(commentText){
    event.preventDefault();

    var formData = {
        commentText: commentText,
        bookid: window.book.id
    }
    $.ajax({
        type : "DELETE",
        contentType : "application/json",
        url : "/deleteCommentFromBook/" + window.book.id,
        data : JSON.stringify(formData),
        dataType : "json",
        success : function(result) {
            console.log(result);
            markupCommentTable(result);
        },
        error : function(e) {
            console.log("ERROR: ", e);
        }
    });
}