(function() {
    "use strict";
    // TODO: Uncomment next line and get the main header element by id
    var mainHeader = document.getElementById("main-header");

    // TODO: Set inner html of mainHeader to "JavaScript is Cool"
    mainHeader.innerHTML = "JavaScript is Cool";

    // TODO: Uncomment the next line and get the sub header element by id
    var subHeader = document.getElementById("sub-header");

    // TODO: Set the text color of subHeader to blue
    subHeader.style.color = "blue";

    // TODO: Uncomment the next line and get all list items
    var listItems = document.getElementsByTagName("li");

    // TODO: Set text color on every other list item to grey
    for (var i = 0; i < listItems.length; i++) {

        if ((i % 2) == 0){
            listItems[i].style.color = "grey";
        }
    // TODO: Set text color of li with dbid = 1 to blue
        var dbID = listItems[i].getAttribute("data-dbid");
        if (dbID == 1){
            listItems[i].style.color = "blue";
        }
    }

    // TODO: Uncomment the next line and get all elements with class name sub-paragraph
    var subParagraphs = document.getElementsByClassName("sub-paragraph")[0];

    // TODO: Change the text in the first sub paragraph to "Mission Accomplished!"
    console.log(subParagraphs);
    subParagraphs.innerText = "Mission Accomplished!";
})();
