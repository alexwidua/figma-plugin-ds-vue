<template>
	<div
		class="fig-text"
		:class="[
			size,
			weight,
			{
				inline,
				inverse,
				'inverse--color-override': color == 'black8' && inverse
			}
		]"
		:style="`color: var(--${color})`"
	>
		<slot>Text</slot>
	</div>
</template>

<script>
export default {
	name: 'Txt',
	/**
	 * Text component to display a text body
	 */
	props: {
		color: {
			type: String,
			default: 'black8'
		},
		size: {
			type: String,
			default: 'xsmall'
		},
		weight: {
			type: String,
			default: 'normal'
		},
		inline: {
			type: Boolean,
			default: false
		},
		inverse: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss">
.fig-text {
	font-weight: var(--font-weight-normal);
	font-size: var(--font-size-xsmall);
	font-family: var(--font-stack);
	line-height: var(--font-line-height);
	letter-spacing: var(--font-letter-spacing-pos-xsmall);
	cursor: default;

	&::selection {
		color: var(--black);
		background-color: var(--blue3);
	}
}

// Sizes
.small {
	font-size: var(--font-size-small);
	letter-spacing: var(--font-letter-spacing-pos-small);
}
.large {
	font-size: var(--font-size-large);
	line-height: var(--font-line-height-large);
	letter-spacing: var(--font-letter-spacing-pos-large);
}
.xlarge {
	font-size: var(--font-size-xlarge);
	line-height: var(--font-line-height-large);
	letter-spacing: var(--font-letter-spacing-pos-xlarge);
}

// Weights
.medium {
	font-weight: var(--font-weight-medium);
}
.bold {
	font-weight: var(--font-weight-bold);
}

// Letter spacing adjustments based on inverse prop
.inverse {
	letter-spacing: var(--font-letter-spacing-neg-xsmall);

	&.small {
		letter-spacing: var(--font-letter-spacing-neg-small);
	}
	&.large {
		letter-spacing: var(--font-letter-spacing-neg-large);
	}
	&.xlarge {
		letter-spacing: var(--font-letter-spacing-neg-xlarge);
	}
	&--color-override {
		color: var(--white) !important;
	}
}

.inline {
	display: inline-block;
}
</style>
