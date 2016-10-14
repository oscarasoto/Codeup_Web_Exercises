'use strict';
/*
 * How many times a lucky number is repeated for every 100 customers?
 */
var luckyNumber;
var i = 0;
var luckyNumbersArray = [0,0,0,0,0,0];  //replaced a switch with a LOOKUP array

while (i < 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    luckyNumbersArray[luckyNumber]++;
    i++;
}
//console.log(luckyNumbersArray);
// var total = 0;
luckyNumbersArray.forEach(function (value, index) {
    console.log(index + " appeared " + value + " times");
    // total += value;
});
// console.log(total);


/* === Brute force way ===
 var zero = 0;
 var one = 0;
 var two = 0;
 var three = 0;
 var four = 0;
 var five = 0;


 while (i < 100) {
     luckyNumber = Math.floor(Math.random()* 6);
     // What do I need here?
     switch (luckyNumber){
         case 0:
             zero++;
             break;
         case 1:
             one++;
             break;
         case 2:
             two++;
             break;
         case 3:
             three++;
             break;
         case 4:
             four++;
             break;
         case 5:
             five++;
             break;
     }
     i++;
 }

 console.log("0 appeared " + zero + " times");
 console.log("1 appeared " + one + " times");
 console.log("2 appeared " + two + " times");
 console.log("3 appeared " + three + " times");
 console.log("4 appeared " + four + " times");
 console.log("5 appeared " + five + " times");
 var total = zero + one + two + three + four + five;
 console.log("Total of lucky numbers is = " + total);
 */


// === Original Problem ===
/*
'use strict';

/!*
 * How many times a lucky number is repeated for every 100 customers?
 *!/
var luckyNumber;
var i = 1;

while (i < 100) {
    luckyNumber = Math.floor(Math.random()* 6);
    // What do I need here?
}

// The output should be something like

// 0 appeared 10 times
// 1 appeared 20 times
// 2 appeared 15 times
// 3 appeared 35 times
// 4 appeared 4 times
// 5 appeared 16 times

// The total should be 100*/
