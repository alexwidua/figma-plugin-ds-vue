<template>
	<div class="component-wrapper" :class="{ column: column, row: !column }">
		<slot />
	</div>
</template>

<script>
export default {
	name: 'ComponentWrapper',
	/**
	 * Wraps the Fig components for demo. Takes a flex direction prop.
	 */
	props: {
		column: {
			type: Boolean,
			default: false
		}
	}
}
</script>

<style lang="scss" scoped>
.component-wrapper {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	height: 12rem;
	margin-top: 1rem;
	padding: 1rem;
	background: #eee;
	border-radius: 6px;
}

.column {
	flex-direction: column;

	& > * {
		margin-top: 0.5rem;
	}
}

.row {
	flex-direction: row;

	& > * {
		margin-right: 0.5rem;
	}
}
</style>
