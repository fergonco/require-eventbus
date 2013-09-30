require([ "jquery", "newLayer", "olmap", "layers" ], function($, newLayer, map,
		layers) {
	var body = $("body");
	var top = $("<div/>").attr("id", "top");
	var left = $("<div/>").attr("id", "left");
	var center = $("<div/>").attr("id", "center");
	body.append(top);
	body.append(left);
	body.append(center);

	$(document).trigger("init-new-layer", [ top ]);
	$(document).trigger("init-map", [ center ]);
	$(document).trigger("init-layers", [ left ]);
});