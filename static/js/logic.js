// Creating map object
var map = L.map("map", {
  center: [ 39.8283, -98.5795],
  zoom: 3
});

// Adding tile layer
L.tileLayer("https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}", {
  attribution: "Map data &copy; <a href=\"https://www.openstreetmap.org/\">OpenStreetMap</a> contributors, <a href=\"https://creativecommons.org/licenses/by-sa/2.0/\">CC-BY-SA</a>, Imagery © <a href=\"https://www.mapbox.com/\">Mapbox</a>",
  maxZoom: 18,
  id: "mapbox.streets",
  accessToken: "pk.eyJ1Ijoic2hhcmdyMiIsImEiOiJjazJiMTZjOWc0ZXF1M25tdGIxbngzbzU3In0.2Q1CoZczQAGeZg02NNQ_6w"
}).addTo(map);


// Store our API endpoint inside queryUrl
url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/4.5_month.geojson"
// Perform a GET request to the query URL
// Grabbing our GeoJSON data..
d3.json(url, function(data) {
  // Creating a GeoJSON layer with the retrieved data
  var geojsonMarkerOptions = {
    radius: 8,
    fillColor: "#ff7800",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.8
};
L.geoJSON(data, {
    pointToLayer: function (feature, latlng) {
      return L.circleMarker(latlng, geojsonMarkerOptions);
    }
}).addTo(map);
});





