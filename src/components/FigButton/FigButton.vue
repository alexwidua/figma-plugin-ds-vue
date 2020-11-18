<template>
	<button
		class="button"
		:class="{
			primary,
			secondary,
			tertiary,
			destructive
		}"
		:disabled="disabled"
		@click="onClick"
	>
		<slot>Button</slot>
	</button>
</template>

<script>
export default {
	name: 'FigButton',
	/**
	 * Button component with primary, secondary, tertiary and destructive states
	 */
	props: {
		primary: Boolean,
		secondary: Boolean,
		tertiary: Boolean,
		destructive: Boolean,
		disabled: Boolean
	},
	methods: {
		onClick() {
			this.$emit('click')
		}
	}
}
</script>

<style lang="scss">
.button {
	display: flex;
	flex-shrink: 0;
	align-items: center;
	height: var(--size-medium);
	padding: 0 var(--size-xsmall) 0 var(--size-xsmall);
	color: var(--white);
	font-weight: var(--font-weight-medium);
	font-size: var(--font-size-xsmall);
	font-family: var(--font-stack);
	line-height: var(--font-line-height);
	letter-spacing: var(--font-letter-spacing-neg-small);
	text-decoration: none;
	border: 2px solid transparent;
	border-radius: var(--border-radius-large);
	outline: none;
	user-select: none;
}
/* Primary */
.primary {
	color: var(--white);
	background-color: var(--blue);
	&:enabled:active,
	&:enabled:focus {
		border: 2px solid var(--black3);
	}
	&:disabled {
		background-color: var(--black3);
	}
	&.destructive {
		background-color: var(--red);
	}
	&.destructive:disabled {
		opacity: 0.4;
	}
}

/* Secondary  */
.secondary {
	padding: 0 calc(var(--size-xsmall) + 1px) 0 calc(var(--size-xsmall) + 1px);
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

/* Tertiary*/
.tertiary {
	padding: 0;
	color: var(--blue);
	font-weight: var(--font-weight-normal);
	letter-spacing: var(--font-letter-spacing-pos-small);
	background: initial;
	border: 1px solid transparent;
	cursor: pointer;
	&:enabled:focus {
		text-decoration: underline;
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
</style>
