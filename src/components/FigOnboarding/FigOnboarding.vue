<template>
	<div class="onboarding">
		<div
			v-if="!iconText"
			class="icon onboarding__icon"
			:class="{
				['icon--' + icon]: icon,
				spinning
			}"
		/>
		<div
			v-else
			class="onboarding__icon icon--text"
			:class="{ spinning }"
			v-html="iconText"
		/>
		<p class="onboarding__content">
			<slot>Content</slot>
		</p>
	</div>
</template>

<script>
export default {
	name: 'FigOnboarding',
	/**
	 * Onboarding component to display initial messages before usage.
	 */
	props: {
		icon: { type: String, default: 'smiley' },
		iconText: { type: String, default: undefined },
		spinning: Boolean
	}
}
</script>

<style lang="scss">
.onboarding {
	display: flex;
	align-items: top;
	padding: 0 var(--size-xsmall) 0 0;

	// Render the .icon class styles (_icon.scss) but override some additional styles
	&__icon {
		margin-right: var(--size-xxsmall);
	}

	&__content {
		flex: 1 0;
		margin: 0;
		padding: var(--size-xxsmall) 0 var(--size-xxsmall) 0;
		color: var(--black8);
		font-weight: var(--font-weight-normal);
		font-size: var(--font-size-xsmall);
		line-height: var(--line-height);
		letter-spacing: var(--font-letter-spacing-pos-xsmall);
	}
}
</style>
