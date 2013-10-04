require.config({
	baseUrl : "modules",
	paths : {
		"jquery" : "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
		"jquery-ui" : "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
		"openlayers" : "http://openlayers.org/dev/OpenLayers",
		"leaflet" : "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet"
	}
});

require([ "jquery", "iso8601", "css-loader", "layout", "init-layers", "customization" ], function($) {
	$(document).trigger("css-load", "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.min.css");

	/*
	 * A module should receive the add-layer and analyze the timestamps to
	 * produce these events
	 */
	$(document).trigger("time-slider.add-timestamp.unique-slider", "12-Jan-2003");
	$(document).trigger("time-slider.add-timestamp.unique-slider", "12-Ago-2000");
});
