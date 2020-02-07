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



