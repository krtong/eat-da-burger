$(function () {
  $(".change-devoured").on("click", function (event) {
    var id = $(this).data("id");
    var newDevoured = $(this).data("newdevoured");
    var newDevouredState = {
      devoured: newDevoured
    };

    // Send the PUT request.
    $.ajax("/api/burgers/" + id, {
      type: "PUT",
      data: newDevouredState
    }).then(
      function () {
        console.log("changed devoured to", newDevoured);
        location.reload();
      }
    );
  });

  $(".create-form").on("submit", function () {
    var name = $("#burger").val().trim();
    $.ajax("/api/burgers", {
      type: "POST",
      data: {
        name
      }
    }).then(
      function () {
        console.log("created new burger");
        location.reload();
      }
    );
  });
});