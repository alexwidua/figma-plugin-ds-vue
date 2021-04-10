<template>
	<ul class="fig-disclosure">
		<slot />
	</ul>
</template>

<script>
export default {
	name: 'DisclosureWrapper',
	/**
	 * Disclosure menu wrapper, takes DisclosureItem.vue as children
	 */
	data: () => ({
		disclosure: {
			numItems: 0,
			currentIndex: null
		}
	}),
	props: {
		concede: {
			type: Boolean,
			default: false
		}
	},
	provide() {
		return { disclosure: this.disclosure, concede: this.concede }
	}
}
</script>

<style lang="scss">
.fig-disclosure {
	position: relative;
	width: 100%;
	margin: 0;
	padding: 0;
	list-style-type: none;
}
</style>
