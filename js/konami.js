"use strict";

var soundObject = document.createElement("audio");
soundObject.src= "assets/thunder.mp3";
soundObject.volume=0.9;
soundObject.autoPlay=false;
soundObject.preLoad=true;

// Solution using objects and to work any time user enters the code
// Konami code = "↑ ↑ ↓ ↓ ← → ← → b a enter"
// 38+ 38+ 40+ 40+ 37+ 39+ 37+ 39+ 66+ 65+ 13 = 452

var keys = {
    up: 38,
    down: 40,
    left: 37,
    right:39,
    b: 66,
    a: 65,
    enter: 13
};

var konamiCode = [
    keys.up,
    keys.up,
    keys.down,
    keys.down,
    keys.left,
    keys.right,
    keys.left,
    keys.right,
    keys.b,
    keys.a,
    keys.enter
];

var counter = 0;

$(document).keyup(function(event){
    if (event.keyCode == konamiCode[counter]) {
        counter++;
    } else {
        counter = 0;
    }
    if (konamiCode.length == counter) {
        soundObject.play();
        alert("You have added 30 lives!");
        $("body").css("background-color","yellow");
    }

});

// Solution that will work only at the beginning of the page

// var konamiCode = 0;
/*$(document).keyup(function(event){
 konamiCode += event.keyCode;
 /!*console.log(event.keyCode);
 console.log(konamiCode);*!/

 if (konamiCode == 452) {
 soundObject.play();
 alert("You have added 30 lives!");
 $("body").css("background-color","yellow");
 $(document).off("keyup");
 }
 });*/