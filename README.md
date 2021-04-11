<p align="center">
<img src="misc/hero.svg" height="165px"/>
</p>

`figma-plugin-ds-vue` is a Vue `v2.x` component library that matches the [UI2: Figma Design System](https://www.figma.com/community/file/768283795272784978) for building Figma plugins. It is based on [thomas-lowry/figma-plugin-ds](https://github.com/thomas-lowry/figma-plugin-ds).

## ✨ Installation

1.  Install the package `npm i figma-plugin-ds-vue`

2.  Include the global stylesheet in your app (either on component-level or make it accessible globally by importing it to your app's entry file, ex: `main.js`)

    `import 'figma-plugin-ds-vue/dist/figma-plugin-ds-vue.css'`

3.  Import and register the Vue components you want to use, refer to the [documentation](https://figma-plugin-ds-vue.netlify.app/) for details and an overview of all available components

4.  Enjoy building your plugin 💻✨

## 📝 Documentation

⚠️ The documentation is currently outdated. The component names changed, the 'Fig' prefix was removed (ex: `<FigSelect/>` → `<Select/>`)

Refer to the library's [documentation](https://figma-plugin-ds-vue.netlify.app/docs/components.html) for a detailed overview of each component and its usage.

Quick reference:

-   [Button](https://figma-plugin-ds-vue.netlify.app/docs/components.html#button)
-   [Checkbox](https://figma-plugin-ds-vue.netlify.app/docs/components.html#checkbox)
-   [Disclosure](https://figma-plugin-ds-vue.netlify.app/docs/components.html#disclosure)
-   [Icon](https://figma-plugin-ds-vue.netlify.app/docs/components.html#icon)
-   [Icon Button](https://figma-plugin-ds-vue.netlify.app/docs/components.html#icon-button)
-   [Input](https://figma-plugin-ds-vue.netlify.app/docs/components.html#input)
-   [Label](https://figma-plugin-ds-vue.netlify.app/docs/components.html#label)
-   [Radio](https://figma-plugin-ds-vue.netlify.app/docs/components.html#radio)
-   [Select](https://figma-plugin-ds-vue.netlify.app/docs/components.html#select)
-   [Toggle](https://figma-plugin-ds-vue.netlify.app/docs/components.html#Toggle)
-   [Text](https://figma-plugin-ds-vue.netlify.app/docs/components.html#text)
-   [Textarea](https://figma-plugin-ds-vue.netlify.app/docs/components.html#textarea)
-   [Title](https://figma-plugin-ds-vue.netlify.app/docs/components.html#title)

TODO: NumInput, Tooltip

The global stylesheet also includes [style variables](https://figma-plugin-ds-vue.netlify.app/docs/style-variables.html) 🎨 and [utility classes](https://figma-plugin-ds-vue.netlify.app/docs/style-utilities.html) 🧰 which can be used throughout your plugin 🌈

## 🚧 Roadmap

This project is a work-in-progress, here's a small roadmap:

⬜ ⚠️ Update documentation to reflect changes introduced in 1.2.3  
...  
⬜ Update the library to Vue `v3.x` (since `v-model` changed with Vue 3 this would introduce breaking changes)

## 🌀 Misc

A great writeup on Figma plugin design & heuristics is [@yuanqing's](https://github.com/yuanqing) **[The UX of Figma plugins](https://uxdesign.cc/the-ux-of-figma-plugins-f4f896f8cf35)** 📚

This project is based on [thomas-lowry/figma-plugin-ds](https://github.com/thomas-lowry/figma-plugin-ds). It also includes refactored components of [Morglod/figma-vue-boilerplate](https://github.com/Morglod/figma-vue-boilerplate), a project which basically kickstarted the development of this one. S/o to these amazing humans 👋

## 📝 License

[MIT](LICENSE)
