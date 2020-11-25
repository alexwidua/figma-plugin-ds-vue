<template>
	<div
		class="visual-bell"
		:class="{
			'visual-bell--error': error,
			'visual-bell--loading': loading
		}"
	>
		<div class="visual-bell__spinner-container" v-if="loading">
			<span class="visual-bell__spinner-icon" />
		</div>
		<span class="visual-bell__msg">
			<slot> Event </slot>
		</span>
		<button
			class="visual-bell__action"
			v-if="actionLabel"
			@click="$emit('click', $event)"
			v-html="actionLabel"
		/>
	</div>
</template>

<script>
export default {
	name: 'FigVisualBell',
	/**
	 * Alerts the user about changes to conditions
	 * Should disappear after a few seconds and be positioned
	 * ath the bottom center of the screen (UI)
	 *
	 * HEADS UP: This component might be deprecated
	 */
	props: {
		loading: Boolean,
		error: Boolean,
		actionLabel: { type: String, default: undefined }
	}
}
</script>

<style lang="scss">
.visual-bell {
	display: flex;
	flex-shrink: 1;
	align-items: center;
	align-self: flex-start;
	justify-content: space-between;
	width: 100%;
	height: 36px;
	padding: 0 0 0 16px;
	background-color: var(--bg-hud);
	border: 1px solid var(--bg-black);
	border-radius: var(--border-radius-med);
	box-shadow: var(--shadow-hud);
	cursor: default;
	transition: all 0.3s ease-out;

	&__msg {
		display: block;
		margin-right: auto;
		color: var(--white);
		font-weight: 400;
		font-size: var(--font-size-xlarge);
		font-family: var(--font-stack);
		line-height: 36px;
	}

	&__action {
		display: flex;
		align-items: center;
		width: auto;
		height: 36px;
		margin-left: auto;
		padding: 0 16px 0 16px;
		color: var(--white);
		font-weight: 600;
		font-size: var(--font-size-xlarge);
		font-family: var(--font-stack);
		line-height: 36px;
		background: var(--bg-hud);
		border: none;
		border-left: 1px solid var(--white2);
		border-top-right-radius: var(--border-radius-med);
		border-bottom-right-radius: var(--border-radius-med);
		transition: background-color 0.3s ease-out;

		&:hover {
			background: var(--black);
		}

		&:focus {
			outline: none;
			box-shadow: 0 0 0 2px var(--blue);
		}
	}

	&__spinner {
		&-container {
			display: none;
			width: 24px;
			height: 24px;
			margin-right: 8px;
			margin-left: -4px;
			overflow: hidden;
		}

		&-icon {
			display: block;
			width: 24px;
			height: 24px;
			background-image: url('data:image/svg+xml;utf8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2224%22%20height%3D%2224%22%20fill%3D%22none%22%3E%3Cpath%20d%3D%22M4.848%209.74l.477.15-.477-.15zm2.622-3.08a.5.5%200%200%200-.617-.787l.617.787zm10.677%201.99a7%207%200%200%201%20.838%203.803l.998.065a8%208%200%200%200-.958-4.346l-.878.478zm.838%203.803a7%207%200%200%201-1.324%203.662l.81.588a8%208%200%200%200%201.513-4.186l-.998-.065zm-1.324%203.662a7%207%200%200%201-3.076%202.388l.37.93a8%208%200%200%200%203.515-2.729l-.81-.588zm-3.076%202.388a7%207%200%200%201-3.876.375l-.184.983a8%208%200%200%200%204.43-.428l-.37-.93zm-3.876.375a7%207%200%200%201-3.477-1.755l-.68.732a8%208%200%200%200%203.973%202.005l.184-.983zm-3.477-1.755a7%207%200%200%201-2.001-3.341l-.967.255a8%208%200%200%200%202.287%203.818l.68-.732zm-2-3.34a7%207%200%200%201%20.094-3.893l-.954-.3a8%208%200%200%200-.107%204.449l.967-.255zm.094-3.893c.323-1.024.863-1.835%201.326-2.394.23-.278.44-.49.6-.632l.175-.157.044-.037c.01-.008.01-.008-.298-.402l-.31-.393-.026.02-.06.05-.21.2c-.175.165-.413.407-.674.722-.52.627-1.137%201.55-1.5%202.73l.954.3z%22%20fill%3D%22%23a5a5a5%22%2F%3E%3C%2Fsvg%3E');
			background-repeat: none;
			animation: rotating 1s linear infinite;
		}
	}

	&--loading {
		.visual-bell__spinner-container {
			display: block;
		}
	}

	&--hidden {
		margin-top: 8px;
		opacity: 0;
	}

	&--error {
		background-color: var(--red);
		border: 1px solid var(--red);

		& .visual-bell__action {
			background-color: var(--red);

			&:focus {
				outline: none;
				box-shadow: 0 0 0 2px var(--blue);
			}
		}
	}
}

// Spinning animation moved to ->  _animations.scss
</style>
