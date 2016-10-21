 (function() {
    "use strict";

    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 16,
        center: new google.maps.LatLng(29.426791, -98.489602),
        mapTypeId: 'roadmap'
    });


    var iconBase = 'https://maps.google.com/mapfiles/kml/pal2/';
    var icons = {
        fastFood: {
            icon: iconBase + 'icon41.png'
        },
        coffee: {
            icon: iconBase + 'icon54.png'
        },
        expensive: {
            icon: iconBase + 'icon50.png'
        }
    };

    function addMarker(restaurant) {
        var marker = new google.maps.Marker({
            position: restaurant.position,
            icon: icons[restaurant.type].icon,
            map: map
        });
    }

    var restaurants = [
        {
            position: new google.maps.LatLng(29.426381, -98.487177),
            type: 'fastFood'
        }, {
            position: new google.maps.LatLng(29.426306, -98.490225),
            type: 'fastFood'
        },{
            position: new google.maps.LatLng(29.428076, -98.491559),
            type: 'coffee'
        }, {
            position: new google.maps.LatLng(29.426333, -98.491160),
            type: 'coffee'
        },{
            position: new google.maps.LatLng(29.427889, -98.489069),
            type: 'expensive'
        }, {
            position: new google.maps.LatLng(29.424301, -98.484349),
            type: 'expensive'
        }, {
            position: new google.maps.LatLng(29.424825, -98.491783),
            type: 'expensive'
        }
    ];

    for (var i = 0, restaurant; restaurant = restaurants[i]; i++) {
        addMarker(restaurant);
    }
})();
