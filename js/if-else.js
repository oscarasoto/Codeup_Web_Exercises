/**
 * Created by oscarsoto on 10/6/16.
 */
"use strict";

/*
Knowing that a student's grades are 70, 80, 95. Write a JS program, using conditionals that logs to the console ' +
'"You're awesome" if the average of her grades is greater than 80, otherwise the message should be "You need to practice more". */


console.log ("-- First Exercise --");

// Input
var firstGrade = 70;
var secondGrade = 80;
var thirdGrade = 95;

// Output

var message;

// Process
var average = (firstGrade+secondGrade+thirdGrade)/3;

if (average > 80) {
    message = "You're awesome";
} else {
    message = "You need to practice more";
}

console.log(message);

/* HEB has an offer for the clients that buy products amounting more than $200 Write a JS program, using conditionals,
 that logs to the browser, how much does Ryan, Cameron and George need to pay. We know that Cameron bought $180,
 Ryan $250 and George $320. Your program will have to display a line with the name of the person, the amount before the discount,
 if any, and the amount after the discount.
* */

console.log ("-- Second Exercise --");

var hebOfferCondition = 200;
var discount = .20;

var cameronBought = 180;
var ryanBought = 250;
var georgeBought = 320;
var totalMinusDiscount = 0;

if (cameronBought > hebOfferCondition) {
    totalMinusDiscount = cameronBought - (cameronBought * discount);
    console.log ("Cameron bough " + cameronBought + " and his total after the discount is: " + totalMinusDiscount);
} else {
    console.log ("Cameron bough " + cameronBought + " and his total after the discount is: " + cameronBought);
}

if (ryanBought > hebOfferCondition) {
    totalMinusDiscount = ryanBought - (ryanBought * discount);
    console.log ("Ryan bough " + ryanBought + " and his total after the discount is: " + totalMinusDiscount);
}

if (georgeBought > hebOfferCondition) {
    totalMinusDiscount = georgeBought - (georgeBought * discount);
    console.log ("George bough " + georgeBought + " and his total after the discount is: " + totalMinusDiscount);
}



/* Suppose your friend Isaac cannot decide between two options. He doesn't know if he should buy a car or a new house.
Help him decide! Write a small JS program. The following line generates either a 0 or a 1 randomly.
 var flipACoin = Math.floor(Math.random()* 2)
 Add an if statement to log a "Buy a car" to the console if the result is 0 and "Buy a house" if the result is 1.
 Could this program be written using a ternary operator?
 */

console.log ("-- Third Exercise --");

var flipACoin = Math.floor(Math.random()* 2);
var message;

if (flipACoin == 0){
    message = "Buy a Car";
} else {
    message = "Buy a house";
}
console.log(message);

message = (flipACoin == 0) ? "Buy a Car" : "Buy a house";
console.log (message);

console.log((flipACoin == 0) ? "Buy a Car" : "Buy a house");








