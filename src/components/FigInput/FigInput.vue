<template>
	<div>
		<label v-if="label" class="label" :for="uniqueId" v-html="label" />
		<div class="input" v-if="icon || iconText">
			<div
				v-if="!iconText"
				class="icon input__icon"
				:class="{
					['icon--' + icon]: icon,
					spinning
				}"
			/>
			<div
				v-else
				class="input__icon--text"
				:class="{ spinning }"
				v-html="iconText"
			/>
			<input
				type="input"
				class="input__field indent"
				:class="border"
				:value="value"
				:disabled="disabled"
				:placeholder="placeholder"
				@input="onInput"
				:id="uniqueId"
			/>
		</div>
		<input
			v-else
			type="input"
			class="input__field"
			:class="border"
			:value="value"
			:disabled="disabled"
			:placeholder="placeholder"
			@input="onInput"
			:id="uniqueId"
		/>
	</div>
</template>

<script>
import uniqueId from '../../mixins/uniqueId'

export default {
	name: 'FigInput',
	/**
	 * Input component with optional icon
	 */
	props: {
		icon: { type: String, default: undefined },
		iconText: { type: String, default: undefined },
		value: { type: String, default: undefined },
		label: { type: String, default: undefined },
		placeholder: { type: String, default: undefined },
		disabled: Boolean,
		border: Boolean,
		spinning: Boolean
	},
	// Use unique ID so clicking the label also focusses the input
	mixins: [uniqueId],
	methods: {
		onInput(e) {
			this.$emit('input', e.target.value)
		}
	}
}
</script>

<style lang="scss">
.input {
	position: relative;

	&__field {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		height: 32px;
		margin: 1px 0 1px 0;
		padding: var(--size-xxsmall) var(--size-xxxsmall) var(--size-xxsmall)
			var(--size-xxsmall);
		overflow: visible;
		color: var(--black8);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-xsmall);
		line-height: var(--line-height);
		letter-spacing: var(--font-letter-spacing-neg-xsmall);
		background-color: var(--white);
		border: 1px solid transparent;
		border-radius: var(--border-radius-small);
		outline: none;

		&:hover,
		&:placeholder-shown:hover {
			color: var(--black8);
			background-image: none;
			border: 1px solid var(--black1);
		}

		&::selection {
			color: var(--black);
			background-color: var(--blue3);
		}

		&::placeholder {
			color: var(--black3);
			border: 1px solid transparent;
		}

		&:placeholder-shown {
			color: var(--black8);
			background-image: none;
			border: 1px solid var(--black1);
		}
		&:focus:placeholder-shown {
			border: 1px solid var(--blue);
			outline: 1px solid var(--blue);
			outline-offset: -2px;
		}
		&:disabled:hover {
			border: 1px solid transparent;
		}
		&:active,
		&:focus {
			color: var(--black);
			border: 1px solid var(--blue);
			outline: 1px solid var(--blue);
			outline-offset: -2px;
		}
		&:disabled {
			position: relative;
			color: var(--black3);
			background-image: none;
		}
		&:disabled:active {
			outline: none;
		}
	}

	// Render the .icon class styles (_icon.scss) but override some additional styles
	&__icon {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1;
		opacity: 0.3;
		pointer-events: none;

		&--text {
			position: absolute;
			top: calc(36px / 4);
			left: 12px;
			z-index: 1;
			color: var(--black3);
			font-weight: var(--font-weight-bold);
			font-size: var(--font-size-xsmall);
			opacity: 1;
			pointer-events: none;
		}
	}
}

.border {
	background-image: none;
	border: 1px solid var(--black1);
	&:disabled {
		background-image: none;
		border: 1px solid transparent;
	}
	&:disabled:placeholder-shown {
		background-image: none;
		border: 1px solid transparent;
	}
	&:disabled:placeholder-shown:active {
		border: 1px solid transparent;
		outline: none;
	}
	&:placeholder-shown {
		background-image: none;
		border: 1px solid var(--black1);
	}
}

.indent {
	padding-left: 32px;
}

// Spinning animation moved to ->  _animations.scss
</style>
