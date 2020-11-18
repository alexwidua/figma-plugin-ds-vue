<template>
	<label class="label">
		<slot>Label</slot>
	</label>
</template>

<script>
export default {
	name: 'FigLabel'
	/**
	 * Label component, e.g. used in conjunction with a Icon component
	 */
}
</script>

<style lang="scss">
.label {
	display: flex;
	align-items: center;
	width: 100%;
	height: var(--size-medium);
	padding: 0 calc(var(--size-xxsmall) / 2) 0 var(--size-xxsmall);
	color: var(--black3);
	font-weight: var(--font-weight-normal);
	font-size: var(--font-size-xsmall);
	line-height: var(--line-height);
	letter-spacing: var(--font-letter-spacing-pos-xsmall);
	cursor: default;
	user-select: none;
}
</style>
