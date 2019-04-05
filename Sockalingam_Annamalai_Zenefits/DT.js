function initDataTable(places) {
    console.log(places);
    $(document).ready(function() {
            var table = $('#example').DataTable({
                    "searching": false,
                    "destroy": true,
                    "bLengthChange": false,
                    data: places,
                    "columns": [{
                            "data": "name",
                            "title": "Name"
                        },
                        {
                            "data": "formatted_address",
                            "title": "Address"
                        },

                        {
                            "data": "rating",
                            "title": "Rating"
                        },
                        //{ "data": "opening_hours.open_now","defaultContent": "<i>Not set</i>", "title": "Is Open"  },
                        {
                            "data": null,
                            "defaultContent": "<i>Not set</i>",
                            "title": "Is Open",
                            "render": function(data, type, row, meta) {
                                if (true == true) {
                                    return '<i style="color:green;" class="fas fa-check-circle"></i>'
                                } else {
                                    return '<i style="color:red;" class="fas fa-times-circle"></i>'
                                }
						}},
                            {
                                "data": "geometry.location.lat",
                                "defaultContent": "<i>Not set</i>",
                                "visible": false
                            },
                            {
                                "data": "geometry.location.lng",
                                "defaultContent": "<i>Not set</i>",
                                "visible": false
                            },
                            {
                                "className": 'takemethere',
                                "title": "Take me There",
                                "orderable": false,
                                "data": null,
                                "render": function(data, type, row, meta) {
                                    return '<button style="cursor:pointer;"><i style="color:black;" class="fas fa-car"></i></button>';
                                }
                            }
                        ],
                        "columnDefs": [{
                            "className": "dt-center",
                            "targets": "_all"
                        }]
                    });

                $('#example tbody').on('click', 'tr', function() {
                    var lng = table.cell(this, 5).data();
                    var lat = table.cell(this, 4).data();
                    //var currentRow = $(this).closest("tr");
                    //var data = $('#example').DataTable().row(currentRow).data().id;
                    //var res = data["geometry"];
                    //var res1 = res['viewport'];
                    //var latt = res1['ga'];
                    //var lat = latt['j'];
                    //var lngg = res1['ma'];
                    //var lng = lngg['j'];
                    //console.log(data);
                    var a = (google.maps.geometry.spherical.computeDistanceBetween(new google.maps.LatLng(33.4302373, -111.939487), new google.maps.LatLng(lat, lng)) / 1000).toFixed(2);
                    console.log(a);
                    initGetDirection(lat, lng);

                    document.getElementById("floating-panel").innerHTML = table.cell(this, 0).data() + " is " + a + " miles from Zenefits";

                });

            });
    }