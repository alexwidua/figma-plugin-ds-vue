<template>
	<span
		class="fig-tooltip fig-icon"
		:class="[
			getPosition,
			inverse ? ' fig-icon--tooltip-inverse' : ' fig-icon--tooltip'
		]"
	>
		<span
			class="fig-tooltip__content"
			:style="width ? `width: ${this.width}px` : 'width: auto'"
		>
			<slot />
		</span>
	</span>
</template>

<script>
export default {
	name: 'Tooltip',
	/**
	 * Tooltip component to notify the user of extra information
	 * related to a particular UI element
	 */
	props: {
		position: {
			type: String,
			default: 'bottom-center'
		},
		width: {
			type: [String, Number],
			default: undefined
		},
		inverse: {
			type: Boolean,
			default: false
		}
	},
	computed: {
		getPosition() {
			const posMap = [
				'left',
				'l',
				'top-left',
				'tl',
				'top-center',
				'tc',
				'top-right',
				'tr',
				'right',
				'r',
				'bottom-right',
				'br',
				'bottom-center',
				'bc',
				'bottom-left',
				'bl'
			]
			return posMap.indexOf(this.position) > -1
				? this.position
				: 'bottom-center'
		}
	}
}
</script>

<style lang="scss">
.fig-tooltip {
	position: relative;

	&__content {
		position: absolute;
		z-index: 9999;
		padding: 8px;
		color: #fff;
		font-size: var(--font-size-xsmall);
		text-align: center;
		background: var(--bg-hud);
		border-radius: 2px;
		visibility: hidden;
		opacity: 0;
		width: 96px;
		pointer-events: none;

		&::after {
			position: absolute;
			margin-left: -7px;
			border-style: solid;
			border-width: 7px;
			content: '';
		}

		&--nowrap {
			white-space: nowrap;
		}
	}

	&:hover .fig-tooltip__content,
	&:active .fig-tooltip__content,
	&:focus .fig-tooltip__content {
		visibility: visible;
		opacity: 1;
	}
}

/* 
Tooltip position
*/

// Left
.left .fig-tooltip__content,
.l .fig-tooltip__content {
	top: 0;
	right: calc(100% + 16px);

	&::after {
		top: 8px;
		left: calc(100% + 7px);
		border-color: transparent transparent transparent var(--bg-hud);
	}
}

// Right
.right .fig-tooltip__content,
.r .fig-tooltip__content {
	top: 0;
	left: calc(100% + 16px);

	&::after {
		top: 8px;
		right: 100%;
		border-color: transparent var(--bg-hud) transparent transparent;
	}
}

// Top Left
.top-left .fig-tooltip__content,
.tl .fig-tooltip__content {
	right: 0;
	bottom: calc(100% + 8px);

	&::after {
		top: 100%;
		left: calc(100% - 16px);
		border-color: var(--bg-hud) transparent transparent transparent;
	}
}

// Top Center
.top-center .fig-tooltip__content,
.tc .fig-tooltip__content {
	right: 50%;
	bottom: calc(100% + 8px);
	transform: translateX(50%);

	&::after {
		top: 100%;
		left: 50%;
		border-color: var(--bg-hud) transparent transparent transparent;
	}
}

// Top Right
.top-right .fig-tooltip__content,
.tr .fig-tooltip__content {
	bottom: calc(100% + 8px);
	left: 0;

	&::after {
		top: 100%;
		left: 16px;
		border-color: var(--bg-hud) transparent transparent transparent;
	}
}

// Bottom Left
.bottom-left .fig-tooltip__content,
.bl .fig-tooltip__content {
	top: calc(100% + 8px);
	right: 0%;

	&::after {
		bottom: 100%;
		left: calc(100% - 16px);
		border-color: transparent transparent var(--bg-hud) transparent;
	}
}

// Bottom Center
.bottom-center .fig-tooltip__content,
.bc .fig-tooltip__content {
	top: calc(100% + 8px);
	right: 50%;
	transform: translateX(50%);

	&::after {
		bottom: 100%;
		left: 50%;
		border-color: transparent transparent var(--bg-hud) transparent;
	}
}

// Bottom Right
.bottom-right .fig-tooltip__content,
.br .fig-tooltip__content {
	top: calc(100% + 8px);
	left: 0;

	&::after {
		bottom: 100%;
		left: 16px;
		border-color: transparent transparent var(--bg-hud) transparent;
	}
}
</style>
