<template>
	<div class="radio">
		<form class="radio__wrapper" v-for="(item, i) in items" :key="i">
			<input
				class="radio__field"
				type="radio"
				:checked="item.value == selectedKey"
				:id="uniqueId + i"
				:value="item.value"
				:disabled="disabled"
				@change="onChange(item.value)"
			/>
			<label
				class="radio__label"
				:for="uniqueId + i"
				v-html="item.label"
			/>
		</form>
	</div>
</template>

<script>
import uniqueId from '../../mixins/uniqueId'

export default {
	name: 'FigRadio',
	/**
	 * Radio input component
	 */
	props: {
		checked: Number,
		items: {
			type: Array,
			default() {
				return [
					{ label: 'Item 1', value: '1' },
					{ label: 'Item 2', value: '2' }
				]
			}
		},
		value: { type: String | Number, default: undefined },
		disabled: Boolean
	},
	data() {
		return {
			selectedKeyState: 0
		}
	},
	// Use unique ID so clicking the label also (un)checks the box
	mixins: [uniqueId],
	methods: {
		onChange(selection) {
			this.selectedKeyState = selection
			this.$emit('input', selection)
		}
	},
	computed: {
		selectedKey() {
			return this.value !== undefined ? this.value : this.selectedKeyState
		}
	}
}
</script>

<style lang="scss">
.radio {
	&__wrapper {
		position: relative;
		display: flex;
		align-items: center;
		height: var(--size-medium);
		cursor: default;
	}

	&__field {
		width: 10px;
		height: 10px;
		margin: 0;
		padding: 0;
		opacity: 0;

		&:checked + label:before {
			background-image: url('data:image/svg+xml,%3Csvg width="6" height="6" viewBox="0 0 6 6" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Crect width="6" height="6" rx="3" fill="black" fill-opacity="0.8"/%3E%3C/svg%3E%0A');
			background-repeat: no-repeat;
			background-position: 2px 2px;
		}
		&:disabled + label {
			opacity: 0.3;
		}
		&:checked:disabled + label:before {
			border: 1px solid var(--black);
		}

		&:enabled:checked:focus + label:before {
			border: 1px solid var(--blue);
			border-radius: var(--border-radius-small);
			border-radius: 50%;
			box-shadow: 0 0 0 1px var(--blue);
		}

		&:enabled:focus + label:before {
			border: 1px solid var(--blue);
			box-shadow: 0 0 0 1px var(--blue);
		}
	}

	&__label {
		display: flex;
		align-items: center;
		height: 100%;
		margin-left: -16px;
		padding: 0 var(--size-xsmall) 0 var(--size-small);
		color: var(--black8);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-xsmall);
		font-family: var(--font-stack);
		line-height: var(--font-line-height);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		user-select: none;

		&:before {
			display: block;
			width: 10px;
			height: 10px;
			margin: 0px 12px 0 -8px;
			border: 1px solid var(--black8);
			border-radius: var(--border-radius-small);
			border-radius: 50%;
			content: '';
		}
	}
}
</style>
