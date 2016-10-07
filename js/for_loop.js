/**
 * Created by oscarsoto on 10/7/16.
 */
"use strict";
////////////////////////////////////////////
console.log("-- First Exercise --");

var string = "";
var zero = "0";

for (var i = 1; i <= 10; i++) {
    if (i == 10){
        string = zero.repeat(i);
    } else {
        string = i.toString().repeat(i);
    }
    console.log(string);
}

/////////// Another Way //////////////////

for (var i = 1; i <= 10; i++) {
    var string = i.toString();
    var lastCharacter = string[string.length -1];
    console.log(lastCharacter.repeat(i));
}



//////////////////////////////////////////
console.log("-- Second Exercise --");

var randomNumber = Math.floor(Math.random() * 10) + 1;
var result;
for(var multiplier = 1; multiplier <= 10; multiplier++) {
    result = randomNumber * multiplier;
    console.log(randomNumber + "x" + multiplier + "=" + result);
}
//////////////////////////////////////////
console.log("-- Third Exercise --");

var randomNumber1;
for (var z = 0; z < 10; z++){
    // Random number from 20 to 200
    randomNumber1 = Math.floor(Math.random() * 180) + 20; //Math.floor(Math.random() * ending) + starting
    if ((randomNumber1%2) == 0){
        console.log(randomNumber1 + " is even");
    } else {
        console.log(randomNumber1 + " is odd");
    }
}
//////////////////////////////////////////
console.log("-- Fourth Exercise --");

for (var y = 100; y >= 5; y-=5){
    console.log(y);
}