$(".dropdown-trigger").dropdown();

var year = 2020;
var markersArray = [];

function clearOverlays() {

  for (var i = 0; i < markersArray.length; i++ ) {

    markersArray[i].setMap(null);

  }

  markersArray.length = 0;

}

function renderChicago(){
  clearOverlays();

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
      var marker = new google.maps.Marker({
        position: latLng,
        map: map,
        icon: icon,
      })
      markersArray.push(marker);
    }

  });
}

$(".year").on("click", function(){

  year = $(this).text()
  
  renderChicago();
})

$("#Chicago").on("click", renderChicago())


//$("#Houston").on("click",function(){
//  var settings = {
//    "url": "https://cors-anywhere.herokuapp.com/https://api2.commandcentral.com/api/ce-portal-service/v1.0/public/incidents",
//    "method": "GET",
//    "timeout": 0,
//    "headers": {
//      "Content-Type": "application/json"
//    },
//    "data": JSON.stringify({"limit":2000,"offset":0,"geoJson":{"type":"Polygon","coordinates":[[[-95.21193246938286,29.633016298340156],[-95.49414377309341,29.633016298340156],[-95.49414377309341,29.876231861139374],[-95.21193246938286,29.876231861139374],[-95.21193246938286,29.633016298340156]]]},"projection":true,"propertyMap":{"toDate":"2019-12-31T23:59:59.999Z","fromDate":"2019-02-09T00:00:00.000Z","pageSize":"2000","parentIncidentTypeIds":"104","zoomLevel":"12","latitude":"29.75469785392927","longitude":"-95.35303812123814","days":"1,2,3,4,5,6,7","startHour":"0","endHour":"24","timezone":"+00:00","agencyIds":"108041,102850,99615,92757,84016,1281,1188,1143,1133,956"}}),
//  };
  
//  $.ajax(settings).done(function (response) {
 //   console.log(response);
 // });
//})


var map, infoWindow;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 41.875754, lng: -87.623912 },
    zoom: 11
  });
  infoWindow = new google.maps.InfoWindow;
}

// MONSTER MASH MUSIC
var myMusic= document.getElementById("music");
function play() {
myMusic.play();
}

function pause() {
myMusic.pause();
}


