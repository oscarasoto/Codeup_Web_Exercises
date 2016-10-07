/**
 * Created by oscarsoto on 10/6/16.
 */
"use strict";

// First Exercise
console.log ("-- First Exercise --");

var luckyNumber = Math.floor(Math.random()* 6);
var discount1 = .1; // 10 % Discount
var discount2 = .25; // 25 % Discount
var discount4 = .50; // 50 % Discount
var discount5 = 1; // 100 % Discount
var receipt = 60;

var totalAfterDiscount = 0;

var message;


switch (luckyNumber) {
    case 1:
        totalAfterDiscount = receipt - (receipt * discount1);
        message = "Your receipt was: " + receipt + " your discount is: " + discount1*100 + "%" + " You'll pay: " + totalAfterDiscount;
        break;
    case 2:
        totalAfterDiscount = receipt - (receipt * discount2);
        message = "Your receipt was: " + receipt + " your discount is: " + discount2*100 + "%" + " You'll pay " + totalAfterDiscount;
        break;
    case 4:
        totalAfterDiscount = receipt - (receipt * discount4);
        message = "Your receipt was: " + receipt + " your discount is: " + discount4*100 + "%" + " You'll pay " + totalAfterDiscount;
        break;
    case 5:
        totalAfterDiscount = receipt - (receipt * discount5);
        message = "Your receipt was: " + receipt + " your discount is: " + discount5*100 + "%" + " You'll pay " + totalAfterDiscount;
        break;
    default:
        message = "Your receipt was: " + receipt + " your discount is: " + 0 + "%" + " you will pay: " + receipt;
}

console.log("Your Lucky number is: " + luckyNumber + " " + message);


// Second Exercise

console.log ("-- Second Exercise --");

var monthNumber = Math.floor(Math.random()* 12) +1;
var monthName;

switch (monthNumber) {
    case 1:
        monthName = "January";
        break;
    case 2:
        monthName = "February";
        break;
    case 3:
        monthName = "March";
        break;
    case 4:
        monthName = "April";
        break;
    case 5:
        monthName = "May";
        break;
    case 6:
        monthName = "June";
        break;
    case 7:
        monthName = "July";
        break;
    case 8:
        monthName = "August";
        break;
    case 9:
        monthName = "September";
        break;
    case 10:
        monthName = "October";
        break;
    case 11:
        monthName = "November";
        break;
    case 12:
        monthName = "December";
        break;
}

console.log (monthNumber + " " + monthName);