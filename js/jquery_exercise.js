
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

