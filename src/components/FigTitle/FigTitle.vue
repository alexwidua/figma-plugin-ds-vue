<template>
	<div class="section-title">
		<slot>Title</slot>
	</div>
</template>

<script>
export default {
	name: 'FigTitle'
	/**
	 * Title component for section headlines
	 */
}
</script>

<style lang="scss">
.section-title {
	display: flex;
	align-items: center;
	width: 100%;
	height: var(--size-medium);
	padding: 0 calc(var(--size-xxsmall) / 2) 0 var(--size-xxsmall);
	color: var(--black8);
	font-weight: var(--font-weight-bold);
	font-size: var(--font-size-xsmall);
	line-height: var(--line-height);
	letter-spacing: var(--font-letter-spacing-pos-xsmall);
	cursor: default;
	user-select: none;
}
</style>
