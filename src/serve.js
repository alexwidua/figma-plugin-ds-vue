import Vue from 'vue'
import Demo from './Demo.vue'

// import global figma-ds styles
import './assets/style/index.scss'

Vue.config.productionTip = false

new Vue({
	render: (h) => h(Demo)
}).$mount('#app')
