(function() {
    "use strict";

    var detonationTimer = 5;



    function updateTimer() {
        console.log (detonationTimer);
        if (detonationTimer == 0) {
            alert('EXTERMINATE!');
            document.body.innerHTML = '';
        } else if (detonationTimer > 0) {
            document.getElementById('timer').innerHTML = detonationTimer;
        }

        detonationTimer--;
    }

    var intervalID = setInterval(updateTimer, 1000);

    function defuseTheBOM() {
        clearInterval(intervalID);
    }

    // Don't modify anything below this line!
    //
    // This causes the defuseTheBOM() function to be called
    // when the "defuser" button is clicked.
    // We will learn about events in the DOM lessons
    var defuser = document.getElementById('defuser');
    defuser.addEventListener('click', defuseTheBOM);
})();
