(function() {
    "use strict";

    // create a circle object
    var circle = {
        radius: 3,

        getArea: function () {
            return Math.PI * Math.pow(this.radius, 2);
        },

        logInfo: function (doRounding) {
            var area = this.getArea();
            // If doRounding is true, round the result to the nearest integer.
            // Otherwise, output the complete value
            if (doRounding){
                console.log("Area of a circle with radius: " + this.radius + ", is: " + Math.round(area));
            } else {
                console.log("Area of a circle with radius: " + this.radius + ", is: " + area);
            }
        }
    };

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);

    console.log("=======================================================");

    circle.radius = 5;

    // log info about the circle
    console.log("Raw circle information");
    circle.logInfo(false);
    console.log("Circle information rounded to the nearest whole number");
    circle.logInfo(true);
})();