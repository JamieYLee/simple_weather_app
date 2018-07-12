// calling header.html
$.get('../../components/header.html', function(response) {
  $("#nav").html(response);
});

// showing no contents before city is entered
$("#weather-info").css("display", "none");

// events after city name completed
$("#search_weather").submit(event => {
  // stop the current basic movement
  event.preventDefault();
  // get a city data value from input
  var searchTerm = $("#city_search").val();
  console.log(searchTerm);

  var url = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q: searchTerm,
    APPID: '2899318099685a1995a99a5538d3c3ae'
  }

  function convertDeg(degree){
    return (degree - 273).toFixed(2);
  }

  function showWeather(response){
    $("#city_name").text(response.name + ' , ' + response.sys.country);
    $("#high").html(convertDeg(response.main.temp_max) + "&deg");
    $("#low").html(convertDeg(response.main.temp_min) + "&deg");
    $("#forecast").html(response.weather[0].main);
    $("#humidity").html(response.main.humidity + "%");

    // click the button one more time and hide the result
    $("#weather-info").css("display", "block");
  }

  $.get(url, data, showWeather);
});
