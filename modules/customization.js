/*
 * Queries the server and launches an "customization" event
 */
define(function() {
	/*
	 * Get this info from the server
	 */
	var customizationInfo = {
		"title" : "SNMB Ejemplo",
		"languages" : {
			"en" : "English",
			"fr" : "Français",
			"es" : "Español"
		},
		"languageCode" : "en",
		"messages" : {
			"legend_button" : "Legend",
			"sustainable_management" : "Sustainable Forest Management",
			"redd_plus_registry" : "REDD+ Registry",
			"changes" : "Changes",
			"months" : '["Jan.", "Feb.", "Mar.", "Apr.", "May", "June", "July", "Aug.", "Sep.", "Oct.", "Nov.", "Dec."]'
		}
	};

	document.title = customizationInfo.title;
	
	return customizationInfo;
});