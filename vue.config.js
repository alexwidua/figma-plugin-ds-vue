module.exports = {
	chainWebpack: (config) => {
		// Inline svg icons since Figma doesn't support assets
		config.module.rule('svg').uses.clear()
		config.module
			.rule('svg')
			.test(/\.(svg)$/)
			.use('url-loader')
			.loader('url-loader')
	},
	css: {
		extract: process.env.NODE_ENV !== 'production' ? false : true
	},
	productionSourceMap: false
}
