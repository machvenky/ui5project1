sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"ui5project1/controller/BaseController"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,BaseController) {
		"use strict";

		return BaseController.extend("ui5project1.controller.Home", {
			onInit: function () {

			},
			
			onRowSelected: function(oEvent) {
				this.getRouter().navTo("detail",
				{ ProductID: oEvent.getSource().getBindingContext().getProperty("ProductID") 
				});
			}
		});
	});
