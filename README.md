<p align="center">
<img src="misc/hero.svg" height="165px"/>
</p>

`figma-plugin-ds-vue` is a Vue component library that matches the [UI2: Figma Design System](https://www.figma.com/community/file/928108847914589057) for building Figma plugins. It is based on [thomas-lowry/figma-plugin-ds](https://github.com/thomas-lowry/figma-plugin-ds).

### [View Documentation](https://figma-plugin-ds-vue.netlify.app/)

## ✨ Installation

1.  Install the package `npm i figma-plugin-ds-vue`

2.  Include the global stylesheet in your app (either on component-level or make it accessible globally by importing it to your app's entry file, ex: `main.js`)

    `import 'figma-plugin-ds-vue/dist/figma-plugin-ds-vue.css'`

3.  Import and register the Vue components you want to use, refer to the [documentation](https://figma-plugin-ds-vue.netlify.app/) for details and an overview of all available components

4.  Enjoy building your plugin 💻✨

## 📝 Documentation

Refer to the library's [documentation](https://figma-plugin-ds-vue.netlify.app/) for a detailed overview of each component and its usage.

Quick reference:

-   [Button](https://figma-plugin-ds-vue.netlify.app/docs/components/button/)
-   [Checkbox](https://figma-plugin-ds-vue.netlify.app/docs/components/checkbox/)
-   [Disclosure](https://figma-plugin-ds-vue.netlify.app/docs/components/disclosure/)
-   [Divider](https://figma-plugin-ds-vue.netlify.app/docs/components/divider/)
-   [Icon](https://figma-plugin-ds-vue.netlify.app/docs/components/icon/)
-   [Icon Button](https://figma-plugin-ds-vue.netlify.app/docs/components/icon-button/)
-   [Input](https://figma-plugin-ds-vue.netlify.app/docs/components/input/)
-   [Number Input](https://figma-plugin-ds-vue.netlify.app/docs/components/num-input/)
-   [Radio menu](https://figma-plugin-ds-vue.netlify.app/docs/components/radio-menu/)
-   [Select menu](https://figma-plugin-ds-vue.netlify.app/docs/components/select-menu/)
-   [Label](https://figma-plugin-ds-vue.netlify.app/docs/components/label/)
-   [Text](https://figma-plugin-ds-vue.netlify.app/docs/components/text/)
-   [Textarea](https://figma-plugin-ds-vue.netlify.app/docs/components/textarea/)
-   [Title](https://figma-plugin-ds-vue.netlify.app/docs/components/title/)
-   [Toggle](https://figma-plugin-ds-vue.netlify.app/docs/components/toggle/)
-   [Tooltip](https://figma-plugin-ds-vue.netlify.app/docs/components/tooltip/)

The global stylesheet also includes [style variables](https://figma-plugin-ds-vue.netlify.app/docs/utils/variables/) 🎨 and [utility classes](https://figma-plugin-ds-vue.netlify.app/docs/utils/style-utils/) 🧰 which can be used to format your plugin 🌈

## 🌀 Misc

A great writeup on Figma plugin design & heuristics is [@yuanqing's](https://github.com/yuanqing) **[The UX of Figma plugins](https://uxdesign.cc/the-ux-of-figma-plugins-f4f896f8cf35)** 📚

This project is based on [thomas-lowry/figma-plugin-ds](https://github.com/thomas-lowry/figma-plugin-ds). It also includes refactored components of [Morglod/figma-vue-boilerplate](https://github.com/Morglod/figma-vue-boilerplate), a project which basically kickstarted the development of this one. S/o to these amazing humans 👋

## 📝 License

[MIT](LICENSE)
