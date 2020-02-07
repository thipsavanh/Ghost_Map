
var latitude = 30
var longitude = -90
var distance = 500
var page = 1

for(i=0;i<10;i++){
    var queryURL = "https://cors-anywhere.herokuapp.com/"+
    "https://api.crimeometer.com/v1/incidents/crowdsourced-raw-data?city_key=&lat="+ latitude + "&lon=" + latitude + "&distance=" + distance + "mi&datetime_ini=2010-01-07T00:00:00.000Z&datetime_end=2020-02-06T00:00:00.000Z&page=2"
    // "https://api.crimeometer.com/v1/incidents/raw-data-coverage"
    
    $.ajax({
        url: queryURL,
        method: "GET",
        headers: {
        'Content-Type':'application/json',
        "x-api-key":"k3syy8bIYK9vFJwwn43zH3dGhrUPPbLya49c1hi8"}
        }).then(function (response) {
        console.log(response)
        for(i=0;response.incidents.length;i++){
            console.log(i)
            console.log(response.incidents[i].incident_offense)
        }
    })
 distance += 200;   
 page++; 
}

=======
//GMAPS GEOLOCATION FUNCTION
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: -34.397, lng: 150.644},
    zoom: 6
  });
  infoWindow = new google.maps.InfoWindow;


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function() {
      handleLocationError(true, infoWindow, map.getCenter());
    });
  } else {
    // Browser doesn't support Geolocation
    handleLocationError(false, infoWindow, map.getCenter());
  }
}

function handleLocationError(browserHasGeolocation, infoWindow, pos) {
  infoWindow.setPosition(pos);
  infoWindow.setContent(browserHasGeolocation ?
                        'Error: The Geolocation service failed.' :
                        'Error: Your browser doesn\'t support geolocation.');
  infoWindow.open(map);
}