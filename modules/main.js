require.config({
	baseUrl : "modules",
	paths : {
		"jquery" : "http://ajax.googleapis.com/ajax/libs/jquery/2.0.3/jquery.min",
		"jquery-ui" : "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/jquery-ui.min",
		"openlayers" : "http://openlayers.org/dev/OpenLayers",
		"leaflet" : "http://cdn.leafletjs.com/leaflet-0.6.4/leaflet"
	}
});

require([ "jquery", "iso8601", "css-loader", "layout", "customization" ], function($) {
	$(document).trigger("css-load", "http://ajax.googleapis.com/ajax/libs/jqueryui/1.10.3/themes/smoothness/jquery-ui.min.css");
	/*
	 * Queries the server and launches add-group and add-layer events
	 */
	$(document).trigger("add-layer", {
		"url" : "http://vmap0.tiles.osgeo.org/wms/vmap0",
		"wmsName" : "basic",
		"name" : "Countries",
		"timestamps" : [ "2000", "2003" ]
	});
	$(document).trigger("add-layer", {
		"url" : "http://www.cartociudad.es/wms/CARTOCIUDAD/CARTOCIUDAD?",
		"wmsName" : "FondoUrbano",
		"name" : "Regions of Spain",
		"infoLink" : "http://rdc-snsf.org/static/loc/en/html/bluemarble_def.html",
		"timestamps" : [ "2000", "2005" ]
	});
	// $(document).trigger("add-layer", {
	// "url" : "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
	// "wmsName" : "Catastro",
	// "name": "Cadastrial data of Spain",
	// "infoLink" :
	// "http://rdc-snsf.org/static/loc/en/html/bluemarble_def.html",
	// "timestamps" : [ "2000", "2005" ]
	// });

	$(document).trigger("initial-zoom");
});
