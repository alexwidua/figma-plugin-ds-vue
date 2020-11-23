# Style variables

<script>
import 'figma-plugin-ds-vue/assets/style/index.scss'
export default {
    name:'style-variables'
}
</script>

## Color

**Accent**

|                                 Color                                  | Variable     | Notes                                                 |
| :--------------------------------------------------------------------: | :----------- | :---------------------------------------------------- |
|   <span class="color-preview" style="background-color:var(--blue)"/>   | `--blue`     | Ex: Primary button, hyperlinks, focus/selected states |
|  <span class="color-preview" style="background-color:var(--green)"/>   | `--green`    | Ex: Toolbar selections                                |
|  <span class="color-preview" style="background-color:var(--yellow)"/>  | `--yellow`   | Ex: Cautionary conditions/warnings                    |
|   <span class="color-preview" style="background-color:var(--red)"/>    | `--red`      | Ex: Indicate error                                    |
|  <span class="color-preview" style="background-color:var(--purple)"/>  | `--purple`   | Ex: Indicate Component & Instance nodes               |
| <span class="color-preview" style="background-color:var(--hot-pink)"/> | `--hot-pink` | Ex: Assistive UI canvas decorations                   |

<ComponentDivider small/>

**Basic foreground**

|                                    Color                                    | Variable          | Notes                                                         |
| :-------------------------------------------------------------------------: | :---------------- | :------------------------------------------------------------ |
|     <span class="color-preview" style="background-color:var(--black)"/>     | `--black`         | Ex: Active states                                             |
|    <span class="color-preview" style="background-color:var(--black8)"/>     | `--black8`        | 80% black, ex: most common black used in UI text and icons    |
| <span class="color-preview" style="background-color:var(--black8-opaque)"/> | `black8-opaque`   | Opaque version of black8                                      |
|    <span class="color-preview" style="background-color:var(--black3)"/>     | `--black3`        | 30% black, ex: lower priority messages, disabled states       |
| <span class="color-preview" style="background-color:var(--black3-opaque)"/> | `--black3-opaque` | Opaque version of black3                                      |
|     <span class="color-preview" style="background-color:var(--white)"/>     | `--white`         | Primary background for UI, text on menus                      |
|    <span class="color-preview" style="background-color:var(--white8)"/>     | `--white8`        | Only used for Figma toolbar                                   |
|    <span class="color-preview" style="background-color:var(--white4)"/>     | `--white4`        | Used in same way as black3, Ex: option group headers in menus |

<ComponentDivider small/>

**Basic background**

|                                  Color                                   | Variable       | Notes                                              |
| :----------------------------------------------------------------------: | :------------- | :------------------------------------------------- |
|  <span class="color-preview" style="background-color:var(--bg-white)"/>  | `--bg-white`   | Positive backgrounds, ex: property panels, sidebar |
|  <span class="color-preview" style="background-color:var(--bg-grey)"/>   | `--bg-grey`    | Bg of ex: buttons, controls in active state        |
| <span class="color-preview" style="background-color:var(--bg-silver)"/>  | `--bg-silver`  | Sidebar seperator lines & default canvas bg        |
|  <span class="color-preview" style="background-color:var(--bg-black)"/>  | `--bg-silver`  | Tabstrip bg in desktop app (fullscreen mode)       |
|   <span class="color-preview" style="background-color:var(--bg-hud)"/>   | `--bg-hud`     | Heads-up display elements, ex: menus, visual bell  |
| <span class="color-preview" style="background-color:var(--bg-toolbar)"/> | `--bg-toolbar` | Ex: background for Figma toolbar                   |

<ComponentDivider small/>

**Special**

|                                   Color                                   | Variable        | Notes                                                  |
| :-----------------------------------------------------------------------: | :-------------- | :----------------------------------------------------- |
|   <span class="color-preview" style="background-color:var(--black1)"/>    | `--black1`      | Ex: Outline of UI controls                             |
|   <span class="color-preview" style="background-color:var(--white2)"/>    | `--white2`      | Ex: Menu separators                                    |
|    <span class="color-preview" style="background-color:var(--blue3)"/>    | `--blue3`       | Ex: Text range selection                               |
| <span class="color-preview" style="background-color:var(--selection-a)"/> | `--selection-a` | Selected cells, ex: selected top level layer           |
| <span class="color-preview" style="background-color:var(--selection-b)"/> | `--selection-b` | Selected cells, ex: selected child layers              |
| <span class="color-preview" style="background-color:var(--hover-fill)"/>  | `--hover-fill`  | Hover state for items without borders, ex: icon button |

<ComponentDivider/>

## Typography

| Property         | Var                                | Value                 | Notes                                    |
| :--------------- | :--------------------------------- | :-------------------- | :--------------------------------------- |
| `font-family`    | `--font-stack`                     | `'Inter', sans-serif` | Default font                             |
| `font-size`      | `--font-size-xsmall`               | `11px`                | Most common font size                    |
| `font-size`      | `--font-size-small`                | `12px`                | Used in menus                            |
| `font-size`      | `--font-size-large`                | `13px`                | Rarely used in editor                    |
| `font-size`      | `--font-size-xlarge`               | `14px`                | Rarely used in editor                    |
| `font-weight`    | `--font-weight-normal`             | `400`                 | Default font weight                      |
| `font-weight`    | `--font-weight-medium`             | `500`                 |                                          |
| `font-weight`    | `--font-weight-bold`               | `600`                 |                                          |
| `line-height`    | `--font-line-height`               | `16px`                | Default line height (xsmall & small)     |
| `line-height`    | `--font-line-height-large`         | `24px`                | For use with large and xlarge font sizes |
| `letter-spacing` | `--font-letter-spacing-pos-xsmall` | `.005em`              |                                          |
| `letter-spacing` | `--font-letter-spacing-neg-xsmall` | `.01em`               |                                          |
| `letter-spacing` | `--font-letter-spacing-pos-small`  | `0`                   |                                          |
| `letter-spacing` | `--font-letter-spacing-neg-small`  | `.005em`              |                                          |
| `letter-spacing` | `--font-letter-spacing-pos-large`  | `-0.0025em`           |                                          |
| `letter-spacing` | `--font-letter-spacing-neg-large`  | `.0025em`             |                                          |
| `letter-spacing` | `--font-letter-spacing-pos-xlarge` | `-.001em`             |                                          |
| `letter-spacing` | `--font-letter-spacing-neg-xlarge` | `-.001em`             |                                          |

::: tip Letter-spacing
The letter-spacing vars are used to optimize legibility of certain font sizes on certain background colors. Ex: `--font-letter-spacing-neg-small` improves the legibility of light `--font-size-small` text on a dark background.
:::

<ComponentDivider/>

## Size

| Var               | Value  |
| :---------------- | :----- |
| `--size-xxxsmall` | `4px`  |
| `--size-xxsmall`  | `8px`  |
| `--size-xsmall`   | `16px` |
| `--size-small`    | `24px` |
| `--size-medium`   | `32px` |
| `--size-large`    | `40px` |
| `--size-xlarge`   | `48px` |
| `--size-xxlarge`  | `64px` |
| `--size-xxxlarge` | `80px` |

<ComponentDivider/>

## Border radius

| Var                     | Value | Notes                                 |
| :---------------------- | :---- | :------------------------------------ |
| `--border-radius-small` | `2px` | Ex: menus, input borders, icon button |
| `--border-radius-med`   | `5px` | Ex: visual bell, toasts               |
| `--border-radius-large` | `6px` | Ex: buttons                           |

<ComponentDivider/>

## Shadows

| Var                         | Notes                       |
| :-------------------------- | :-------------------------- |
| `--shadow-hud`              | Ex: menus, tooltips, toasts |
| `--shadow-floating-window:` | Ex: modal, dialog           |
