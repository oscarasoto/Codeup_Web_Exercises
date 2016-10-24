
var $content = $("#header");
// alert(content.html());

var $lists = $(".list, #header");
// alert(lists.html());

$lists.each(function (element) {
    console.log($(this).html()); //current elemtn in the result set

});

$($lists).css("border", "1px solid red");

// set multiple CSS properties

$("#paragraph").css({"background-color":"yellow", "font-size":"15px", "font-weight":"bold"});

// Mouse Events

$($content).click(function () {
    $(this).css("background-color", "yellow")
});

var size = 18;
$("p").dblclick(function () {
    $(this).css("font-size", size +"px")
    console.log(size);
    size ++
});

$("li").hover(
    function () {
        $(this).css("color", "red")
    },
    function () {
        $(this).css("color", "black")
    }
);