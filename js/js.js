jQuery.fn.collapsableTable = function (options) {
	var settings = jQuery.extend({
		btn: this.find('thead, tfoot'),		//expand/collapse button
		staticWidth: true,					//static table width
		collapsed: false					//is table collapsed by default
	}, options);

	if( settings.static ) {
		this.css({width: this.outerWidth(true)});
	}
	this.addClass('collapsableTable');
	var ctCheckbox = jQuery('<input type="checkbox" />');
	ctCheckbox.addClass('ctCB');
	ctCheckbox.prop('checked', settings.collapsed);
	this.before(ctCheckbox);

	settings.btn.each(function () {
		jQuery(this).addClass('expandableTableButton');
		jQuery(this).click(function () {
			ctCheckbox.click();
		});
	});

	return this;
};