
// API KEY: c5d1880499d15c30a82c4b04a976bfaa

var weatherForecast;
function getWeatherForecast() {
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "c5d1880499d15c30a82c4b04a976bfaa",
        q:     "San Antonio, TX",
        units: "imperial"
    }).fail(function (error) {
        console.log(error);
    }).done(function(data) {
        // console.log(data);
        // console.log(data.list[0].temp.day);
        weatherForecast = data;
        buildForecast(weatherForecast);
        getWeather()
    });
}

function buildForecast(weatherForecast) {
    var htmlWeatherContent = "";
    weatherForecast.list.forEach(function (day, index) {
        if (index < 3){
            htmlWeatherContent += "<div class='col-xs-4'><div class='thumbnail'><h2 class='text-center'>"
                + day.temp.max + "&deg;/ " + day.temp.min + "&deg;</h2><img src='http://openweathermap.org/img/w/"
                + day.weather[0].icon + ".png'><p class='text-center'><strong>Clouds: </strong>" + day.clouds
                + "</p><p class='text-center'><strong>Humidity: </strong>" + day.humidity +
                "</p><p class='text-center'><strong>Winds: </strong>" + day.speed +
                "</p><p class='text-center'><strong>Pressure: </strong>" + day.pressure + "</p></div></div>"
        }

    });
    $("#weatherForecast").html(htmlWeatherContent);
}


function getWeather() {
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: "c5d1880499d15c30a82c4b04a976bfaa",
        q:     "San Antonio, TX",
        units: "imperial"
    }).fail(function (error) {
        console.log(error);
    }).done(function(data) {
        console.log(data);
        // console.log(data.list[0].temp.day);

    });
}


/*
 <div class="col-xs-4">
 <div class="thumbnail">
 <h2 class="text-center">53 &deg;/ 42 &deg;</h2>
 <img src="http://openweathermap.org/img/w/01n.png">
 <p class="text-center"><strong>Clouds: </strong>overcast clouds</p>
 <p class='text-center'><strong>Humidity: </strong>52</p>
 <p class='text-center'><strong>Winds: </strong>6</p>
 <p class='text-center'><strong>Pressure: </strong>1025.93</p>
 </div>
 </div>
*/

getWeatherForecast()