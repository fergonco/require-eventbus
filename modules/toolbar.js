require([ "jquery" ], function($) {
	$(document).trigger("css-load", "modules/toolbar.css");
	
	$(document).bind(
			"init-toolbar",
			function(event, div) {
				var divToolbar = $("<div/>").attr("id", "toolbar");
				for (language in customization.languages) {
					var btnLanguage = $("<a href='?lang=" + language + "'/>")
							.attr("id", "button_" + language).html(
									customization.languages[language]);
					btnLanguage.addClass("blue_button lang_button");
					if (customization.languageCode == language) {
						btnLanguage.addClass("selected");
					}
					divToolbar.append(btnLanguage);
				}
				div.append(divToolbar);
			});
});
