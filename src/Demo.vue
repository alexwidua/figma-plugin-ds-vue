<template>
	<div class="playground" id="app">
		<div class="playground__container">
			<section>
				<div class="__title">Button</div>
				<div style="display: flex">
					<Button @click="handleClick('primary')" />
					<Button secondary @click="handleClick('secondary')" />
					<Button tertiary @click="handleClick('tertiary')" />
					<Button primary destructive @click="consoleOutput = []" />
					<Button primary disabled @click="handleClick('disabled')" />
				</div>
			</section>
			<section
				style="height: 128px; margin-top: -32px; overflow-y: scroll; color: #fff;font-family: monospace; background: #000;"
				ref="console"
			>
				<div v-for="(item, i) in consoleOutput" :key="i">
					<span v-html="`Clicked `" /><span
						style="color: #18a0fb"
						v-html="consoleOutput[i]"
					/>
				</div>
			</section>
			<!------->
			<section>
				<div class="__title">Checkbox</div>
				<Checkbox v-model="checkboxModel">
					{{ checkboxModel ? 'Checked' : 'Unchecked' }}
				</Checkbox>
				<Checkbox disabled> Disabled </Checkbox>
			</section>
			<!------->
			<section>
				<div class="__title">Disclosure</div>
				<Disclosure>
					<DisclosureItem title="Text content" bold />
					<DisclosureItem title="Lots of text" bold>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit.
						Sed fringilla diam non ligula ultrices malesuada. Nunc
						laoreet posuere augue, et iaculis sem efficitur sit
						amet. Nulla ornare porttitor eleifend. Aliquam venenatis
						laoreet sapien, non tincidunt neque placerat vitae.
						Phasellus euismod dolor lorem, vitae cursus enim
						dignissim et. Ut tempor ipsum lorem, ut imperdiet lectus
						ornare quis. Suspendisse suscipit auctor ex tincidunt
						auctor. Mauris in dui mauris.
					</DisclosureItem>
					<DisclosureItem title="Component content" bold>
						<Checkbox v-model="checkboxModel">
							{{ checkboxModel ? 'Checked' : 'Unchecked' }}
						</Checkbox>
						<Toggle v-model="toggleModel">{{
							toggleModel ? 'On' : 'Off'
						}}</Toggle>
						<IconButton
							:icon="iconButton ? 'heart' : 'heart-fill'"
							@click="iconButton = !iconButton"
						/>
					</DisclosureItem>
				</Disclosure>
			</section>
			<!------->
			<section>
				<div class="__title">Divider</div>
				<Divider />
			</section>
			<!------->
			<section>
				<div class="__title">Icon</div>
				<div style="display:flex">
					<Icon iconText="N" />
					<Icon icon="arrow-up-down" />
					<Icon iconText="C" />
					<Icon icon="play" />
				</div>
			</section>
			<!------->
			<section>
				<div class="__title">Icon Button</div>
				<div style="display:flex">
					<IconButton iconText="Y" />
					<IconButton
						:icon="iconButton ? 'heart' : 'heart-fill'"
						@click="iconButton = !iconButton"
					/>

					<IconButton icon="smiley" disabled />
				</div>
			</section>
			<!------->
			<section>
				<div class="__title" v-html="inputModel" />
				<Input v-model="inputModel" />
				<Input icon="spacing" v-model="inputModel" />
				<Input iconText="H" v-model="inputModel" />
				<Input icon="arrow-left-right" v-model="inputModel" border />
				<Input iconText="H" placeholder="Placeholder" />
			</section>
			<!------->
			<section :style="`width:${numInputModel}px`">
				<div class="__title">Num Input</div>
				<NumInput v-model="numInputModel" min="100" steps="2" border />
				<NumInput v-model="numInputModel" max="1000" steps="2" border />

				<NumInput
					icon="spacing"
					v-model="numInputModel"
					min="100"
					border
					unit="px"
				/>
				<NumInput
					iconText="S"
					v-model="numInputModel"
					min="100"
					max="650"
					border
					unit="px"
				/>
			</section>

			<!------->
			<section>
				<div class="__title">Label</div>
				<Label />
				<Label>A short label</Label>
				<Label>A slightly longer label</Label>
			</section>
			<!------->
			<section>
				<div class="__title">Radio</div>
				<Radio
					:items="[
						{
							label:
								radioModel == 'item-1'
									? 'Item 1 selected'
									: 'Item 1',
							value: 'item-1'
						},
						{
							label:
								radioModel == 'item-2'
									? 'Item 2 selected'
									: 'Item 2',
							value: 'item-2'
						}
					]"
					v-model="radioModel"
				/>
			</section>
			<!------->
			<section>
				<div class="__title">Select</div>
				<Select />
			</section>
			<!------->
			<section>
				<div class="__title">Toggle</div>
				<Toggle />
				<Toggle v-model="toggleModel">{{
					toggleModel ? 'Toggle on' : 'Toggle off'
				}}</Toggle>
				<Toggle v-model="toggleModel">{{
					toggleModel ? 'Toggle on' : 'Toggle off'
				}}</Toggle>
			</section>
			<!------->
			<section>
				<div class="__title">Text</div>
				<Txt />
				<Txt
					>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
					Sed fringilla diam non ligula ultrices malesuada. Nunc
					laoreet posuere augue, et iaculis sem efficitur sit amet.
					Nulla ornare porttitor eleifend. Aliquam venenatis laoreet
					sapien, non tincidunt neque placerat vitae. Phasellus
					euismod dolor lorem, vitae cursus enim dignissim et. Ut
					tempor ipsum lorem, ut imperdiet lectus ornare quis.
					Suspendisse suscipit auctor ex tincidunt auctor. Mauris in
					dui mauris.</Txt
				>
			</section>
			<!------->
			<section>
				<div class="__title">Textarea</div>
				<Textarea placeholder="Placeholder" />
			</section>
			<!------->
			<section>
				<div class="__title">Title</div>
				<Title />
				<Title>A short title</Title>
				<Title>A slightly longer title</Title>
			</section>
			<!------->
			<section>
				<div class="__title">Tooltip</div>
				<Tooltip position="l" width="200"
					>This is a tooltip. This is a tooltip. This is a tooltip.
					This is a tooltip.</Tooltip
				>
				<Tooltip position="tl"
					>This is a tooltip. This is a tooltip.</Tooltip
				>
				<Tooltip position="tc">This is a tooltip.</Tooltip>
				<Tooltip position="tr">This is a tooltip.</Tooltip>
				<Tooltip position="r">This is a tooltip.</Tooltip>
				<Tooltip position="br">This is a tooltip.</Tooltip>
				<Tooltip position="bc">This is a tooltip.</Tooltip>
				<Tooltip position="bl">This is a tooltip.</Tooltip>
			</section>
		</div>
	</div>
</template>

<script>
import FigComponents from './components'

export default {
	name: 'Test',
	data() {
		return {
			consoleOutput: [],
			checkboxModel: false,
			iconButton: false,
			inputModel: 'Input',
			numInputModel: 250,
			numModel: 0.5,
			radioModel: 'item-1',
			toggleModel: false
		}
	},
	components: {
		...FigComponents
	},
	methods: {
		handleClick(btn) {
			this.consoleOutput.push(btn)
			this.$refs.console.scrollTop = this.consoleOutput.length * 10
		}
	}
}
</script>

<style lang="scss">
#app {
	margin: 0;
	padding: 2em 0;
	background: #e5e5e5;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.playground {
	&__container {
		max-width: 720px;
		margin: 0 auto;
		padding: 8px;
	}

	& section {
		position: relative;
		margin-bottom: 32px;
		padding: 16px;
		background: #fff;
		border-radius: 4px;

		& .__title {
			position: absolute;
			top: -12px;
			left: 0;
			padding: 0;
			color: rgba(0, 0, 0, 0.5);
			font-size: 12px;
			line-height: 0;
			vertical-align: top;
		}

		& .fig-btn:not(:last-child) {
			margin-right: 8px;
		}
	}
}
</style>
