(function(){
    "use strict";

    // TODO: Create person object
    // var person = todo;

    var person = {};

    // TODO: Create firstName and lastName properties in your person object; assign your name to them
    person = {
        "firstName": "Oscar",
        "lastName": "Soto"
    };
    console.log(person);
    // TODO: Add a sayHello method to the person object that
    //       alerts a greeting using the firstName and lastName properties

    // Say hello from the person object.
    // person.sayHello();
    person.sayHello = function () {
        alert("Hello " + person.firstName + " " + person.lastName);
            };

    person.sayHello();
    console.log(person);

})();