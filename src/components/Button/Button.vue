<template>
	<button
		class="fig-btn"
		:class="{
			'fig-btn--secondary': secondary,
			'fig-btn--tertiary': tertiary,
			'fig-btn--destructive': destructive
		}"
		:disabled="disabled"
		@click="$emit('click', $event)"
	>
		<slot>{{
			secondary
				? 'Secondary'
				: tertiary
				? 'Tertiary'
				: destructive
				? 'Destructive'
				: disabled
				? 'Disabled'
				: 'Primary'
		}}</slot>
	</button>
</template>

<script>
export default {
	name: 'Button',
	/**
	 * Button component with primary, secondary, tertiary and destructive states
	 */
	props: {
		//primary, now default
		secondary: { type: Boolean, default: false },
		tertiary: { type: Boolean, default: false },
		destructive: { type: Boolean, default: false },
		disabled: { type: Boolean, default: false }
	}
}
</script>

<style lang="scss">
.fig-btn {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	justify-content: center;
	height: var(--size-medium);
	padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
	color: var(--white);
	font-weight: var(--font-weight-medium);
	font-size: var(--font-size-xsmall);
	font-family: var(--font-stack);
	line-height: var(--font-line-height);
	letter-spacing: var(--font-letter-spacing-neg-small);
	text-decoration: none;
	background-color: var(--blue);
	border: 2px solid transparent;
	border-radius: var(--border-radius-large);
	outline: none;
	user-select: none;

	&:enabled:active,
	&:enabled:focus {
		border: 2px solid var(--black3);
	}
	&:disabled {
		background-color: var(--black3);
	}
	&--destructive {
		background-color: var(--red);
	}
	&--destructive:disabled {
		opacity: 0.4;
	}

	// Secondary
	&--secondary {
		padding: 0 calc(var(--size-xsmall) + 1px) 0
			calc(var(--size-xsmall) + 1px);
		color: var(--black8);
		letter-spacing: var(--font-letter-spacing-pos-small);
		background-color: var(--white);
		border: 1px solid var(--black8);

		&:enabled:active,
		&:enabled:focus {
			padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
			border: 2px solid var(--blue);
		}
		&:disabled {
			color: var(--black3);
			border: 1px solid var(--black3);
		}
		&.destructive {
			color: var(--red);
			border-color: var(--red);
		}
		&.destructive:enabled:active,
		&.destructive:enabled:focus {
			padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
			border: 2px solid var(--red);
		}
		&.destructive:disabled {
			opacity: 0.4;
		}
	}

	// Tertiary
	&--tertiary {
		padding: 0;
		color: var(--blue);
		font-weight: var(--font-weight-normal);
		letter-spacing: var(--font-letter-spacing-pos-small);
		background: initial;
		border: 1px solid transparent;
		cursor: pointer;

		&:enabled:active,
		&:enabled:focus {
			text-decoration: underline;
			border: 1px solid transparent;
		}
		&:disabled {
			color: var(--black3);
		}
		&.destructive {
			color: var(--red);
		}
		&.destructive:enabled:focus {
			text-decoration: underline;
		}
		&.destructive:disabled {
			opacity: 0.4;
		}
	}
}
</style>
