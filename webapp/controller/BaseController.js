sap.ui.define([
    "sap/ui/core/mvc/Controller"
], function (Controller, History) {
"use strict";

return Controller.extend("ui5project1.controller.BaseController", {
    /**
     * Convenience method for accessing the router.
     * @public
     * @returns {sap.ui.core.routing.Router} the router for this component
     */
    getRouter : function () {
        return sap.ui.core.UIComponent.getRouterFor(this);
    }
    
});
});