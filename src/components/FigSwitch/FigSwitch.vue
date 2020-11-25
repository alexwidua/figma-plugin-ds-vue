<template>
	<div class="toggle">
		<input
			class="toggle__knob"
			type="checkbox"
			:id="uniqueId"
			:checked="checked !== undefined ? checked : value"
			:value="value"
			:disabled="disabled"
			@change="$emit('input', $event.target.checked)"
		/>
		<label class="toggle__label" :for="uniqueId">
			<slot>Item</slot>
		</label>
	</div>
</template>

<script>
import uniqueId from '../../mixins/uniqueId'

export default {
	name: 'FigSwitch',
	/**
	 * Switch component to toggle between two states
	 */
	props: {
		value: Boolean,
		checked: { type: Boolean, default: undefined },
		disabled: Boolean
	},
	// Use unique ID so clicking the label also toggles the switch
	mixins: [uniqueId]
}
</script>

<style lang="scss">
.toggle {
	position: relative;
	display: flex;
	align-items: center;
	height: var(--size-medium);
	cursor: default;

	& input {
		opacity: 0;
	}

	& input:checked + &__label:before {
		color: var(--black);
		background-color: var(--black8);
	}
	& input:checked + &__label:after {
		transform: translateX(12px);
	}
	& input:checked:disabled + &__label:before {
		background-color: var(--black);
		border: 1px solid var(--black);
	}

	& input:focus + &__label:before {
		box-shadow: 0 0 0 2px var(--blue);
	}
	& input:disabled + &__label {
		color: var(--black);
		opacity: 0.3;
	}

	&__label {
		display: flex;
		align-items: center;
		height: 100%;
		margin-left: -16px;
		padding: 0 var(--size-xsmall) 0 var(--size-large);
		color: var(--black8);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-xsmall);
		font-family: var(--font-stack);
		line-height: var(--font-line-height);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
		user-select: none;

		/* track */
		&:before {
			position: absolute;
			top: 10px;
			left: 8px;
			display: block;
			width: 22px;
			height: 10px;
			background-color: var(--white);
			border: 1px solid var(--black8);
			border-radius: 6px;
			transition: background-color 0 0.2s;
			content: '';
		}
		/* slider */
		&:after {
			position: absolute;
			top: 10px;
			left: 8px;
			display: block;
			width: 10px;
			height: 10px;
			background-color: var(--white);
			border: 1px solid var(--black8);
			border-radius: 50%;
			transition: transform 0.2s;
			content: '';
		}
	}
}
</style>
