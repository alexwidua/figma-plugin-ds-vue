<template>
	<ul class="disclosure">
		<slot />
	</ul>
</template>

<script>
export default {
	name: 'FigDisclosureWrapper'
	/**
	 * Disclosure menu wrapper; takes DisclosureItem.vue as childs
	 *
	 * TODO: Wrapper should control disclosure items and make sure only
	 * one DisclosureItem is open at the same time.
	 *
	 */
}
</script>

<style lang="scss">
.disclosure {
	position: relative;
	width: 100%;
	margin: 0;
	padding: 0;
	list-style-type: none;
}
</style>
