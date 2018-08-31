function commands(api, options, rootOptions) {
	api.extendPackage({
		dependencies: {
			'vue-static-map': '3.0.2',
		},
	});
	if (options.replaceAppVue) {
		api.render('./template');
	}
	api.onCreateComplete(() => {
		api.exitLog(
			'vue-static-map is ready to use, for more info go to google docs https://developers.google.com/maps/documentation/maps-static/intro',
			'done',
		);
	});
}

module.exports = commands;
