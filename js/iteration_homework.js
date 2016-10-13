
// === Homework ===

// Take an array of strings containing all the states
// return only the states that start with the letter T

console.log("== First Exercise ==");

var usStates = ['Alabama','Alaska','American Samoa','Arizona','Arkansas','California',
    'Colorado','Connecticut', 'Delaware','District of Columbia','Federated States of Micronesia',
    'Florida','Georgia','Guam','Hawaii', 'Idaho','Illinois','Indiana','Iowa','Kansas','Kentucky',
    'Louisiana','Maine','Marshall Islands','Maryland', 'Massachusetts','Michigan','Minnesota',
    'Mississippi','Missouri','Montana','Nebraska','Nevada','New Hampshire', 'New Jersey', 'New Mexico',
    'New York','North Carolina','North Dakota','Northern Mariana Islands','Ohio', 'Oklahoma','Oregon',
    'Palau','Pennsylvania','Puerto Rico','Rhode Island','South Carolina','South Dakota', 'Tennessee',
    'Texas','Utah','Vermont','Virgin Island','Virginia','Washington','West Virginia','Wisconsin','Wyoming'];


function stringMatching(items, text) {
    var itemsMatched = [];
    for (var i=0; i < items.length; i++){
        if (items[i].indexOf(text) !== -1){
            itemsMatched.push(items[i]);
        }
    }
    return itemsMatched;

}
var statesWithT = stringMatching(usStates, "T");
console.log(statesWithT);


// make another function that returns a new array of all the states >= two "s" characters
function stringMatching2ConsecutiveLetters(items, text) {
    var itemsMatched = [];
    var exp = new RegExp(text + "{2}");
    items.forEach(function (element, index, array) {
        //console.log(exp);
        if (element.match(exp)) {                  // Another condition if(element.indexOf("s") != element.lastIndexOf("s"))
            itemsMatched.push(array[index]);
        }
    });

    return itemsMatched;
}

var statesWithDoubleS = stringMatching2ConsecutiveLetters(usStates, "s");
console.log(statesWithDoubleS);

// Make a function that squares each number on an array
// function should return the arrayOfSquares
console.log("== Second Exercise ==");

var numbers = [1,2,3,4,5,6,7,8,9,10];

function arrayOfSquares (array){
    var squared = [];
    array.forEach(function (number) {
        squared.push(number * number);
    });
    return squared;
}
console.log(arrayOfSquares(numbers));

// write a function that takes an array of lowercase names
// uppercase the first letter of each name
// and returns only the names that start with "Y"
console.log("== Third Exercise ==");

var names = ["john","paul","ringo","george","yoko"];

function uppercaseFirstLetterOfStringArray(array) {
    var newArray = [];
    array.forEach(function (string) {
        newArray.push(string[0].toUpperCase() + string.substring(1));
    });
    return newArray;
}

var capitalizedFirstLetter = uppercaseFirstLetterOfStringArray(names);
console.log(capitalizedFirstLetter);
var nameWithY = stringMatching(capitalizedFirstLetter, "Y");
console.log(nameWithY);

// write a function that takes an array of numbers 1-10
// returns the sum of only the numbers divisible by 3
console.log("== Fourth Exercise ==");

numbers = [1,2,3,4,5,6,7,8,9,10];

function sumOfNumbersDivisibleByThree(numbers) {
    var sum = 0;
    numbers.forEach(function (number) {
        if (number % 3 == 0){
            sum += number;
        }
    });
    return sum;
}
console.log(sumOfNumbersDivisibleByThree(numbers));

////////////////////////////

console.log("////// Solution for First Exercise with Functions //////////////////");

function startsWithT(element) {
    return element[0] == "T";
}

function contains2SOrMore(element) {
    return element.indexOf("s") < element.lastIndexOf("s");
}

function arrayFilter(elements, filter) {
    var i, filteredElements = [];
    for (i = 0; i<elements.length; i++) {
        if (filter(elements[i])) {
            filteredElements.push(elements[i]);
        }
    }
    return filteredElements;
}

console.log(arrayFilter(usStates,startsWithT));
console.log(arrayFilter(usStates,contains2SOrMore));
