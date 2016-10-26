(function() {
    "use strict";

    function getBlogData() {
        var request = $.get("data/blog.json");

        request.fail(function (error) {
            console.log(error)
        }).done (function (blogs) {
            createArticles(blogs);
        });
    }

    function createArticles(blogs) {
        blogs.forEach(function (blog) {
            var article = "<article><section class='post-head'><h2 id='title'>";
            article +=
                blog.title + "</h2><section class='post-body'><p>" +
                blog.content + "</p></section><small>Posted on: " +
                blog.date + "</small></section></article>";
            $("#posts").append(article);
        });
    }

    getBlogData();

})();

