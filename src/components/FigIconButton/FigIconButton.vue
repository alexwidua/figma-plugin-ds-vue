<template>
	<div
		v-if="!iconText"
		class="icon icon-button"
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
		class="icon--text icon-button"
		:class="{ 'icon-button--selected': selected, spinning, disabled }"
		@click="onClick"
		tabIndex="0"
		v-html="iconText"
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
		icon: { type: String, default: 'heart' },
		iconText: String,
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
// Render the .icon class styles (_icon.scss) but override some additional styles
.icon-button {
	background-position: -2px -2px;
	border: 2px solid transparent;
	border-radius: var(--border-radius-small);
	outline: none;

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

		&:hover {
			background-color: transparent;
		}
		&:active,
		&:focus {
			border: 2px solid transparent;
			outline: none;
		}
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

// Spinning animation moved to ->  _animations.scss
</style>
