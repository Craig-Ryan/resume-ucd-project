function initMap() {
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 2,
    center: {
      lat: 46.619261,
      lng: -33.134766,
    },
  });

  var labels = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  var locations = [
    { lat: 40.785091, lng: -73.968285 },
    { lat: 41.084045, lng: -73.874245 },
    { lat: 40.754932, lng: -73.984016 },
  ];

  var markers = locations.map(function (location, i) {
    //this is a JS map function similar to a for each function - returns an array with the results of looping thru each item in our array - can take 3 arguments: location - current value of where we are in the array as we're looping thru. i - index no of where we currently are in array
    return new google.maps.Marker({
      position: location, //position value is set to current location and a label set to i % labels.length - this allows us to get one of our labels out of the string we've created.
      // The reason for using % operand is so that if we have more than 26 locations, then it will loop around to the start again and from z back to a without returning an error.
      label: labels[i % labels.length],
    });
  });

  // Add a marker clusterer to manage the markers.
  var markerCluster = new MarkerClusterer(map, markers, {
    imagePath:
      "https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m",
  });
}
