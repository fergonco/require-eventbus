define([ "jquery", "jquery-ui" ], function($) {
	$(document).bind("init-new-layer", function(event, div) {
		var txtUrl = $("<input/>", {
			type : 'text'
		}).val("http://ovc.catastro.meh.es/Cartografia/WMS/ServidorWMS.aspx");
		var txtLayer = $("<input/>", {
			type : 'text'
		}).val("Catastro");
		var btnAdd = $("<div/>").html("Add layer").button();

		div.append(txtUrl).append(txtLayer).append(btnAdd);

		btnAdd.click(function() {
			$(document).trigger("add-layer", [ txtUrl.val(), txtLayer.val() ]);
		});
	});
});