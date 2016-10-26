(function() {
    "use strict";

    var productsData;

    // Functions
    function getInventory() {
        var request = $.get("data/inventory.json");

        request.fail(function (error) {
            console.log(error)
        }).done (function (products) {
            productsData = products;
            buildRows(products);
        });
    }

    function buildRows(products) {
        var row = "";
        products.forEach(function (product) {
            row += "<tr><td>" + product.title + "</td><td>" + product.quantity + "</td><td>" + product.price + "</td><td>" + product.categories.join(", ") + "</td></tr>";
        });
        $("#insertProducts").html(row);
    }

    function addInventory() {
        var title = $("#title").val();
        var quantity = $("#quantity").val();
        var price = $("#price").val();
        var category = $("#category").val();
        var row = "<tr><td>" + title + "</td><td>" + quantity + "</td><td>" + price + "</td><td>" + category + "</td></tr>";
        productsData.push({
            "title": title,
            "quantity": quantity,
            "categories": category,
            "price": price
        });
        $("#insertProducts").append(row);
    }

    function sortProductsBy(products, selector) {
        products.sort(function (productA, productB) {
            if (productA[selector] < productB[selector]) {
                return -1;
            }
            if (productA[selector] > productB[selector]) {
                return 1;
            }
            return 0;
        });
    }

    getInventory();

    // Buttons
    $("#refresh").on("click", getInventory);


    $("#submit").on("click", function () {
        event.preventDefault();
        addInventory();
    });

    // Sort links
    $("#titleHeader").on("click", function () {
        event.preventDefault();
        sortProductsBy(productsData, "title");
        $("#insertProducts").html(buildRows(productsData));
    });
    $("#quantityHeader").on("click", function () {
        event.preventDefault();
        sortProductsBy(productsData, "quantity");
        $("#insertProducts").html(buildRows(productsData));
    });
    $("#priceHeader").on("click", function () {
        event.preventDefault();
        sortProductsBy(productsData, "price");
        $("#insertProducts").html(buildRows(productsData));
    });
    $("#categoryHeader").on("click", function () {
        event.preventDefault();
        sortProductsBy(productsData, "categories");
        $("#insertProducts").html(buildRows(productsData));
    });





})();
