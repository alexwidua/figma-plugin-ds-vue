<template>
	<div class="checkbox">
		<input
			class="checkbox__input"
			type="checkbox"
			:id="uniqueId"
			:checked="checked !== undefined ? checked : value"
			:value="value"
			:disabled="disabled"
			@change="onChange"
		/>
		<label class="checkbox__label" :for="uniqueId">
			<slot>Item</slot>
		</label>
	</div>
</template>

<script>
import uniqueId from '../../mixins/uniqueId'

export default {
	name: 'FigCheckbox',
	/**
	 * Checkbox input component
	 */
	props: {
		value: Boolean,
		checked: { type: Boolean, default: undefined },
		disabled: Boolean
	},
	// Use unique ID so clicking the label also (un)checks the box
	mixins: [uniqueId],
	methods: {
		onChange(e) {
			this.$emit('input', e.target.checked)
		}
	}
}
</script>

<style lang="scss">
.checkbox {
	position: relative;
	display: flex;
	align-items: center;
	height: var(--size-medium);
	cursor: default;

	&__input {
		width: 10px;
		height: 10px;
		margin: 0;
		padding: 0;
		opacity: 0;

		&:checked + label:before {
			background-color: var(--blue);
			background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%227%22%20viewBox%3D%220%200%208%207%22%20width%3D%228%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m1.17647%201.88236%201.88235%201.88236%203.76471-3.76472%201.17647%201.17648-4.94118%204.9412-3.05882-3.05884z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');
			background-repeat: no-repeat;
			background-position: 1px 2px;
			border: 1px solid var(--blue);
		}
		&:disabled + label {
			color: var(--black);
			opacity: 0.3;
		}
		&:checked:disabled + label:before {
			background-color: var(--black8);
			border: 1px solid transparent;
		}

		&:enabled:checked:focus + label:before {
			border: 1px solid var(--white);
			border-radius: var(--border-radius-small);
			box-shadow: 0 0 0 2px var(--blue);
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
			margin: -1px 10px 0 -8px;
			border: 1px solid var(--black8);
			border-radius: var(--border-radius-small);
			content: '';
		}
	}
}
</style>
