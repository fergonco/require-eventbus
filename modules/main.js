require
		.config({
			baseUrl : "modules",
			paths : {
				"jquery" : "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
				"jquery-ui" : "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
				"openlayers" : "http://openlayers.org/dev/OpenLayers",
				"leaflet" : "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet"
			}
		});

require([ "jquery", "css-loader", "ui" ], function($) {
	$(document).trigger(
			"css-load",
			"http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/"
					+ "smoothness/jquery-ui.min.css");
	$(document).bind("add-layer", function(event) {
		$("body").append($("<div>").html("amazing design dude!"));
	});
});
