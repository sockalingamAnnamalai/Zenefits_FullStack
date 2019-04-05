 
function initGetDirection(latitude,longitude) {
                   var directionsService = new google.maps.DirectionsService();

                    var directionsRequest = {
                        origin: new google.maps.LatLng(33.4302373, -111.939487),
                        destination: new google.maps.LatLng(latitude, longitude),
                        travelMode: google.maps.DirectionsTravelMode.DRIVING,
                        unitSystem: google.maps.UnitSystem.METRIC
                    };
                    directionsService.route(
                        directionsRequest,
                        function(response, status) {
                            if (status == google.maps.DirectionsStatus.OK) {
                                if (directionDisplay != null) {
                                    directionDisplay.set('directions', null);
                                }
                                directionDisplay = new google.maps.DirectionsRenderer({
                                    map: map,
                                    directions: response
                                });
                            } else
                                $("#lblError").append("Unable To Find Root");
                        }

                    );
					}