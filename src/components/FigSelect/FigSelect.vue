<template>
	<div class="select">
		<button
			class="select__button"
			@click="openSelect()"
			:disabled="disabled"
		>
			<span
				v-if="buttonIcon"
				class="icon select__icon"
				:class="`icon--${buttonIcon}`"
			/>
			<span
				class="select__button__label"
				:class="{
					'select__button__label--placeholder': !this.selectedKey
				}"
				v-html="buttonLabel"
			/>
			<span class="chevron" />
		</button>
		<ul class="select__input" :class="{ active: isOpen }">
			<template v-for="(item, itemIndex) in items">
				<div
					v-if="item.divider == true"
					:key="itemIndex"
					class="select__input__divider"
				/>
				<li
					v-else
					class="select__input__item"
					:key="itemIndex"
					:class="{
						selected: item.key === selectedKey
					}"
					@click="selectItem(item.key)"
				>
					<span class="inner-icon" />
					<span class="inner-label">{{ item && item.label }}</span>
				</li>
			</template>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'FigSelect',
	/**
	 * Select input component with optional key icon
	 */
	data() {
		return {
			openState: false,
			selectedKeyState: ''
		}
	},
	props: {
		items: {
			type: Array,
			default() {
				return [
					{
						icon: 'heart',
						label: 'Item 1',
						key: 'item-1'
					},
					{
						divider: true
					},
					{
						icon: 'heart-fill',
						label: 'Item 2',
						key: 'item-2'
					}
				]
			}
		},
		value: { type: String | Number, default: undefined },
		placeholder: { type: String, default: undefined },
		open: { type: Boolean, default: undefined },
		disabled: Boolean
	},

	computed: {
		selectedKey() {
			return this.value !== undefined ? this.value : this.selectedKeyState
		},
		isOpen() {
			return this.open !== undefined ? this.open : this.openState
		},
		buttonLabel() {
			if (this.selectedKey) {
				const item = this.items.find(
					(x) => 'key' in x && x.key === this.selectedKey
				)
				if (item && 'key' in item) return item.label
			}
			return this.placeholder
		},
		buttonIcon() {
			if (this.selectedKey) {
				const item = this.items.find(
					(x) => 'key' in x && x.key === this.selectedKey
				)
				if (item && 'key' in item) return item.icon
			}
			return false
		}
	},
	methods: {
		selectItem(itemKey) {
			this.selectedKeyState = itemKey
			this.$emit('input', itemKey)
			this.closeSelect()
		},
		closeSelect() {
			this.openState = false
			this.$emit('open', false)
			document.removeEventListener('click', this.handleDocumentClick)
		},
		openSelect() {
			this.openState = true
			this.$emit('open', true)
			document.addEventListener('click', this.handleDocumentClick)
		},
		handleDocumentClick(e) {
			if (!this.$el.contains(e.target)) {
				this.closeSelect()
			}
		}
	}
}
</script>

<style lang="scss" scoped>
.select {
	position: relative;

	&__button {
		display: flex;
		align-items: center;
		width: 100%;
		height: 32px;
		margin: 1px 0 1px 0;
		padding: 0px var(--size-xxsmall) 0px var(--size-xxsmall);
		overflow-y: hidden;
		background-color: var(--white);
		border: 1px solid transparent;
		border-radius: var(--border-radius-small);

		& * {
			pointer-events: none;
		}

		&:hover {
			border-color: var(--black1);

			& .select__button__label--placeholder {
				color: var(--black8);
			}
		}

		&:focus {
			border: 1px solid var(--blue);
			outline: 1px solid var(--blue);
			outline-offset: -2px;

			& .select__button__label--placeholder {
				color: var(--black8);
			}
		}

		&:disabled {
			&:hover {
				justify-content: flex-start;
				border-color: transparent;

				& .chevron {
					margin-left: -12px;
					opacity: 0.3;
				}
			}

			& .select__icon {
				opacity: 0.1;
			}
			& .select__button__label {
				color: var(--black3);
			}
			&:hover .select__button__label--placeholder {
				color: var(--black3);
			}
		}

		&:hover .chevron,
		&:focus .chevron {
			margin-left: auto;
			opacity: 1;
		}

		&__label {
			margin-top: -1px;
			margin-right: 6px;
			overflow-x: hidden;
			color: var(--black8);
			font-weight: var(--font-weight-normal);
			font-size: var(--font-size-xsmall);
			line-height: var(--line-height);
			letter-spacing: var(--font-letter-spacing-neg-xsmall);
			white-space: nowrap;
			text-overflow: ellipsis;

			&--placeholder {
				color: var(--black3);
			}
		}
	}

	&__input {
		position: absolute;
		top: 0;
		left: 0;
		z-index: 1000;
		display: none;
		width: 100%;
		margin: 0;
		padding: var(--size-xxsmall) 0 var(--size-xxsmall) 0;
		overflow-x: overlay;
		overflow-y: auto;
		background-color: var(--bg-hud);
		border-radius: var(--border-radius-small);
		box-shadow: var(--shadow-hud);

		&.active {
			display: block;
		}

		&::-webkit-scrollbar {
			width: 12px;
			background-color: transparent;
			background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=');
			background-repeat: repeat;
			background-size: 100% auto;
		}
		&::-webkit-scrollbar-track {
			border: solid 3px transparent;
			-webkit-box-shadow: inset 0 0 10px 10px transparent;
			box-shadow: inset 0 0 10px 10px transparent;
		}
		&::-webkit-scrollbar-thumb {
			border: solid 3px transparent;
			border-radius: 6px;
			-webkit-box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.4);
			box-shadow: inset 0 0 10px 10px rgba(255, 255, 255, 0.4);
		}

		&__divider {
			display: block;
			height: 1px;
			margin: 8px 0 7px 0;
			background-color: var(--white2);
		}

		&__item {
			display: flex;
			align-items: center;
			height: var(--size-small);
			padding: 0px var(--size-xsmall) 0px var(--size-xxsmall);
			color: var(--white);
			font-weight: var(--font-weight-normal);
			font-size: var(--font-size-small);
			font-family: var(--font-stack);
			line-height: var(--font-line-height);
			letter-spacing: var(--font-letter-spacing-neg-xsmall);
			outline: none;
			cursor: default;
			user-select: none;

			&.selected {
				& .inner-icon {
					opacity: 1;
				}
			}
			& .inner-label {
				overflow-x: hidden;
				white-space: nowrap;
				text-overflow: ellipsis;
				pointer-events: none;
			}
			& .inner-icon {
				width: var(--size-xsmall);
				height: var(--size-xsmall);
				margin-right: var(--size-xxsmall);
				background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2216%22%20viewBox%3D%220%200%2016%2016%22%20width%3D%2216%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m13.2069%205.20724-5.50002%205.49996-.70711.7072-.70711-.7072-3-2.99996%201.41422-1.41421%202.29289%202.29289%204.79293-4.79289z%22%20fill%3D%22%23fff%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');
				background-repeat: no-repeat;
				background-position: center center;
				opacity: 0;
				pointer-events: none;
			}
			& .highlight,
			&:hover,
			&:focus {
				background-color: var(--blue);
			}
		}
	}
	// Render the .icon class styles (_icon.scss) but override some additional styles
	&__icon {
		width: var(--size-medium);
		height: var(--size-medium);
		margin-top: -1px;
		margin-right: 2px;
		margin-left: -8px;
		font-size: var(--font-size-xsmall);
		font-family: var(--font-stack);
		cursor: default;
		opacity: 0.3;
		user-select: none;
	}
}

/* Misc */

.chevron {
	display: block;
	width: 30px;
	height: 30px;
	margin-top: 0px;
	margin-left: -12px;
	background-image: url('data:image/svg+xml;utf8,%3Csvg%20fill%3D%22none%22%20height%3D%2230%22%20viewBox%3D%220%200%2030%2030%22%20width%3D%2230%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20clip-rule%3D%22evenodd%22%20d%3D%22m15%2016.7071-3-3%20.7071-.7071%202.6465%202.6464%202.6464-2.6464.7071.7071-3%203-.3535.3536z%22%20fill%3D%22%23000%22%20fill-rule%3D%22evenodd%22%2F%3E%3C%2Fsvg%3E');
	background-repeat: no-repeat;
	background-position: center center;
	opacity: 0.3;
}
</style>
