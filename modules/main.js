require.config({
	baseUrl : "modules",
	paths : {
		"jquery" : "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
		"jquery-ui" : "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
		"openlayers" : "http://openlayers.org/dev/OpenLayers",
		"leaflet" : "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet"
	}
});

require([ "jquery", "iso8601", "css-loader", "layout", "customization", "error-management" ], function($) {
	$(document).trigger("css-load", "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.min.css");
	/*
	 * Queries the server and launches add-group and add-layer events
	 */
	$(document).trigger("add-group", {
		"id" : "basic",
		"name" : "Basic layers"
	});
	$(document).trigger("add-group", {
		"id" : "drc",
		"name" : "République Démocratique du Congo"
	});
	$(document).trigger("add-layer", {
		"id" : "blumarble",
		"groupId" : "basic",
		"url" : "http://rdc-snsf.org/diss_geoserver/wms",
		"wmsName" : "common:blue_marble",
		"name" : "Blue marble",
		"infoLink" : "http://rdc-snsf.org/static/loc/en/html/bluemarble_def.html",
		"visible" : "true"
	});
	$(document).trigger("add-layer", {
		"id" : "forest_classification",
		"groupId" : "drc",
		"url" : "http://rdc-snsf.org/diss_geoserver/wms",
		"wmsName" : "drc:facet_forest_classification",
		"name" : "FACET Forest Classification",
		"timestamps" : [ "2000", "2003" ],
		"visible" : false
	});

	$(document).trigger("initial-zoom");
});
