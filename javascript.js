
var year = 2020;

$.ajax({
  url: "https://data.cityofchicago.org/resource/ijzp-q8t2.json?primary_type=HOMICIDE&year="+year,
  type: "GET",
  data: {
    "$limit" : 5000,
    "$$app_token" : "os0hvOu9gzl0SK4Uo0V6gDTYX"
  }
}).done(function(data) {
console.log(data);
  for(i=0;i<data.length;i++){
      var latLng = new google.maps.LatLng(data[i].latitude,data[i].longitude);
      var icon = {
        url: "https://image.flaticon.com/icons/svg/477/477155.svg",
        scaledSize: new google.maps.Size(20,20),
        origin: new google.maps.Point(0,0),
        anchor: new google.maps.Point(0,0)
      };
      var newPin = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: icon,
      });
      console.log(newPin)
  }
});



//GMAPS GEOLOCATION FUNCTION
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.8781, lng: -87.6298},
    zoom: 9
  });
  infoWindow = new google.maps.InfoWindow;


  // Try HTML5 geolocation.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var pos = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      infoWindow.setPosition(pos);
      infoWindow.setContent('Location found.');
      infoWindow.open(map);
      map.setCenter(pos);
    }, function () {
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



// var latitude = 30
// var longitude = -90
// var distance = 500
// var page = 1


// var queryURL =
//   "https://api.crimeometer.com/v1/incidents/crowdsourced-raw-data?city_key=&lat=" + latitude + "&lon=" + latitude + "&distance=" + distance + "mi&datetime_ini=2010-01-07T00:00:00.000Z&datetime_end=2020-02-06T00:00:00.000Z&page=2"
// // "https://api.crimeometer.com/v1/incidents/raw-data-coverage"

// console.log(queryURL)

// $.ajax({
//   url: queryURL,
//   method: "GET",
//   headers: {
//     'Content-Type': 'application/json',
//     "x-api-key": "k3syy8bIYK9vFJwwn43zH3dGhrUPPbLya49c1hi8"
//   },
//   crossDomain: false
// }).then(function (response) {
//   console.log(response)
//   for (i = 0; response.incidents.length; i++) {
//     console.log(i)
//     console.log(response.incidents[i].incident_offense)
//   }
// })