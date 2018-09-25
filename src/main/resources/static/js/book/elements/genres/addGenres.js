$(document).ready(function() {
    $("#addGenreForm").submit(function (event) {
        event.preventDefault();
        addGenre();
    });
    function addGenre(){
        var formData = {
            name :  $("#name").val(),
        }
        $.ajax({
            type : "POST",
            url : "/book/addGenreToBook/" + window.book.id,
            data : JSON.stringify(formData),
            contentType : "application/json; charset=utf-8",
            dataType : "json",
            success : function(result) {
                $("#name").innerHTML = "";
                markupGenreTable(result);
                console.log("success add author!");
            },
            error : function(e) {
                console.error("ERROR: ", e);
            }
        });
    }
})