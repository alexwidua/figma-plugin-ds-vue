module.exports = {
	chainWebpack: (config) => {
		// Inline svg icons because Figma doesn't support external assets
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
