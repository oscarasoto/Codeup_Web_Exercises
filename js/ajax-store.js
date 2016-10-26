(function() {
    "use strict";
    // TODO: Create an ajax GET request for /data/inventory.json

   function getInventory() {
       var request = $.get("data/inventory.json");

       request.fail(function (error) {
           console.log(error)
       }).done (function (products) {
           createRows(products);
       });
   }

    // TODO: Take the data from inventory.json and append it to the products table
    //       HINT: Your data should come back as a JSON object; use console.log() to inspect
    //             its contents and fields
    //       HINT: You will want to target #insertProducts for your new HTML elements

    function createRows(products) {
        console.log(products);
        products.forEach(function (product) {
            console.log(product);
            var row = "<tr><td>";
            row += product.title + "</td><td>" + product.quantity + "</td><td>" + product.price + "</td><td>" + product.categories + "</td></tr>";
            $("#insertProducts").append(row);
        });
    }

    function addInventory() {
        var row = "<tr><td>";
        row += $("#title").val() + "</td><td>" + $("#quantity").val() + "</td><td>" + $("#price").val() + "</td><td>" + $("#categories").val() + "</td></tr>";
        $("#insertProducts").append(row);
    }

    getInventory();

    $("#submit").on("click", function () {
        event.preventDefault();
        addInventory();
    })



})();
