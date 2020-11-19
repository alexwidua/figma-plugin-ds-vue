<template>
	<li
		class="disclosure__item"
		:class="{
			expanded: isExpanded,
			section: section
		}"
	>
		<div class="disclosure__title" @click="toggle" v-html="title" />

		<div class="disclosure__content">
			<slot>Content</slot>
		</div>
	</li>
</template>

<script>
export default {
	name: 'FigDisclosureItem',
	/**
	 * Collapsable disclosure item with slotable child components
	 *
	 * HEADS UP: Must be a child of a parent Disclosure.vue wrapper component
	 */
	props: {
		title: { type: String, default: 'Title' },
		section: Boolean,
		expanded: { type: Boolean, default: undefined }
	},
	data() {
		return {
			expandedState: false
		}
	},
	methods: {
		toggle() {
			const newState = !this.isExpanded
			// To avoid mutating props
			this.expandedState = newState
			this.$emit('input', newState)
		}
	},
	computed: {
		isExpanded() {
			// Check if parent component controls expanded state
			if (this.expanded !== undefined) return this.expanded
			return this.expandedState
		}
	}
}
</script>

<style lang="scss">
.disclosure {
	&__item {
		position: relative;
		display: flex;
		flex-direction: column;
		width: 100%;
		margin: 0;
		padding: 0;
		list-style-type: none;
		border-bottom: 1px solid var(--silver);

		&:last-child {
			border-bottom: 1px solid transparent;
		}

		&.section {
			font-weight: var(--font-weight-bold);
		}

		&.expanded {
			& .disclosure__content {
				display: block;
				border-bottom: 1px solid transparent;
			}
			& .disclosure__title {
				&:before {
					background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m9%2010%203-4h-6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E');
					opacity: 0.8;
				}
			}
		}
	}
	&__title {
		display: flex;
		align-items: center;
		height: var(--size-medium);
		padding: 0 8px 0 24px;
		color: var(--black8);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-xsmall);
		line-height: var(--line-height);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		cursor: default;
		user-select: none;

		&:before {
			position: absolute;
			top: 8px;
			left: 4px;
			display: block;
			width: 16px;
			height: 16px;
			background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22m11%208-4-3v6z%22%20fill%3D%22%23000%22%2F%3E%3C%2Fsvg%3E');
			background-repeat: no-repeat;
			background-position: center center;
			opacity: 0.3;
			content: '';
		}
		&:hover {
			&:before {
				opacity: 0.8;
			}
		}
	}

	&__content {
		display: none;
		padding: var(--size-xxsmall) var(--size-xxsmall) var(--size-xxsmall)
			var(--size-small);
		color: var(--black8);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-xsmall);
		line-height: var(--line-height);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		user-select: none;
		pointer-events: none;
	}
}
</style>
