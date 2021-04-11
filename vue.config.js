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
	productionSourceMap: false
}
