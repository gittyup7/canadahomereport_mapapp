// Set up Geoserver Request
	function geoserverRequest(){
		//Set up the wms request text variables
		/*var wmsText1 = "http://localhost:8080/geoserver/mapyyc/wms?service=WMS&version=1.1.0&request=GetMap&layers=
		var wmsText2 = &bbox=-114.280815124512%2C50.8403167724609%2C-113.851829528809%2C51.1036109924316&width=768&height=471&srs=EPSG%3A4326&format=application/openlayers";
		*/
		var layerArray=[];
        var wmsLayers = "";
		
		//See which links are active
		var links = document.querySelectorAll( 'a' );
				if(links !==null){
					for( var i=links.length; i--; ) {
						if(links[i].classList.contains("active")){
							
							layerArray.push(links[i].id);
						}
					}
				}
		//alert("Active links: "+ layerArray.toString());
		if (layerArray.length > 0){
			
			if(layerArray.toString().indexOf("safety") != -1){
				//Check community layers
				//alert(layerArray.toString());
                if(layerArray.toString().indexOf("c1") != -1){
                    wmsLayers = wmsLayers.concat("mapyyc:entertainment_attractions_point, ");
                }
                if(layerArray.toString().indexOf("c2") != -1){
                    wmsLayers = wmsLayers.concat("mapyyc:com_services_com_centers_point, ");
                }
                if(layerArray.toString().indexOf("c3") != -1){
                    wmsLayers = wmsLayers.concat("mapyyc:com_services_libraries_point, ");
                }
			}
			else if (layerArray.toString().indexOf("current-listings")!= -1){
				//Check current listing layers
				//alert(layerArray.toString());
				if(layerArray.toString().indexOf("cl1") != -1){
                    wmsLayers = wmsLayers.concat("mapyyc:mls_calgary_042620_geocoded, ");
                }
                if(layerArray.toString().indexOf("cl2") != -1){
                    wmsLayers = wmsLayers.concat("");
                }
                if(layerArray.toString().indexOf("cl3") != -1){
                    wmsLayers = wmsLayers.concat("");
                }
                    
				}
				else if (layerArray.toString().indexOf("services") != -1){
				    //Check Emergency Service layers
				    //alert(layerArray.toString());
				    if(layerArray.toString().indexOf("es1") != -1){
                    wmsLayers = wmsLayers.concat("mapyyc:emergency_police_stations_point, ");
                    }
                    if(layerArray.toString().indexOf("es2") != -1){
                    wmsLayers = wmsLayers.concat("mapyyc:emergency_fire_stations_point, ");
                    }
                    if(layerArray.toString().indexOf("es3") != -1){
                    wmsLayers = wmsLayers.concat("mapyyc:emergency_health_centers_point, ");
                    }
					if(layerArray.toString().indexOf("es4") != -1){
                    wmsLayers = wmsLayers.concat("mapyyc:emergency_hospitals_point, ");
                    }
                        
					}
					else if (layerArray.toString().indexOf("schools") != -1){
						//Check School layers
				        
				        if(layerArray.toString().indexOf("s1") != -1){
						wmsLayers = wmsLayers.concat("mapyyc:schools_elementary_point, ");
						}
						if(layerArray.toString().indexOf("s2") != -1){
						wmsLayers = wmsLayers.concat("mapyyc:schools_jr_high_point, ");
						}
						if(layerArray.toString().indexOf("s3") != -1){
						wmsLayers = wmsLayers.concat("mapyyc:schools_high_point, ");
						}
						if(layerArray.toString().indexOf("s4") != -1){
						wmsLayers = wmsLayers.concat("mapyyc:schools_post_sec_point, ");
						}
						/*if(layerArray.toString().indexOf("s5") != -1){
						wmsLayers = wmsLayers.concat("mapyyc:educ_school_bus_routes, ");
						}*/
                            
						}
						else if(layerArray.toString().indexOf("recreation") != -1){
							//Check Recreation layers
				            
							if(layerArray.toString().indexOf("r1") != -1){
							wmsLayers = wmsLayers.concat("mapyyc:rec_sports_group_polygon, ");
							}
							if(layerArray.toString().indexOf("r2") != -1){
							wmsLayers = wmsLayers.concat("mapyyc:rec_dog_parks_off_leash_polygons, ");
							}
							if(layerArray.toString().indexOf("r3") != -1){
							wmsLayers = wmsLayers.concat("mapyyc:rec_dog_parks_off_leash_polygons, ");
							}
							if(layerArray.toString().indexOf("r4") != -1){
							wmsLayers = wmsLayers.concat("mapyyc:rec_natural_areas_polygon, ");
							}
							if(layerArray.toString().indexOf("r5") != -1){
							wmsLayers = wmsLayers.concat("mapyyc:rec_parks_polygon, ");
							}
							if(layerArray.toString().indexOf("r6") != -1){
							wmsLayers = wmsLayers.concat("mapyyc:rec_paths_trails_line, ");
							}
                            
                            }
							else if(layerArray.toString().indexOf("transit") != -1){
								//Check Transit layers
				                if(layerArray.toString().indexOf("t1") != -1){
                                wmsLayers = wmsLayers.concat("mapyyc:transit_bus_stops_csv_pts, ");
                                }
                                if(layerArray.toString().indexOf("t2") != -1){
                                wmsLayers = wmsLayers.concat("mapyyc:transit_bus_max_routes_line_group, ");
                                }
                                if(layerArray.toString().indexOf("t3") != -1){
                                wmsLayers = wmsLayers.concat("mapyyc:transit_lrt_stops_csv_pts, ");
                                }
                                if(layerArray.toString().indexOf("t4") != -1){
                                    wmsLayers = wmsLayers.concat("mapyyc:transit_lrt_routes_line, ");
                                }
                                    
								}
								else if (layerArray.toString().indexOf("demographics") != -1){
									//Check Demographic layers
				                    if(layerArray.toString().indexOf("d1") != -1){
                                    wmsLayers = wmsLayers.concat("");
                                    }
                                    if(layerArray.toString().indexOf("d2") != -1){
                                    wmsLayers = wmsLayers.concat("");
                                    }
                                    if(layerArray.toString().indexOf("d3") != -1){
                                    wmsLayers = wmsLayers.concat("");
                                    }
                                    if(layerArray.toString().indexOf("d4") != -1){
                                    wmsLayers = wmsLayers.concat("");
                                    }
                                        
									}
									else if(layerArray.toString().indexOf("crime") != -1){
										  //Check Crime layers
				                            if(layerArray.toString().indexOf("cr1") != -1){
                                                wmsLayers = wmsLayers.concat("");
                                            }
                                            if(layerArray.toString().indexOf("cr2") != -1){
                                                wmsLayers = wmsLayers.concat("");
                                            }
                                            if(layerArray.toString().indexOf("cr3") != -1){
                                                wmsLayers = wmsLayers.concat("");
                                            }
                                            if(layerArray.toString().indexOf("cr4") != -1){
                                                wmsLayers = wmsLayers.concat("");
                                            }
										}
										else if(layerArray.toString().indexOf("shopping") != -1){
											//Check Shopping layers
				                                if(layerArray.toString().indexOf("sh1") != -1){
                                                    wmsLayers = wmsLayers.concat("");
                                                }
                                                if(layerArray.toString().indexOf("sh2") != -1){
                                                    wmsLayers = wmsLayers.concat("");
                                                }
                                                if(layerArray.toString().indexOf("sh3") != -1){
                                                    wmsLayers = wmsLayers.concat("");
                                                }
											}
											else if(layerArray.toString().indexOf("other") != -1){
												//Check Other layers
                                                    if(layerArray.toString().indexOf("o1") != -1){
                                                        wmsLayers = wmsLayers.concat("");
                                                    }
                                                    if(layerArray.toString().indexOf("o2") != -1){
                                                        wmsLayers = wmsLayers.concat("");
                                                    }
                                                    if(layerArray.toString().indexOf("o3") != -1){
                                                        wmsLayers = wmsLayers.concat("");
                                                    }
				
												}
												else{
													alert("Error: Layer not found.");						
												}
		}
						
											
		
		wmsLayers = wmsLayers.slice(0, -2);
		//alert(wmsLayers.concat("End"));
		wmsLayer = L.tileLayer.wms('http://mapyyc.gis-cdn.net/geoserver/mapyyc/wms?', {
			layers: wmsLayers,
			transparent: true,
			format: 'image/png'
		}).addTo(map);		
		
		//map.invalidateSize();
	}
