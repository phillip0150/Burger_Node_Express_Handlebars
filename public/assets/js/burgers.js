$(function() {
    $(".change-devoured").on("click", function(event){
        event.preventDefault();

        var id = $(this).data("id");
        var newDevoured = $(this).data("newdevoured");
        console.log(id);
        var newDevouredState = {
            devoured: newDevoured
        };

        $.ajax("/api/burgers/" + id, {
            type: "PUT",
            data: newDevouredState
        }).then(
        function() {
            console.log("changed devoured to", newDevoured);
            location.reload();
        });
    });

    $(".create-form").on("submit", function(event) {
        event.preventDefault();

        var newBurger = {
            burger_name: $("#burger").val().trim(),
        };

        $.ajax("/api/burgers", {
            type: "POST",
            data: newBurger
        }).then(
            function() {
                console.log("created a new burger");
                location.reload();
            }
        );
    });
});