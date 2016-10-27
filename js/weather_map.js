
// API KEY: c5d1880499d15c30a82c4b04a976bfaa

function getWeatherForecast() {
    $.get("http://api.openweathermap.org/data/2.5/forecast/daily", {
        APPID: "c5d1880499d15c30a82c4b04a976bfaa",
        q:     "San Antonio, TX",
        units: "imperial"
    }).fail(function (error) {
        console.log(error);
    }).done(function(weatherForecast) {
        buildForecast(weatherForecast);
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

function buildCurrentWeather(weather) {
    console.log(weather);
    console.log(weather.clouds.all);
    var htmlWeatherContent = "";
    htmlWeatherContent += "<div class='col-xs-12'><div class='thumbnail'><h2 class='text-center'>"
        + weather.main.temp_max + "&deg;/ " + weather.main.temp_min + "&deg;</h2><img src='http://openweathermap.org/img/w/"
        + weather.weather[0].icon + ".png'><p class='text-center'><strong>Clouds: </strong>" + weather.clouds.all
        + "</p><p class='text-center'><strong>Humidity: </strong>" + weather.main.humidity +
        "</p><p class='text-center'><strong>Winds: </strong>" + weather.wind.speed +
        "</p><p class='text-center'><strong>Pressure: </strong>" + weather.main.pressure + "</p></div></div>";

    $("#currentWeather").html(htmlWeatherContent);
}


function getCurrentWeather() {
    $.get("http://api.openweathermap.org/data/2.5/weather", {
        APPID: "c5d1880499d15c30a82c4b04a976bfaa",
        q:     "San Antonio, TX",
        units: "imperial"
    }).fail(function (error) {
        console.log(error);
    }).done(function(currentWeather) {
        buildCurrentWeather(currentWeather);
    });
}

getCurrentWeather();
getWeatherForecast();



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

