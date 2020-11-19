import Vue from 'vue'
import Test from './Test.vue'

// import global figma-ds styles
import './assets/style/index.scss'

Vue.config.productionTip = false

new Vue({
	render: (h) => h(Test)
}).$mount('#app')
