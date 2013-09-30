define([ "jquery" ], function(ol) {
	var divLayers = null;

	$(document).bind("init-layers", function(event, div) {
		divLayers = $("<div/>").append("<ul/>");
		div.append(divLayers);
	});

	$(document).bind("add-layer", function(event, url, layerName) {
		if (divLayers !== null) {
			divLayers.append($("<li/>").html(layerName));
		}
	});

});