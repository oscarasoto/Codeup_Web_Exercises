/**
 * Created by Oscar Soto on 10/7/16.
 */

"use strict";

console.log("-- First Exercise --");



// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
var cones;
var countConesSold = 0;
var countConesLeft = allCones;

console.log("Cones to sell " + allCones);

do {
// This is how you get a random number between 1 and 5
    cones = Math.floor(Math.random() * 5) + 1;

    if (cones <= countConesLeft) {          // If I have enough cones available
        console.log(cones + " cones sold"); // Sell the cones
        countConesLeft -= cones; //Reduce amount of cones available
        countConesSold += cones; //Increase amount of cones sold
        console.log("I have sold " + countConesSold + " I only have left " + countConesLeft);
    } else {                        // Try again
        console.log("Cannot sell you " + cones + " I only have " + countConesLeft);
    }


} while (countConesSold < allCones);

console.log("Cones to sell " + allCones);
console.log("Yay! I sold them all! " + countConesSold);



console.log("-- Second Exercise --");

var counter = 2;
while (counter <= 65536) {
    console.log(counter);
    counter += counter;
}

console.log("-- Third Exercise --");

var bottlesOfBeer = 99;

while (bottlesOfBeer > 0) {
    if (bottlesOfBeer == 2){
        console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer." );
        console.log("Take one down and pass it around, " + (bottlesOfBeer - 1) + " bottle of beer on the wall.");
    } else if (bottlesOfBeer == 1) {
        console.log(bottlesOfBeer + " bottle of beer on the wall, " + bottlesOfBeer + " bottle of beer.");
        console.log("Take one down and pass it around, no more bottles of beer on the wall.");
    } else {
        console.log(bottlesOfBeer + " bottles of beer on the wall, " + bottlesOfBeer + " bottles of beer." );
        console.log("Take one down and pass it around, " + (bottlesOfBeer - 1) + " bottles of beer on the wall.");
    }
    bottlesOfBeer -= 1;
};

console.log("No more bottles of beer on the wall, no more bottles of beer. " +
    "Go to the store and buy some more, 99 bottles of beer on the wall");