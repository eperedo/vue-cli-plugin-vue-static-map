const prompts = [
	{
		name: 'googleApiKey',
		message: 'Enter a valid google static map api key',
		value: '',
	},
	{
		name: 'replaceAppVue',
		default: true,
		message: 'Generate example component? (it will replace App.vue)',
		type: 'confirm',
	},
];

module.exports = prompts;
