<template>
	<span
		v-if="!iconText"
		class="icon"
		:class="{
			['icon--' + icon]: icon,
			spinning
		}"
	/>
	<span
		v-else
		class="icon icon--text"
		:class="{ spinning }"
		v-html="iconText"
	/>
</template>

<script>
export default {
	name: 'FigIcon',
	/**
	 * Icon wrapper
	 * Default Figma icons are located in ./assets/icons
	 */
	props: {
		icon: { type: String, default: 'heart' },
		iconText: String,
		spinning: Boolean
	}
}
</script>

<style lang="scss">
//
// Since the icon class is also used by other components, styles are
// moved to -> _icon.scss
//
</style>
