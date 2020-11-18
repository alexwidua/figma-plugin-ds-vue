<template>
	<div
		class="icon"
		:class="{
			['icon--' + icon]: icon,
			'icon--text': iconText,
			'icon--selected': selected,
			spinning
		}"
	>
		{{ iconText }}
	</div>
</template>

<script>
export default {
	name: 'FigIcon',
	/**
	 * Icon wrapper
	 * Default Figma icons are located in ./assets/icons
	 */
	props: {
		icon: String,
		iconText: String,
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

	&--selected {
		color: var(--white);
		background-color: var(--blue);
		background-position: -1px -97px;
		border: 1px solid transparent;

		&:hover {
			color: var(--white);
			background-color: var(--blue);
		}

		&:active {
			color: var(--white);
			background-color: var(--blue);
		}
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
