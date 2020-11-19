<template>
	<div
		v-if="!textIcon"
		class="icon-button"
		:class="{
			['icon--' + icon]: icon,
			'icon-button--selected': selected,
			spinning,
			disabled
		}"
		@click="onClick"
		tabIndex="0"
	/>
	<div
		v-else
		class="icon-button"
		:class="{ 'icon-button--selected': selected, spinning, disabled }"
		@click="onClick"
		tabIndex="0"
		v-html="textIcon"
	/>
</template>

<script>
export default {
	name: 'FigIcon',
	/**
	 * Icon button component.
	 * Default Figma icons are located in ./assets/icons
	 */
	props: {
		icon: { type: String, default: 'smiley' },
		textIcon: String,
		selected: Boolean,
		disabled: Boolean,
		spinning: Boolean
	},
	methods: {
		onClick(e) {
			if (!this.disabled) {
				this.$emit('click', e)
			}
		}
	}
}
</script>

<style lang="scss">
.icon-button {
	display: flex;
	align-items: center;
	justify-content: center;
	width: var(--size-medium);
	height: var(--size-medium);
	font-size: var(--font-size-xsmall);
	font-family: var(--font-stack);
	background-position: -2px -2px;

	border: 2px solid transparent;
	border-radius: var(--border-radius-small);
	outline: none;
	cursor: default;
	user-select: none;

	&:hover {
		background-color: var(--hover-fill);
	}

	&:active,
	&:focus {
		border: 2px solid var(--blue);
		outline: none;
	}

	&.disabled {
		opacity: 0.3;
	}

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
