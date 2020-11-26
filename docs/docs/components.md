# Components

<script>
import 'figma-plugin-ds-vue/assets/style/index.scss'
import FigComponents from 'figma-plugin-ds-vue/components/'

export default {
	data() {
		return {
			figCheckbox: true,
			figIconButton: false,
			figRadioModel: 'item-1',
			figSwitchModel: false
		}
	},
	components: {
		...FigComponents
	},
}
</script>

::: warning Include component styles
Make sure to include the global component stylesheet in your application.<br/>
`import 'figma-plugin-ds-vue/dist/figma-plugin-ds-vue.css'`

:::

## Button

<ComponentWrapper>
<FigButton primary>Primary</FigButton>
<FigButton secondary>Secondary</FigButton>
<FigButton tertiary>Tertiary</FigButton>
<FigButton primary destructive>Destructive</FigButton>
<FigButton primary disabled>Disabled</FigButton>
</ComponentWrapper>

```javascript
import { FigButton } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigButton
	}
}
```

```html
<FigButton v-on:click="{funcName}" primary> Primary </FigButton>
<FigButton secondary> Secondary </FigButton>
<FigButton tertiary> Tertiary </FigButton>
<FigButton primary destructive> Destructive </FigButton>
<FigButton primary disabled> Disabled </FigButton>
```

| Prop           | Type    | Default/Notes                                                        |
| :------------- | :------ | :------------------------------------------------------------------- |
| `v-on:click`   | Func    | Handle event emitted from the component. Ex: `v-on:click={funcName}` |
| `primary`      | Boolean | Default: `false`                                                     |
| `secondary`    | Boolean | Default: `false`                                                     |
| `tertiary`     | Boolean | Default: `false`                                                     |
| `desctructive` | Boolean | Default: `false`                                                     |
| `disabled`     | Boolean | Default: `false`                                                     |

<ComponentDivider/>

## Checkbox

<ComponentWrapper column>
<FigCheckbox v-model="figCheckbox">{{ figCheckbox ? 'Checked' : 'Unchecked'}}</FigCheckbox>
<FigCheckbox disabled>Disabled</FigCheckbox>
</ComponentWrapper>

```javascript
import { FigCheckbox } from 'figma-plugin-ds-vue'

export default {
	data: () => ({
		checkboxModel: // Boolean
	}),
	components: {
		FigCheckbox
	}
}
```

```html
<FigCheckbox v-model="checkboxModel">
	{{ exampleVModel ? 'Checked' : 'Unchecked' }}
</FigCheckbox>
<FigCheckbox disabled> Disabled </FigCheckbox>
```

| Prop         | Type    | Default/Notes                                                        |
| :----------- | :------ | :------------------------------------------------------------------- |
| `v-on:input` | Func    | Handle event emitted from the component. Ex: `v-on:input={funcName}` |
| `value`      | Boolean | Default: `false`                                                     |
| `checked`    | Boolean | Default: `undefined`                                                 |
| `disabled`   | Boolean | Default: `false`                                                     |

<ComponentDivider/>

## Disclosure <Badge text="WIP" type="warning"/>

<ComponentWrapper>
<FigDisclosure style="width: auto"><FigDisclosureItem  title="Title" section>Content</FigDisclosureItem>
</FigDisclosure>
</ComponentWrapper>

```javascript
import { FigDisclosure, FigDisclosureItem } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigDisclosure,
		FigDisclosureItem
	}
}
```

```html
<FigDisclosure>
	<FigDisclosureItem title="Title" section> Content </FigDisclosureItem>
</FigDisclosure>
```

| Prop       | Type    | Default/Notes                         |
| :--------- | :------ | :------------------------------------ |
| `title`    | String  | Title of disclosure item              |
| `section`  | Boolean | Default: `false`; Bold section header |
| `expanded` | Boolean | Default: `false`;                     |

::: warning Work in progress
At the moment, the `<FigDisclosure>` component is a simple class wrapper and doesn't control the open/close state of its child components. As a result multiple `<FigDisclosureItem>` components can be open at the same time, this is not intented. This component is a work in progress.
:::

<ComponentDivider/>

## Icon

<ComponentWrapper>
<FigIcon icon="heart"/>
<FigIcon icon="spinner" spinning/>
<FigIcon iconText="H"/>
</ComponentWrapper>

```javascript
import { FigIcon } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigIcon
	}
}
```

```html
<FigIcon icon="heart" />
<FigIcon icon="spinner" spinning />
<FigIcon iconText="H" />
```

| Prop       | Type    | Default/Notes                                                                                   |
| :--------- | :------ | :---------------------------------------------------------------------------------------------- |
| `icon`     | String  | Default: `heart`; Pass an Figma-Ds icon or your own icon, refer to the icon list or guide below |
| `iconText` | String  | Pass a text character to use instead of an icon. Ex: width input `iconText="W"`                 |
| `spinning` | Boolean | Default: `false`; This will rotate the icon in an endless loop                                  |

::: details List of all avaiable Icons
| Icon | Name |  
| :---------: | :------ |
| <FigIcon icon="adjust"/> | `adjust` |
| <FigIcon icon="alert"/> | `alert` |
| <FigIcon icon="angle"/> | `angle` |
| <FigIcon icon="arrow-left-right"/> | `arrow-left-right` |
| <FigIcon icon="arrow-up-down"/> | `arrow-up-down` |
| <FigIcon icon="auto-layout-horizontal"/> | `auto-layout-horizontal` |
| <FigIcon icon="auto-layout-vertical"/> | `auto-layout-vertical` |
| <FigIcon icon="back"/> | `back` |
| <FigIcon icon="blend-empty"/> | `blend-empty` |
| <FigIcon icon="blend"/> | `blend` |
| <FigIcon icon="break"/> | `break` |
| <FigIcon icon="caret-left"/> | `caret-left` |
| <FigIcon icon="caret-up"/> | `caret-up` |
| <FigIcon icon="caret-right"/> | `caret-right` |
| <FigIcon icon="caret-down"/> | `caret-down` |
| <FigIcon icon="check"/> | `check` |
| <FigIcon icon="close"/> | `close` |
| <FigIcon icon="component"/> | `component` |
| <FigIcon icon="corner-radius"/> | `corner-radius` |
| <FigIcon icon="corners"/> | `corners` |
| <FigIcon icon="distribute-horizontal-spacing"/> | `distribute-horizontal-spacing` |
| <FigIcon icon="distribute-vertical-spacing"/> | `distribute-vertical-spacing` |
| <FigIcon icon="draft"/> | `draft` |
| <FigIcon icon="effects"/> | `effects` |
| <FigIcon icon="ellipses"/> | `ellipses` |
| <FigIcon icon="eyedropper"/> | `eyedropper` |
| <FigIcon icon="forward"/> | `forward` |
| <FigIcon icon="frame"/> | `frame` |
| <FigIcon icon="group"/> | `group` |
| <FigIcon icon="heart"/> | `heart` |
| <FigIcon icon="heart-fill"/> | `heart-fill` |
| <FigIcon icon="hidden"/> | `hidden` |
| <FigIcon icon="horizontal-padding"/> | `horizontal-padding` |
| <FigIcon icon="hyperlink"/> | `hyperlink` |
| <FigIcon icon="image"/> | `image` |
| <FigIcon icon="instance"/> | `instance` |
| <FigIcon icon="key"/> | `key` |
| <FigIcon icon="align-horizontal-centers"/> | `align-horizontal-centers` |
| <FigIcon icon="align-vertical-centers"/> | `align-vertical-centers` |
| <FigIcon icon="align-left"/> | `align-left` |
| <FigIcon icon="align-top"/> | `align-top` |
| <FigIcon icon="align-right"/> | `align-right` |
| <FigIcon icon="align-bottom"/> | `align-bottom` |
| <FigIcon icon="layout-grid-columns"/> | `layout-grid-columns` |
| <FigIcon icon="layout-grid-rows"/> | `layout-grid-rows` |
| <FigIcon icon="layout-grid-uniform"/> | `layout-grid-uniform` |
| <FigIcon icon="library"/> | `library` |
| <FigIcon icon="link-broken"/> | `link-broken` |
| <FigIcon icon="link-connected"/> | `link-connected` |
| <FigIcon icon="list-detailed"/> | `list-detailed` |
| <FigIcon icon="list-tile"/> | `list-tile` |
| <FigIcon icon="list"/> | `list` |
| <FigIcon icon="lock-off"/> | `lock-off` |
| <FigIcon icon="lock-on"/> | `lock-on` |
| <FigIcon icon="minus"/> | `minus` |
| <FigIcon icon="play"/> | `play` |
| <FigIcon icon="plus"/> | `plus` |
| <FigIcon icon="random"/> | `random` |
| <FigIcon icon="recent"/> | `recent` |
| <FigIcon icon="resize-to-fit"/> | `resize-to-fit` |
| <FigIcon icon="resolve-filled"/> | `resolve-filled` |
| <FigIcon icon="resolve"/> | `resolve` |
| <FigIcon icon="search-large"/> | `search-large` |
| <FigIcon icon="search"/> | `search` |
| <FigIcon icon="settings"/> | `settings` |
| <FigIcon icon="share"/> | `share` |
| <FigIcon icon="smiley"/> | `smiley` |
| <FigIcon icon="sort-alpha-asc"/> | `sort-alpha-asc` |
| <FigIcon icon="sort-alpha-dsc"/> | `sort-alpha-dsc` |
| <FigIcon icon="sort-top-bottom"/> | `sort-top-bottom` |
| <FigIcon icon="spacing"/> | `spacing` |
| <FigIcon icon="spinner"/> | `spinner` |
| <FigIcon icon="star-off"/> | `star-off` |
| <FigIcon icon="star-on"/> | `star-on` |
| <FigIcon icon="stroke-weight"/> | `stroke-weight` |
| <FigIcon icon="styles"/> | `styles` |
| <FigIcon icon="swap"/> | `swap` |
| <FigIcon icon="theme"/> | `theme` |
| <FigIcon icon="tidy-up-grid"/> | `tidy-up-grid` |
| <FigIcon icon="tidy-up-list-horizontal"/> | `tidy-up-list-horizontal` |
| <FigIcon icon="tidy-up-list-vertical"/> | `tidy-up-list-vertical` |
| <FigIcon icon="timer"/> | `timer` |
| <FigIcon icon="trash"/> | `trash` |
| <FigIcon icon="vertical-padding"/> | `vertical-padding` |
| <FigIcon icon="warning-large"/> | `warning-large` |
| <FigIcon icon="warning"/> | `warning` |
:::

::: details Add custom icons
To include custom icons in the `FigIcon` component, create a `.icon--[iconName]` CSS class in your app and specify the SVG icon as a `background-image`. You can then pass your icon name as a prop to the `FigIcon` component.

Ex:

```css
.icon--custom {
	background-image: url('<your_relative_path>/custom-icon.svg');
}
```

```html
<FigIcon icon="custom-icon" />
```

::: warning Heads-up
If you are using local **custom** icons in your plugin, do not forget to inline (ex: base64 encode) your icons when bundling for production. The reason is that [Figma plugins do not support any asset files](https://www.figma.com/plugin-docs/resource-links/)

When using Vue CLI or webpack for bundling, one strategy would be to using [url-loader](https://webpack.js.org/loaders/url-loader/) to inline image assets:

```js
module.exports = {
	chainWebpack: (config) => {
		// Inline svg icons since Figma doesn't support assets
		config.module.rule('svg').uses.clear()
		config.module
			.rule('svg')
			.test(/\.(svg)$/)
			.use('url-loader')
			.loader('url-loader')
	}
}
```

<br/>

:sparkles: **Icons that are included in `figma-plugin-ds-vue` are already inlined and do not need any further action.**
<br/>
<br/>

:::

<ComponentDivider/>

## Icon Button

<ComponentWrapper>
<FigIconButton :icon="figIconButton ? 'heart-fill' : 'heart'" v-on:click="figIconButton = !figIconButton"/>
<FigIconButton iconText="H"/>
<FigIconButton iconText="W" disabled/>
</ComponentWrapper>

```javascript
import { FigIconButton } from 'figma-plugin-ds-vue'

export default {
	data: () => ({
		iconState: // Boolean
	}),
	components: {
		FigIconButton
	}
}
```

```html
<FigIconButton
	:icon="iconState ? 'heart-fill' : 'heart'"
	v-on:click="iconState = !iconState"
/>
<FigIconButton iconText="H" />
<FigIconButton iconText="W" disabled />
```

| Prop         | Type    | Default/Notes                                                        |
| :----------- | :------ | :------------------------------------------------------------------- |
| `v-on:click` | Func    | Handle event emitted from the component. Ex: `v-on:click={funcName}` |
| `icon`       | String  | _See Icon component for usage_                                       |
| `iconText`   | String  | _See Icon component for usage_                                       |
| `selected`   | Boolean | Default: `false`                                                     |
| `spinning`   | Boolean | _See Icon component for usage_                                       |
| `disabled`   | Boolean | Default: `false`                                                     |

::: tip Avaiable icons
For a list of all avaiable icons refer to [Icon](#icon).
:::

<ComponentDivider/>

## Input

<ComponentWrapper>
<FigInput />
<FigInput icon="heart" placeholder="Placeholder" border/>
</ComponentWrapper>

```javascript
import { FigInput } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigInput
	}
}
```

```html
<FigInput /><!-- -->
<FigInput icon="heart" placeholder="Placeholder" border />
```

| Prop          | Type          | Default/Notes                                                         |
| :------------ | :------------ | :-------------------------------------------------------------------- |
| `v-on:input`  | Func          | Handle event emitted from the component. Ex: `v-on:input={funcName}`  |
| `v-on:change` | Func          | Handle event emitted from the component. Ex: `v-on:change={funcName}` |
| `value`       | String/Number |                                                                       |
| `label`       | String        | Input box label                                                       |
| `placeholder` | String        |                                                                       |
| `border`      | Boolean       | Default: `false`; Force a border around the input field               |
| `disabled`    | Boolean       | Default: `false`                                                      |
| `icon`        | String        | _See Icon component for usage_                                        |
| `iconText`    | String        | _See Icon component for usage_                                        |
| `spinning`    | Boolean       | _See Icon component for usage_                                        |

<ComponentDivider/>

## Label

<ComponentWrapper>
<FigLabel style="width: auto">Label</FigLabel/>
</ComponentWrapper>

```javascript
import { FigLabel } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigLabel
	}
}
```

```html
<FigLabel> Label </FigLabel>
```

<ComponentDivider/>

## Onboarding

<ComponentWrapper>
<FigOnboarding>Lorem ipsum dolor sit amet.</FigOnboarding/>
</ComponentWrapper>

```javascript
import { FigOnboarding } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigOnboarding
	}
}
```

```html
<FigOnboarding icon="smiley"> Lorem ipsum dolor sit amet. </FigOnboarding>
```

| Prop       | Type    | Default/Notes                                    |
| :--------- | :------ | :----------------------------------------------- |
| `icon`     | String  | Default: `smiley` _See Icon component for usage_ |
| `iconText` | String  | _See Icon component for usage_                   |
| `spinning` | Boolean | Default: `false`                                 |

<ComponentDivider/>

## Radio

<ComponentWrapper>
<FigRadio :items="[{ label: 'Item 1', value: 'item-1' }, { label: 'Item 2', value: 'item-2' }]" v-model="figRadioModel"
/>
</ComponentWrapper>

```javascript
import { FigRadio } from 'figma-plugin-ds-vue'

export default {
	data: () => ({
		radioModel: // Selected radio value
	}),
	components: {
		FigRadio
	}
}
```

```html
<FigRadio
	:items="[{ label: 'Item A', value: 'A' },{ label: 'Item B', value: 'B' }]"
	v-model="radioModel"
/>
```

| Prop       | Type          | Default/Notes                                                                                                       |
| :--------- | :------------ | :------------------------------------------------------------------------------------------------------------------ |
| `on:input` | Func          | Handle event emitted from the component. Ex: `v-on:input={funcName}`                                                |
| `items`    | Array         | Format: `[{ label: String, value: String | Number}]` Pass an array of objects containing the option label and value |
| `value`    | String/Number |                                                                                                                     |
| `disabled` | Boolean       | Default: `false`                                                                                                    |

<ComponentDivider/>

## Select

<ComponentWrapper>
<FigSelect style="width:12rem"
	:items="[
					{
						icon: 'heart',
						label: 'Item 1',
						key: 'item-1'
					},
					{
						divider: true
					},
					{
						icon: 'heart-fill',
						label: 'Item 2',
						key: 'item-2'
					}
				]"
	placeholder="Placeholder"
/>
</ComponentWrapper>

```javascript
import { FigSelect } from 'figma-plugin-ds-vue'

export default {
	data: () => ({
		selectModel: // Selected radio value
	}),
	components: {
		FigSelect
	}
}
```

```html
<FigSelect
	:items="[
					{
						icon: 'heart',
						label: 'Item 1',
						key: 'item-1'
					},
					{
						divider: true
					},
					{
						icon: 'heart-fill',
						label: 'Item 2',
						key: 'item-2'
					}
				]"
	v-model="selectModel"
	placeholder="Placeholder"
/>
```

| Prop          | Type          | Default/Notes                                                                                                                                                                                                      |
| :------------ | :------------ | :----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `v-on:input`  | Func          | Handle event emitted from the component. Ex: `v-on:input={funcName}`                                                                                                                                               |
| `items`       | Array         | Format: `[{ icon: String, label: String, key: String | Number }, {divider: Boolean}]` Pass an array of objects containing an optional icon, label name and key (value). Pass `{divider: true}` to create a divider |  |
| `value`       | String/Number | Default: `undefined`                                                                                                                                                                                               |
| `placeholder` | String        | Placeholder when no key/value is selected                                                                                                                                                                          |
| `open`        | Boolean       | Default: `undefined` Open/close state of the select menu                                                                                                                                                           |
| `disabled`    | Boolean       | Default: `false`                                                                                                                                                                                                   |

<ComponentDivider/>

## Switch

<ComponentWrapper column>
<FigSwitch v-model="figSwitchModel">{{ figSwitchModel ? 'Yay!' : 'Nay?'}}</FigSwitch>
<FigSwitch disabled>Disabled</FigSwitch>
</ComponentWrapper>

```javascript
import { FigSwitch } from 'figma-plugin-ds-vue'

export default {
	data: () => ({
		switchModel: // Boolean
	}),
	components: {
		FigSwitch
	}
}
```

```html
<FigSwitch v-model="switchModel">
	{{ switchModel ? 'Yay!' : 'Nay?' }}
</FigSwitch>
<FigSwitch disabled>Disabled</FigSwitch>
```

| Prop         | Type    | Default/Notes                                                        |
| :----------- | :------ | :------------------------------------------------------------------- |
| `v-on:input` | Func    | Handle event emitted from the component. Ex: `v-on:input={funcName}` |
| `value`      | Boolean | Default: `false`                                                     |
| `checked`    | Boolean | Default: `undefined`                                                 |
| `disabled`   | Boolean | Default: `false`                                                     |

<ComponentDivider/>

## Text

<ComponentWrapper column>
<FigText>Lorem ipsum dolor sit amet.</FigText>
<FigText color="blue">Lorem ipsum dolor sit amet.</FigText>
<FigText size="large" weight="bold">Lorem ipsum dolor sit amet.</FigText>
</ComponentWrapper>

```javascript
import { FigText } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigText
	}
}
```

```html
<FigText> Lorem ipsum dolor sit amet. </FigText>
<FigText color="blue"> Lorem ipsum dolor sit amet. </FigText>
<FigText size="large" weight="bold"> Lorem ipsum dolor sit amet. </FigText>
```

| Prop      | Type    | Default/Notes                                                                                             |
| :-------- | :------ | :-------------------------------------------------------------------------------------------------------- |
| `color`   | String  | Default: `"black8"`; Pass the name of any [color variable](/docs/style-variables.html#color) to this prop |
| `size`    | String  | Default: `"xsmall"`; Also accepts `"xsmall"`,`"large"`, `"xlarge"`                                        |
| `weight`  | String  | Default: `"normal"`; Also accepts `"medium"`,`"bold"`                                                     |
| `inverse` | Boolean | Default: `false`; Optimizes letter-spacing for light on dark applications                                 |

<ComponentDivider/>

## Textarea

<ComponentWrapper>
<FigTextarea placeholder="Placeholder"/>
</ComponentWrapper>

```javascript
import { FigTextarea } from 'figma-plugin-ds-vue'

export default {
	data: () => ({
		textModel: // String
	}),
	components: {
		FigTextarea
	}
}
```

```html
<FigTextarea placeholder="Placeholder" v-model="textModel" />
```

| Prop          | Type          | Default/Notes                                                         |
| :------------ | :------------ | :-------------------------------------------------------------------- |
| `v-on:input`  | Func          | Handle event emitted from the component. Ex: `v-on:input={funcName}`  |
| `v-on:change` | Func          | Handle event emitted from the component. Ex: `v-on:change={funcName}` |
| `value`       | String/Number | Value of textarea                                                     |
| `placeholder` | String        | Override default placeholder text with a string                       |
| `rows`        | Int           | Default: `2`; Number of rows to display (textarea height)             |
| `disabled`    | Boolean       | Default: `false`                                                      |

<ComponentDivider/>

## Title

<ComponentWrapper>
<FigTitle style="width: auto;">Title</FigTitle>
</ComponentWrapper>

```javascript
import { FigTitle } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigTitle
	}
}
```

```html
<FigTitle>Title</FigTitle>
```

<ComponentDivider/>

## Visual Bell

<ComponentWrapper column>
<FigVisualBell style="align-self: center;" loading>Loading event message</FigVisualBell>
<FigVisualBell style="align-self: center;" actionLabel="Button">Event message with button</FigVisualBell>
<FigVisualBell style="align-self: center;" error>Error event message</FigVisualBell>
</ComponentWrapper>

```javascript
import { FigVisualBell } from 'figma-plugin-ds-vue'

export default {
	components: {
		FigVisualBell
	}
}
```

```html
<FigVisualBell loading> Loading event message </FigVisualBell>
<FigVisualBell actionLabel="Button"> Event message with button </FigVisualBell>
<FigVisualBell error> Error event message </FigVisualBell>
```

| Prop          | Type    | Default/Notes                                                        |
| :------------ | :------ | :------------------------------------------------------------------- |
| `v-on:click`  | Func    | Handle event emitted from the component. Ex: `v-on:click={funcName}` |
| `loading`     | Boolean | Default: `false` Display spinning loading icon                       |
| `error`       | Boolean | Default: `false` Indicate error state (red background color).        |
| `actionLabel` | String  | Label of optional action button on bell element                      |

<ComponentDivider/>
