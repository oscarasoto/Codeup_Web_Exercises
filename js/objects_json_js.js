'use strict';

// Create an array of objects that represent books.
// Each book should have a title and an author.
// The book author should be an object with a firstName and lastName.
// Be creative and add at least 5 books to the array

var books = [
    {
        "number":"1",
        "title":"Book1",
        "author":"Author1"
    },
    {
        "number":"2",
        "title":"Book2",
        "author":"Author1"
    },
    {
        "number":"3",
        "title":"Book3",
        "author":"Author3"
    },
    {
        "number":"4",
        "title":"Book4",
        "author":"Author4"
    },
    {
        "number":"5",
        "title":"Book5",
        "author":"Author5"
    }
];

// log out the books array
console.log(books);

// Create a function to add a new book

function addBook () {
    var book = {};
    book.title = prompt("What is the tittle of the book");
    book.author = prompt("Who is the author");
    books.push(book);
}

addBook();

// Loop through the array of books using .forEach and print out the specified information about each one.
// start loop here

books.forEach(function (book, index) {
    console.log("Book # " + (index + 1));
    console.log("Title: " + book.title);
    console.log("Author: " + book.author);
    console.log("---");

});

// end loop here

