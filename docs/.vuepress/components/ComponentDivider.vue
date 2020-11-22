<template>
	<div
		class="component-divider"
		:class="
			small ? 'component-divider--small' : 'component-divider--default'
		"
	>
		<svg
			v-if="small"
			width="12"
			height="12"
			viewBox="0 0 12 12"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
		>
			<path
				d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
				fill="black"
			/>
		</svg>
		<svg v-else width="93" height="12" viewBox="0 0 93 12" fill="none">
			<path d="M80 12H92L86 0L80 12Z" fill="#000" />
			<rect x="40" width="12" height="12" fill="#000" />
			<path
				d="M6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68629 0 0 2.68629 0 6C0 9.31371 2.68629 12 6 12Z"
				fill="#000"
			/>
		</svg>
	</div>
</template>

<script>
export default {
	name: 'ComponentDivider',
	/**
	 * Divides components with a small svg icon for some visual whitespace.
	 * Small prop is used when dividing 'sub-categories', such as the colors in /style-variables
	 */
	props: {
		small: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
.component-divider {
	display: flex;
	justify-content: center;
	margin: 4rem 0 3rem 0;
	opacity: 0.1;

	&--default {
		margin: 5rem 0 3rem 0;
	}

	&--small {
		margin: 4rem 0 2rem 0;
	}
}
</style>
