function initMap(){
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 2,
      center: new google.maps.LatLng(35.55, -25.75),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var labels = ['Sydney', 'New York', 'Changsha', 'Singapore', 'Hanoi',
                  'Mexico City', 'Cancún', 'Perth'];
    var urls = ['https://en.wikipedia.org/wiki/Sydney',
                'https://en.wikipedia.org/wiki/New_York_City',
                'https://en.wikipedia.org/wiki/Changsha',
                'https://en.wikipedia.org/wiki/singapore',
                'https://en.wikipedia.org/wiki/Hanoi',
                'https://en.wikipedia.org/wiki/Mexico_City',
                'https://en.wikipedia.org/wiki/Canc%C3%BAn',
                'https://en.wikipedia.org/wiki/Perth'
                ]

    var markers = locations.map(function(location, i) {
          var marker = new google.maps.Marker({
            position: location,
            label: labels[i],
            url: urls[i]
          });
          google.maps.event.addListener(marker, 'click', function() {
      		window.location.href = markers[i].url;
      	  });
      	  return marker;
        });

    var markerCluster = new MarkerClusterer(map, markers,
    	{imagePath: 'https://developers.google.com/maps/documentation/javascript/examples/markerclusterer/m'}
    	);

    // for(var i in 2){
    // 	google.maps.event.addListener(markers[i], 'click', function() {
    //   	window.location.href = markers[i].url;
    // });
    // }

      }

    var locations = [
    	{lat: -33.868, lng: 151.209},
    	{lat: 40.712, lng: -74.006},
      {lat: 28.228, lng:112.938},
      {lat: 1.352, lng:103.819},
      {lat: 21.027, lng:105.834},
      {lat: 19.432, lng: -99.133},
      {lat: 21.161, lng: -86.851},
      {lat: -31.950, lng: 115.860}
    ]

initMap()

    

//     google.maps.event.addListener(marker, 'click', function() {
//       window.location.href = marker.url;
//     });
// }

 // var map = new google.maps.Map(document.getElementById('map'), {
 //      zoom: 2,
 //      center: new google.maps.LatLng(35.55, -25.75),
 //      mapTypeId: google.maps.MapTypeId.ROADMAP
 //    });

 //    var marker = new google.mapss.Marker({
 //      position: map.getCenter(),
 //      url: 'http://www.google.com/',
 //      map: map
 //    });

    // google.maps.event.addListener(marker, 'click', function() {
    //   window.location.href = marker.url;
    // });



