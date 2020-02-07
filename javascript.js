var apiKey = "AIzaSyDv1x2CyzV8gMN5jvG0An_acinRQ-TF5IA"
var queryURL = "https://maps.googleapis.com/maps/api/js?key=" + apiKey + "&callback=initMap"

$.ajax({
    url: queryURL,
    method: "GET"
}).then(function(response){
    console.log(response);
})