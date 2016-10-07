/**
 * Created by oscarsoto on 10/7/16.
 */

"use strict";

console.log("-- First Exercise --");



// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;

var countConesSold = 0;
var countConesLeft = allCones;

console.log("Cones to sell " + allCones);

do {
// This is how you get a random number between 1 and 5
    var cones = Math.floor(Math.random() * 5) + 1;

    if ( cones <= countConesLeft){
        console.log(cones + " cones sold"); // Sell the cones
        countConesLeft -= cones; //Reduce amount of cones available
        countConesSold += cones; //Increase amount of cones sold
        console.log("I have sold " +  countConesSold + " I have left " + countConesLeft);
    } else {
        console.log ("Cannot sell you " + cones + " I only have " + countConesLeft);
    }


} while ( countConesSold < allCones);

console.log("Cones to sell " + allCones);
console.log("Yay! I sold them all!");



console.log("-- Second Exercise --");

var counter = 2;
while (counter <= 65536){
    console.log(counter);
    counter += counter;
}