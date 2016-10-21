
var content = $("#header");
alert(content.html());

var lists = $(".list");
alert(lists.html());

lists.each(function (element) {
    console.log($(this).html());

});