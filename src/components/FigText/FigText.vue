<template>
	<div
		class="type"
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
	name: 'FigText',
	/**
	 * FigText component to display a text body
	 */
	props: {
		color: {
			type: String,
			default: 'black8'
		},
		size: {
			type: String,
			default: 'small'
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

<style lang="scss" scoped>
.type {
	font-weight: var(--font-weight-normal);
	font-size: var(--font-size-xsmall);
	font-family: var(--font-stack);
	line-height: var(--font-line-height);
	letter-spacing: var(--font-letter-spacing-pos-xsmall);
}
/* sizes */
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
/* weights */
.medium {
	font-weight: var(--font-weight-medium);
}
.bold {
	font-weight: var(--font-weight-bold);
}
/* letter spacing adjustments based pos/neg application */
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
