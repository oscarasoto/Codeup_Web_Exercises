(function() {
    "use strict";

    var buttons = document.getElementsByTagName("button");

    buttons[0].addEventListener("click", function (event) {
        event.preventDefault();
        var mainHeader = document.getElementById("main-header");
        console.log(mainHeader);
        mainHeader.innerHTML = "JavaScript is Cool";
    });

    buttons[1].addEventListener("click", function (event) {
        event.preventDefault();
        var subHeader = document.getElementById("sub-header");
        subHeader.style.color = "blue";
    });

    buttons[2].addEventListener("click", function (event) {
        event.preventDefault();
        var listItems = document.getElementsByTagName("li");
        for (var i = 0; i < listItems.length; i++) {

            if ((i % 2) == 0){
                listItems[i].style.color = "grey";
            }

            var dbID = listItems[i].getAttribute("data-dbid");
            if (dbID == 1){
                listItems[i].style.color = "blue";
            }
        }

    });

    buttons[3].addEventListener("click", function (event) {
        event.preventDefault();
        var subParagraphs = document.getElementsByClassName("sub-paragraph");
        subParagraphs[0].innerText = "Mission Accomplished!";
    });

})();
