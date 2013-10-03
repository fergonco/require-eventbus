require([ "jquery", "banner", "toolbar", "olmap" ], function($) {
	var body = $("body");
	
	var header = $("<div/>").attr("id", "header");
	body.append(header);
	$(document).trigger("init-banner", [ header ]);
	$(document).trigger("init-toolbar", [ header ]);

	var map = $("<div/>").attr("id", "center");
	body.append(map);
	$(document).trigger("init-map", [ map ]);
});