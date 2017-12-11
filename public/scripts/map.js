var center = new google.maps.LatLng(35.55, -25.75)
var markersData;
var locations;

var map;
var zoomlevel = 2;


var updateMap = function(){
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: zoomlevel,
    center: center,
    mapTypeId: google.maps.MapTypeId.ROADMAP
  });
}

updateMap();

var updateMarkers = function(){
  var markers = locations.map(function(location, i) {
    var marker = new google.maps.Marker({
      position: location,
      label: markersData[i].label,
    });
    var infowindow = new google.maps.InfoWindow({
      content: markersData[i].content,
    });
    google.maps.event.addListener(marker, 'mouseover', function(){
      infowindow.open(marker.get('map'), marker);
    });
    return marker;
  });

  var markerCluster = new MarkerClusterer(map, markers,
    {imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}
  );
}




var updateMarkersData = function(data){
  markersData = data;
}

var updateLocations = function(newlocations){
  locations = newlocations;
}



$("#myloc").click(function () {
  $.ajax({
    url: 'http://localhost:5000/map/myloc',
    type: 'GET',
    success: function(data){
      zoomlevel = 2;
      center = new google.maps.LatLng(35.55, -25.75);
      updateMap();
      var newlocation = [];
      var newmarkersData = [];

      data.map(function(newmarkerData){
        newlocation.push(newmarkerData.suit.location);
        newmarkersData.push(newmarkerData.suit.markerData);
      });
      updateMarkersData(newmarkersData);
      updateLocations(newlocation);
      updateMarkers();
    }
  });
});

$('#Manhattan').click(function(){
    $.ajax({
    url: 'http://localhost:5000/map/Manhattan',
    type: 'GET',
    success: function(data){
      center = center = new google.maps.LatLng(40.712,-74.006);
      zoomlevel = 13;
      updateMap();
      var newlocation = [];
      var newmarkersData = [];

      data.map(function(newmarkerData){
        newlocation.push(newmarkerData.suit.location);
        newmarkersData.push(newmarkerData.suit.markerData);
      });
      updateMarkersData(newmarkersData);
      updateLocations(newlocation);
      updateMarkers();
    }
  });
});

    




