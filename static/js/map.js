setTimeout(function(){
  $("#home_link").removeClass("active");
  $("#anm_link").removeClass("active");
  $("#emp_link").removeClass("active");
  $("#map_link").addClass("active");
}, 1000);

$("#search_location").submit(event => {
  // stop the current basic movement
  event.preventDefault();
  // get a city data value from input
  var searchTerm = $("#loc_search").val();
  showMap(searchTerm);
});

function showMap(searchTerm="Boston"){
  var map;
  function initMap(response) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: response.coord.lat, lng: response.coord.lon},
      zoom: 8
    });
  }

  var url = 'http://api.openweathermap.org/data/2.5/weather';
  var data = {
    q: searchTerm,
    APPID: '//'
  }

  $.get(url, data, initMap);
}
