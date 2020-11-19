<template>
	<span
		v-if="!textIcon"
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
		v-html="textIcon"
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
		icon: { type: String, default: 'smiley' },
		textIcon: String,
		selected: Boolean,
		spinning: Boolean
	}
}
</script>

<style lang="scss">
.icon {
	display: flex;
	align-items: center;
	justify-content: center;
	width: var(--size-medium);
	height: var(--size-medium);
	font-size: var(--font-size-xsmall);
	font-family: var(--font-stack);
	cursor: default;
	user-select: none;

	&--text {
		display: flex;
		align-items: center;
		justify-content: center;
		font-size: var(--font-size-xsmall);
		font-family: var(--font-stack);
	}
}

.spinning {
	animation: rotating 1s linear infinite;
}
@keyframes rotating {
	from {
		transform: rotate(0deg);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>
