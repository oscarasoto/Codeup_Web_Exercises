$(document).ready(function() {
    "use strict";
    // TODO: "Move It" should move the box 100 pixels to the left

    $("#btn-move").on("click", function () {
        $("#animate-box").animate({
            left: "+=100px"
        }, 2000)
    });

    // TODO: "Scale It" should expand the box width by 50%
    $("#btn-scale").on("click", function () {
        $("#animate-box").animate({
            width: "+=50%"
        }, 2000)
    });

    // TODO: "Hide It" should use opacity to make the box invisible
    $("#btn-hide").on("click", function () {
        $("#animate-box").animate({
            opacity: 0
        }, 3000)
    });

    // TODO: "Show It" should make the box appear

    $("#btn-show").on("click", function () {
        $("#animate-box").animate({
            opacity: 1
        }, 3000)
    });

    // TODO: "Animate All" should use an animation stack to:
    //      1) Move and scale the box simultaneously
    //      2) Hide the box
    //      3) Reset the box back to its original position and opacity

    $("#btn-all").on("click", function () {
        $("#animate-box").animate({
            left: "+=100px",
            width: "+=50%"
        }, 2000).animate({
            opacity: 0
        }, 3000).animate({
            opacity: 1,
            left: "-=100px",
            width: "-=50%"
        }, 3000)
    });


});
