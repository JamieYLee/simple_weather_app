$.get('../../components/header.html', function(response) {
  $("#nav").html(response);
});

$("#weather-info").css("display", "none");

$("#search_weather").submit(event => {
  event.preventDefault();
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

    $("#weather-info").css("display", "block");
  }

  $.get(url, data, showWeather);
});
