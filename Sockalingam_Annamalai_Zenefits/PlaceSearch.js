function initSearch(searchBox,places) {
    searchBox.addListener('places_changed', function() {
        places = searchBox.getPlaces();
        console.log(places);
        if (places.length == 0) {
            return;
        }
		//console.log(places);
		if(markers!=null){
        // Clear out the old markers.
        markers.forEach(function(marker) {
            marker.setMap(null);
        });
		markers = [];
		}
        console.log(places);
		
        // For each place, get the icon, name and location.
        bounds = new google.maps.LatLngBounds();
        places.forEach(function(place) {
            if (!place.geometry) {
                console.log("Returned place contains no geometry");
                return;
            }
                icon = {
                url: place.icon,
                size: new google.maps.Size(15, 15),
                origin: new google.maps.Point(0, 0),
                anchor: new google.maps.Point(17, 34),
                scaledSize: new google.maps.Size(25, 25)
            };

            // Create a marker for each place.
            markers.push(new google.maps.Marker({
                map: map,
                //icon:'http://maps.google.com/mapfiles/ms/icons/green-dot.png',
                title: place.name,
                rating: place.rating,
                icon: place.icon,
                geometry: place.geometry,
                animation: google.maps.Animation.DROP,
                position: place.geometry.location

            }));
            //console.log(place.name);
				
			            markers.forEach(function(marker) {
                
                $("#card1").click(function() {
                    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                    markers[0].setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png');
                    var latitude = markers[0].geometry.location.lat();
                    var longitude = markers[0].geometry.location.lng();
                    var d = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(33.4302373, -111.939487), new google.maps.LatLng(latitude, longitude)) / 1000).toFixed(2);
                    console.log(d);
						initGetDirection(latitude,longitude);
                    document.getElementById("floating-panel").innerHTML = markers[0].title + " is " + d + " miles from Zenefits";


                });
                $("#card2").click(function() {
                    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                    markers[1].setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png');
                    var latitude = markers[1].geometry.location.lat();
                    var longitude = markers[1].geometry.location.lng();
                    var d = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(33.4302373, -111.939487), new google.maps.LatLng(latitude, longitude)) / 1000).toFixed(2);
                    console.log(d);
					initGetDirection(latitude,longitude);


                  

                    document.getElementById("floating-panel").innerHTML = markers[1].title + " is " + d + " miles from Zenefits";


                });
                $("#card3").click(function() {
                    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                    markers[2].setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png');
                    var latitude = markers[2].geometry.location.lat();
                    var longitude = markers[2].geometry.location.lng();
                    var d = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(33.4302373, -111.939487), new google.maps.LatLng(latitude, longitude)) / 1000).toFixed(2);
                    console.log(d);
					initGetDirection(latitude,longitude);

                    document.getElementById("floating-panel").innerHTML = markers[2].title + " is " + d + " miles from Zenefits";
                });
                $("#card4").click(function() {
                    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                    markers[3].setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png');
                    var latitude = markers[3].geometry.location.lat();
                    var longitude = markers[3].geometry.location.lng();
                    var d = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(33.4302373, -111.939487), new google.maps.LatLng(latitude, longitude)) / 1000).toFixed(2);
                    console.log(d);
										initGetDirection(latitude,longitude);

                    document.getElementById("floating-panel").innerHTML = markers[3].title + " is " + d + " miles from Zenefits";
                });
                $("#card5").click(function() {
                    marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');
                    markers[4].setIcon('http://maps.google.com/mapfiles/ms/icons/orange-dot.png');
                    var latitude = markers[4].geometry.location.lat();
                    var longitude = markers[4].geometry.location.lng();
                    var d = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(33.4302373, -111.939487), new google.maps.LatLng(latitude, longitude)) / 1000).toFixed(2);
                    console.log(d);
										initGetDirection(latitude,longitude);

                    document.getElementById("floating-panel").innerHTML = markers[4].title + " is " + d + " miles from Zenefits";
                });
                
                marker.setIcon('http://maps.google.com/mapfiles/ms/icons/green-dot.png');

            });



            if (place.geometry.viewport) {
                // Only geocodes have viewport.
                bounds.union(place.geometry.viewport);
            } else {
                bounds.extend(place.geometry.location);
            }
        });
        map.fitBounds(bounds);
        //console.log(markers[4].title);
		
        document.getElementById("name1").innerHTML = markers[0].title;
        document.getElementById("rating").innerHTML = "Rating: " + markers[0].rating;
		if(markers[1] != null || markers[1] != null){
        document.getElementById("name2").innerHTML = markers[1].title;
        document.getElementById("rating2").innerHTML = "Rating: " + markers[1].rating;
		}
		else{
			document.getElementById("name2").innerHTML = " ";
			document.getElementById("rating2").innerHTML = " ";
			document.getElementById("name3").innerHTML = " ";
			document.getElementById("rating3").innerHTML = " ";
			document.getElementById("name4").innerHTML = " ";
			document.getElementById("rating4").innerHTML = " ";
			document.getElementById("name5").innerHTML = " ";
			document.getElementById("rating5").innerHTML = " ";
			places=[];
			initDataTable(places);
		}
		if(markers[2].title != null || markers[2].rating != null){
        document.getElementById("name3").innerHTML = markers[2].title;
        document.getElementById("rating3").innerHTML = "Rating: " + markers[2].rating;
		}
		if(markers[3].title != null || markers[3].rating != null){
        document.getElementById("name4").innerHTML = markers[3].title;
        document.getElementById("rating4").innerHTML = "Rating: " + markers[3].rating;
		}
		if(markers[4].title != null || markers[4].rating != null){
        document.getElementById("name5").innerHTML = markers[4].title;
        document.getElementById("rating5").innerHTML = "Rating: " + markers[4].rating;
		}
		initDataTable(places);
    });
}