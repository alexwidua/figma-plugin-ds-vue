const { description } = require('../../package')
const { resolve } = require('path')

module.exports = {
	title: 'figma-plugin-ds-vue',
	description: description,
	head: [
		['meta', { name: 'theme-color', content: '#18a0fb' }],
		['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
		[
			'meta',
			{ name: 'apple-mobile-web-app-status-bar-style', content: 'black' }
		]
	],
	themeConfig: {
		repo: 'https://github.com/alexwidua/figma-plugin-ds-vue',
		editLinks: false,
		docsDir: '',
		editLinkText: '',
		lastUpdated: false,
		sidebar: {
			'/docs/': [
				{
					title: 'Documentation',
					collapsable: false,
					children: [
						'',
						'components',
						'style-variables',
						'style-utilities'
					]
				}
			]
		}
	},
	configureWebpack: {
		resolve: {
			alias: {
				'figma-plugin-ds-vue': resolve(__dirname, '../../src')
			}
		}
	}
}
