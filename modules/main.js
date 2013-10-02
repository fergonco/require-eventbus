require
		.config({
			baseUrl : "modules",
			paths : {
				"jquery" : "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
				"openlayers" : "http://openlayers.org/dev/OpenLayers",
				"leaflet" : "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet"
			}
		});

require([ "jquery", "css-loader", "layout", "init-layers" ], function($) {
});
