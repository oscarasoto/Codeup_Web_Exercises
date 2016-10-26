/*$("dt").on("click", function () {
    $('dd').toggleClass('invisible');
});*/

$("ul").each(function () {
    $(this).children().first().css("font-weight", "bold")
});

/*$("li").on("click", function () {
   $(this).parent().addClass("invisible");
});*/

/*$("h3").on("click", function () {
    $(this).next().removeClass("invisible");
});*/

$('#national-parks-toggle').click(function() {
    $('#national-parks').fadeToggle("slow", "linear");
});

$("#state-parks-toggle").click(function() {
    $("#state-parks-texas").slideToggle();
});

$("dt").each(function () {
    $("dt").on("click", function () {
        $(this).next().slideToggle();
    });

});
