sap.ui.define([

], function () {
	"use-strict";
	return sap.ui.controller("ist_soll.ext.controller.ListReportExt", {

		/**
		 * @public
		 */
		onInit: function (oEvent) {

		/*	var that = this;
			this.extensionAPI.attachPageDataLoaded(function () {
				var oSmartTable = that.byId("groupText::responsiveTable").getParent();
				oSmartTable.attachModelContextChange(function (oEvent) {
					oSmartTable.rebindTable();
				});
				oSmartTable.attachBeforeRebindTable(function (oEvent) {
					oEvent.getParameter("bindingParams").parameters.select += ",url";
				});
			});*/
		},

		/**
		 * @public
		 */
		onExit: function () {

		}
	});

});