import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import routes from './router/router.js'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

Vue.use(VueRouter)
Vue.use(ElementUI)

const router = new VueRouter({
	mode: 'hash',
	// mode: 'history',
    // base: __dirname, //这个很重要
	routes
});


new Vue({
	el: '#app',
	router,
	render: h => h(App)
})