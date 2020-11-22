# Style utilities

## Padding

| Class         | Property  | Value                                              |
| :------------ | :-------- | :------------------------------------------------- |
| `.p-xxxsmall` | `padding` | [`var(--size-xxxsmall)`](global-styles.html#sizes) |
| `.p-xxsmall`  | `padding` | [`var(--size-xxsmall)`](global-styles.html#sizes)  |
| `.p-xsmall`   | `padding` | [`var(--size-xsmall)`](global-styles.html#sizes)   |
| `.p-small`    | `padding` | [`var(--size-small)`](global-styles.html#sizes)    |
| `.p-medium`   | `padding` | [`var(--size-medium)`](global-styles.html#sizes)   |
| `.p-large`    | `padding` | [`var(--size-large)`](global-styles.html#sizes)    |
| `.p-xlarge`   | `padding` | [`var(--size-xlarge)`](global-styles.html#sizes)   |
| `.p-xxlarge`  | `padding` | [`var(--size-xxlarge)`](global-styles.html#sizes)  |
| `.p-xxxlarge` | `padding` | [`var(--size-xxxlarge)`](global-styles.html#sizes) |

::: tip Top, right, bottom and left padding
To specify an explicit top, right, bottom or left padding, append a `t`, `r`, `b` or `l` to
the `p`, ex: `.pt-medium` will apply a `var(--size-medium)` top padding. The respective remaining sizes are shown in the table above.
:::

<ComponentDivider/>

## Margin

| Class         | Property | Value                                              |
| :------------ | :------- | :------------------------------------------------- |
| `.m-xxxsmall` | `margin` | [`var(--size-xxxsmall)`](global-styles.html#sizes) |
| `.m-xxsmall`  | `margin` | [`var(--size-xxsmall)`](global-styles.html#sizes)  |
| `.m-xsmall`   | `margin` | [`var(--size-xsmall)`](global-styles.html#sizes)   |
| `.m-small`    | `margin` | [`var(--size-small)`](global-styles.html#sizes)    |
| `.m-medium`   | `margin` | [`var(--size-medium)`](global-styles.html#sizes)   |
| `.m-large`    | `margin` | [`var(--size-large)`](global-styles.html#sizes)    |
| `.m-xlarge`   | `margin` | [`var(--size-xlarge)`](global-styles.html#sizes)   |
| `.m-xxlarge`  | `margin` | [`var(--size-xxlarge)`](global-styles.html#sizes)  |
| `.m-xxxlarge` | `margin` | [`var(--size-xxxlarge)`](global-styles.html#sizes) |

::: tip Top, right, bottom and left margin
To specify an explicit top, right, bottom or left margin, append a `t`, `r`, `b` or `l` to
the `m`, ex: `.mb-xsmall` will apply a `var(--size-xsmall)` bottom margin. The respective remaining sizes are shown in the table above.
:::

<ComponentDivider/>

## Layout

| Class           | Property  | Value          |
| :-------------- | :-------- | :------------- |
| `.hidden`       | `display` | `none`         |
| `.inline`       | `display` | `inline`       |
| `.block`        | `display` | `block`        |
| `.inline-block` | `display` | `inline-block` |
| `.flex`         | `display` | `flex`         |
| `.inline-flex`  | `display` | `inline-flex`  |

<ComponentDivider small/>

### Flex

| Class                      | Property          | Value            |
| :------------------------- | :---------------- | :--------------- |
| **Direction**              |                   |                  |
| `.row`                     | `flex-direction`  | `row`            |
| `.row-reverse`             | `flex-direction`  | `row-reverse`    |
| `.column`                  | `flex-direction`  | `column`         |
| `.column-reverse`          | `flex-direction`  | `column-reverse` |
| **Wrap**                   |                   |                  |
| `.flex-wrap`               | `flex-wrap`       | `wrap`           |
| `.flex-wrap-reverse`       | `flex-wrap`       | `wrap-reverse`   |
| `.flex-no-wrap`            | `flex-wrap`       | `nowrap`         |
| **Shrink**                 |                   |                  |
| `.flex-shrink`             | `flex-shrink`     | `1`              |
| `.flex-no-shrink`          | `flex-shrink`     | `0`              |
| **Grow**                   |                   |                  |
| `.flex-grow`               | `flex-grow`       | `1`              |
| `.flex-no-wrap`            | `flex-grow`       | `0`              |
| **Justify**                |                   |                  |
| `.justify-content-start`   | `justify-content` | `flex-start`     |
| `.justify-content-end`     | `justify-content` | `flex-end`       |
| `.justify-content-center`  | `justify-content` | `center`         |
| `.justify-content-between` | `justify-content` | `space-between`  |
| `.justify-content-around`  | `justify-content` | `space-around`   |
| **Align**                  |                   |                  |
| `.align-items-start`       | `align-items`     | `flex-start`     |
| `.align-items-end`         | `align-items`     | `flex-end`       |
| `.align-items-center`      | `align-items`     | `center`         |
| `.align-items-stretch`     | `align-items`     | `stretch`        |
|                            |                   |                  |
| `.align-content-start`     | `align-content`   | `flex-start`     |
| `.align-content-end`       | `align-content`   | `flex-end`       |
| `.align-content-center`    | `align-content`   | `center`         |
| `.align-content-stretch`   | `align-content`   | `stretch`        |
|                            |                   |                  |
| `.align-self-start`        | `align-self`      | `flex-start`     |
| `.align-self-end`          | `align-self`      | `flex-end`       |
| `.align-self-center`       | `align-self`      | `center`         |
| `.align-self-stretch`      | `align-self`      | `stretch`        |
