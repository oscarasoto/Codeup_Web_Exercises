(function(){
    "use strict";

    var planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    var planetsArray;

    // TODO: Convert planetsString to an array, save it to planetsArray.

    planetsArray = planetsString.split("|");

    console.log(planetsArray);

    // TODO: Create a string with <br> tags between each planet. console.log() your results.

    planetsString = planetsArray.join("<br>");
    console.log(planetsString);

    //       Why might this be useful?

    // Bonus: Create a second string that would display your planets in an unordered list.
    //        You will need an opening AND closing <ul> tags around the entire string, and <li> tags around each planet.
    //        console.log() your results.

    planetsString = "Mercury|Venus|Earth|Mars|Jupiter|Saturn|Uranus|Neptune";
    planetsArray = planetsString.split("|");

    var planetsList = "<ul><li>" + planetsArray.join("</li><li>") + "</li></ul>";

    console.log(planetsList);


})();