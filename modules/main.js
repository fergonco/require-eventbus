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

/*
 * Requirejs does not load css. Either we put it here, either in the HTML.
 */
var link = document.createElement("link");
link.type = "text/css";
link.rel = "stylesheet";
link.href = "http://ajax.googleapis.com/ajax/libs/"
		+ "jqueryui/1.10.3/themes/smoothness/jquery-ui.min.css";
document.getElementsByTagName("head")[0].appendChild(link);

/*
 * Initialize
 */
require([ "ui" ], function() {
	console.log("ui installed");
});

require([ "jquery" ], function($) {
	$(document).bind("add-layer", function(event) {
		$("body").append($("<div>").html("amazing design dude!"));
	});
});
