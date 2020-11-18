<template>
	<div id="test">
		<FigButton />
		<FigCheckbox />
		<FigDisclosure>
			<FigDisclosureItem />
		</FigDisclosure>
		<FigDivider />
		<FigIcon icon="check" />
		<FigIconButton icon="check" />
		<FigInput />
		<FigLabel />
		<FigRadio />
		<FigSelect />
		<FigSwitch />
		<FigText />
		<FigTextarea />
		<FigTitle />
		<FigVisualBell />
	</div>
</template>

<script>
import FigComponents from './components/'

export default {
	name: 'Test',
	components: {
		...FigComponents
	}
}
</script>

<style lang="scss">
#test {
	width: 720px;
	margin: 0 auto;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}
</style>
