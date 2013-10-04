require([ "jquery", "customization" ], function($, customization) {
	$(document).trigger("css-load", "modules/banner.css");

	$(document).bind(
			"init-banner",
			function(event, div) {
				var divBanner = $("<div/>").attr("id", "banner");
				var divFlag = $("<div/>").attr("id", "flag");
				var divLogos = $("<div/>").attr("id", "logos");
				var spnTitle = $("<span/>").attr("id", "title").html(
						customization.title);
				divBanner.append(divFlag).append(divLogos).append(spnTitle);
				div.append(divBanner);
			});
});
