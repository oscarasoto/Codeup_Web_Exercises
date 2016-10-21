//<-- Script to show address on map -->

(function() {
    "use strict";

    // Set our map options
    var mapOptions = {
        // Set the zoom level
        zoom: 19,

        // This sets the center of the map at our location
        center: {
            lat:  29.426791,
            lng: -98.489602
        }
    };

    // GeoCoder
    // Set our address to geocode
    var address = "600 Navarro St #350, San Antonio, TX 78205";

    // Init geocoder object
    var geocoder = new google.maps.Geocoder();

    // Geocode our address
    geocoder.geocode({ "address": address }, function(results, status) {

        // Check for a successful result
        if (status == google.maps.GeocoderStatus.OK) {

            // Recenter the map over the address
            map.setCenter(results[0].geometry.location);

        } else {

            // Show an error message with the status if our request fails
            alert("Geocoding was not successful - STATUS: " + status);
        }

    });

    // Render the map
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);

    // Create lat and long for our marker position
    var codeup = { lat: 29.426791, lng: -98.489602 };

    // Add the marker to our existing map
    var marker = new google.maps.Marker({
        position: codeup,
        map: map,
        animation: google.maps.Animation.DROP
    });

    // Create a new infoWindow object with content
    var contentString = "Changing the world, one programmer at a time.";
    var infowindow = new google.maps.InfoWindow({
        content: contentString
    });
    marker.addListener('click', toggleBounce);

    function toggleBounce() {
        if (marker.getAnimation() !== null) {
            marker.setAnimation(null);
        } else {
            marker.setAnimation(google.maps.Animation.BOUNCE);
            // Open the window using our map and marker
            infowindow.open(map, marker);
        }
    }
 /*   // Create a new infoWindow object with content
    var infowindow = new google.maps.InfoWindow({
        content: "Changing the world, one programmer at a time."
    });

    marker.addListener("click", function () {
        // Open the window using our map and marker
        infowindow.open(map, marker);
    });*/

})();