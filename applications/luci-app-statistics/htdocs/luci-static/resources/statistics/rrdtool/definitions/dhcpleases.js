/* Licensed to the public under the Apache License 2.0. */

'use strict';
'require baseclass';

return baseclass.extend({
	title: _('DHCP Leases'),

	rrdargs: function(graph, host, plugin, plugin_instance, dtype) {
		return {
			title: "%H: DHCP leases",
			vlabel: "Leases given",
			number_format: "%5.0lf",
			data: {
				types: [ "count" ],
				options: {
					count: {
						title: '%di'
					}
				}
			}
		};
	}
});
