define([ "openlayers", "jquery" ], function(ol, $) {
	var map = null;

	$(document).bind(
			"init-map",
			function(event, div) {
				var divMap = $("<div/>").css("width", "100%").css("height",
						"100%").attr("id", "map");
				div.append(divMap);

				map = new OpenLayers.Map("map");
				var layer = new OpenLayers.Layer.WMS("OpenLayers WMS",
						"http://vmap0.tiles.osgeo.org/wms/vmap0", {
							layers : 'basic'
						});
				map.addLayer(layer);
				map.zoomToMaxExtent();
			});

	$(document).bind("add-layer", function(event, url, layerName) {
		var layer = new OpenLayers.Layer.WMS("WMS layer", url, {
			layers : layerName,
			transparent : true
		});
		if (map !== null) {
			map.addLayer(layer);
		}
	});

});