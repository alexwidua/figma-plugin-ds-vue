<template>
	<div class="textarea__wrapper">
		<label v-if="label" class="label" :for="uniqueId">
			{{ label }}
		</label>
		<textarea
			class="textarea__field"
			:id="uniqueId"
			:value="value"
			:rows="rows"
			@change="onChange"
			:disabled="disabled"
		/>
	</div>
</template>

<script>
import uniqueId from '@/mixins/uniqueId'

export default {
	name: 'FigTextarea',
	/**
	 * Textarea input component
	 */
	props: {
		value: String,
		label: { type: String, default: undefined },
		disabled: Boolean,
		rows: { type: Number, default: 2 }
	},
	mixins: [uniqueId],
	methods: {
		onChange(e) {
			this.$emit('input', e.target.value)
		}
	}
}
</script>

<style lang="scss" scoped>
.textarea {
	&__wrapper {
		position: relative;
	}

	&__field {
		position: relative;
		display: flex;
		align-items: center;
		width: 100%;
		min-height: 62px;
		margin: 1px 0 1px 0;
		padding: 7px 4px 9px 7px;
		overflow: visible;
		overflow-y: auto;
		color: var(--black8);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-xsmall);
		font-family: var(--font-stack);
		line-height: var(--line-height);
		letter-spacing: var(--font-letter-spacing-neg-xsmall);
		background-color: var(--white);
		border: 1px solid var(--black1);
		border-radius: var(--border-radius-small);
		outline: none;
		resize: none;

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
		&:focus:placeholder-shown {
			border: 1px solid var(--blue);
			outline: 1px solid var(--blue);
			outline-offset: -2px;
		}
		&:active,
		&:focus {
			padding: 7px 4px 9px 7px;
			color: var(--black);
			border: 1px solid var(--blue);
			outline: 1px solid var(--blue);
			outline-offset: -2px;
		}
		&:disabled,
		&:disabled:hover {
			position: relative;
			color: var(--black3);
			border: 1px solid transparent;
		}
		&:disabled:active {
			padding: 7px 4px 9px 7px;
			outline: none;
		}
	}
}
</style>
