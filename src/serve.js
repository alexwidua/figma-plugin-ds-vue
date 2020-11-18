import Vue from 'vue'
import Test from './Test.vue'

Vue.config.productionTip = false
import './assets/style/index.scss'

new Vue({
	render: (h) => h(Test)
}).$mount('#app')
