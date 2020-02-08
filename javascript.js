
var year = 2020;

$.ajax({
  url: "https://data.cityofchicago.org/resource/ijzp-q8t2.json?primary_type=HOMICIDE&year=" + year,
  type: "GET",
  data: {
    "$limit": 5000,
    "$$app_token": "os0hvOu9gzl0SK4Uo0V6gDTYX"
  }
}).done(function (data) {
  console.log(data);
  for (i = 0; i < data.length; i++) {
    var latLng = new google.maps.LatLng(data[i].latitude, data[i].longitude);

    var icon = {
      url: "https://image.flaticon.com/icons/svg/1030/1030345.svg",
      scaledSize: new google.maps.Size(20, 20),
      origin: new google.maps.Point(0, 0),
      anchor: new google.maps.Point(0, 0)
    };

    new google.maps.Marker({

      position: latLng,
      map: map,
      icon: icon,
    });
  }
});



//GMAPS GEOLOCATION FUNCTION
var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {

    center: { lat: 41.875754, lng: -87.623912 },
    zoom: 11

  });
  infoWindow = new google.maps.InfoWindow;
}

