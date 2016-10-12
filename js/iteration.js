/**
 * Created by oscarsoto on 10/12/16.
 */

'use strict';
// declare and initialize array
var shapes = ['square', 'rectangle', 'circle', 'triangle'];

// loop through the array and log the values using For Loop
for (var i = 0; i < shapes.length; i++) {
    console.log('The shape at index ' + i + ' is: ' + shapes[i]);
}

// loop through the array and log the values using Function
shapes.forEach(function (element, index, array) {
    console.log('The shape at index ' + index + ' is: ' + element);
});

