define([ "jquery" ], function($) {

	/*
	 * One of this for each group in a jquery ui accordion
	 */
	var tblLayerGroup = null;

	$(document).trigger("css-load", "modules/layer-list.css");

	var emulate = function(element) {
		element.mousedown(function() {
			element.addClass('mousedown');
		}).mouseup(function() {
			element.removeClass('mousedown');
		}).mouseleave(function() {
			element.removeClass('in');
		}).mouseenter(function() {
			element.addClass('in');
		}).click(function() {
			element.toggleClass('checked');
		});
	};

	$(document).bind("init-layerlist", function(event, divLayersContainer) {
		// Should go in layout
		// var divLayerListSelector = $("<div/>").attr("id",
		// "layer_list_selector");
		//
		// var rdoAllLayers = $("<input/>").attr("id",
		// "all_layers").attr("type", "radio")//
		// .attr("name", "layer_list_selector").attr("checked", "checked");
		// var rdoAllLayersLabel = $("<label/>").attr("for",
		// "all_layers").html(i18n.layers);
		// rdoAllLayers.append(rdoAllLayersLabel);
		// divLayerListSelector.append(rdoAllLayers);
		//
		// var rdoSelectedLayers = $("<input/>").attr("id",
		// "active_layers").attr("type", "radio")//
		// .attr("name", "layer_list_selector");
		// var rdoSelectedLayersLabel = $("<label/>").attr("for",
		// "active_layers").html(i18n.selected_layers);
		// rdoSelectedLayers.append(rdoSelectedLayersLabel);
		// divLayerListSelector.append(rdoSelectedLayers);

		var divActiveLayers = $("<div/>").attr("id", "active_layers");
		var h3Title = $("<h3/>").html("Selected layers");
		divActiveLayers.append(h3Title);
		divLayersContainer.append(divActiveLayers);

		var divLayers = $("<div/>").attr("id", "all_layers");
		tblLayerGroup = $("<table/>").attr("id", "group-content-table");
		divLayers.append(tblLayerGroup);
		divLayersContainer.append(divLayers);
	});

	$(document).bind("add-layer", function(event, layerInfo) {
		var trLayer = $("<tr/>").addClass("layer_row");

		var tdLegend = $("<td/>").addClass("layer_legend");
		trLayer.append(tdLegend);

		var tdVisibility = $("<td/>");
		var divCheckbox = $("<div/>").addClass("layer_visibility");
		emulate(divCheckbox);
		tdVisibility.append(divCheckbox);

		trLayer.append(tdVisibility);

		var tdName = $("<td/>").addClass("layer_name");
		tdName.html(layerInfo.name);
		trLayer.append(tdName);

		tblLayerGroup.append(trLayer);
	});

});