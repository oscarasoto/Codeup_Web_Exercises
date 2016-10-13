/**
 * Created by oscarsoto on 10/12/16.
 */

'use strict';
// declare and initialize array
var shapes = ['square', 'rectangle', 'circle', 'triangle'];
var names = ["Barry", "Jessica", "Clark"];
var htmlTable;

// loop through the array and log the values using For Loop
for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}

// loop through the array and log the values using Function
shapes.forEach(function (element, index, array) {
    console.log('The shape at index ' + index + ' is: ' + element);
});

//////// Another Exercise ////////////
// Creating Tables with JS //

function createHtmlTable (items) {

    var htmlTable = "<table>";

    for (i=0; i < items.length; i++){

        htmlTable += "<tr><td>" + (i + 1) + "</td><td>" + items [i] + "</td></tr>";
    }
    htmlTable += "</table>";

    return htmlTable;

}

htmlTable = createHtmlTable(names);
console.log(htmlTable);

htmlTable = createHtmlTable(shapes);
console.log(htmlTable);


//// Another Exercise ////

// Generic Solution
var shapesWithC = [];

for (i=0; i < shapes.length; i++){
    if (shapes[i].indexOf("c") !== -1){
        shapesWithC.push(shapes[i]);
    }
}
console.log(shapesWithC);

// Solution with Function

function itemsMatching(items, text) {
    var itemsMatched = [];
    for (i=0; i < items.length; i++){
        if (items[i].toLowerCase().indexOf(text) !== -1){
            itemsMatched.push(items[i]);
        }
    }
    return itemsMatched;

}
shapesWithC = itemsMatching(shapes, "c");
var namesWithC = itemsMatching(names, "c")
console.log(shapesWithC);
console.log(namesWithC);

// Another exercise //

console.log("=== Iterating over Arrays Sheet ===");

var arrayOfNumbers = [1,2,3,4,5];
for (var i=0; i < arrayOfNumbers.length; i++){
    console.log("The element at index " + i + " is " + arrayOfNumbers[i]);
}

arrayOfNumbers.forEach(function (element, index, array) {
    console.log("The element at index " + index + " is " + element);
});

// Example of "mapping" or applying a function to every element and pushing results to the newArray.
var newArray = [];
[1,2,3,4,5].forEach(function (element, index, array) {
    newArray.push(element + 1);
});
console.log(newArray);

// Example of "filtering" with a forEach. Filtered elements are pushed onto arrayOfEvents.

function isEven(number) {
    return number % 2 == 0;
}

var arrayOfEvents = [];
[1,2,3,4,5,6,7,8].forEach(function (element, index, array) {
    if(isEven(element)) {
        arrayOfEvents.push(element);
    }

});
console.log(arrayOfEvents);

// Example of using a forEach to "accumulate" or to "reduce" to a single value.
var sum = 0;
[1,2,3,4,5].forEach(function (element, array) {
    sum += element;
});
console.log(sum);

[1,2,3,4,5].forEach(function (element, array) {
    sum -= element;
});
console.log(sum);

console.log("=== New Exercises ===");
// Write a function that returns a new array of strings with the first letter uppercased
// Take an array of strings containing names in lowercase and uppercase only the first character.
// Is this operation a type of map, filter or decude usages of a forEach.
// new array should be ["John","Paul","Ringo","George","Yoko"]
//noinspection JSDuplicatedDeclaration
var names = ["john","paul","ringo","george","yoko"];

function uppercaseFirstLetterOfStringArray(array) {
    var newArray = [];
    array.forEach(function (element) {
        newArray.push(element.charAt(0).toUpperCase() + element.slice(1));
    });
    return newArray;
}
console.log(uppercaseFirstLetterOfStringArray(names));

// Ryan Solution
/*
function capitalizedFirstLetterOfEachString (arrayOfStrings) {

    arrayOfStrings.forEach(function(string, index) {

        var firstLetterCapitalized = string[0].toUpperCase();
        var restOfString = string.substring(1);
        var fullString = firstLetterCapitalized + restOfString;
        arrayOfStrings[index] = fullString;
    });
    return arrayOfStrings;
}
names = capitalizedFirstLetterOfEachString(names);
console.log(names);*/

// Write a function that takes an array of numbers 1-10
// and returns the product of all the numbers
// is this a type of map, filter, or reduce usage of the forEach
var numbers = [1,2,3,4,5,6,7,8,9,10];

function totalProduct(array) {
    var product = 1;
    array.forEach(function (element) {
        product *= element;
    });
    return product;
}
console.log(totalProduct(numbers));

// Write a function that takes returns a string containing the HTML necessary
// for an unordered list with an <li> for each person on your names array
// is this a type of map, filter, or reduce usage of the forEach

function createHtmlList (array) {

    var htmlList = "<ul>";
    array.forEach(function (element) {
        htmlList += "<li>" + element + "</li>";
    });
    htmlList += "</ul>";
    return htmlList;
}
console.log(createHtmlList(names));


