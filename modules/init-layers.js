/*
 * Queries the server and launches add-group and add-layer events
 */
define([ "jquery" ], function($) {
	$(document).trigger("add-layer", {
		"url" : "http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx",
		"layerName" : "Catastro",
		"timestamps" : [ "2000", "2005" ]
	});
});