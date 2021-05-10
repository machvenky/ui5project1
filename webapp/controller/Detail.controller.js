sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ui5project1/controller/BaseController",
	"sap/ui/core/routing/History"
], function(Controller,BaseController, History) {
	"use strict";

	return BaseController.extend("ui5project1.controller.Detail", {
		onInit: function() {
			this.getRouter().getRoute("detail").attachPatternMatched(this._objectMatched, this)
		},
		_objectMatched: function(oEvent) {
			var oArgs = oEvent.getParameter("arguments");
			var oView = this.getView();
			var sPID = oArgs.ProductID;
			var sPath = oView.getModel().createKey("ProductSet",{ProductID:sPID});
			oView.bindElement({
				path: "/"+ sPath
			});
		},
		onNavBack: function(oEvent) {
			var oHistory = History.getInstance();
			var sPreviousHash = oHistory.getPreviousHash();
			
			if (sPreviousHash !== undefined) {
				history.go(-1);
			} else {			
				this.getRouter().navTo("home",true);
			}

		}
	});
});