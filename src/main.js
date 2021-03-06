// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './router'
import store from './store/'
import './assets/less/app.less'
// import axios from 'axios'
// import VueAxios from 'vue-axios'
import VueResource from 'vue-resource'; 
Vue.use(VueResource)
Vue.use(VueRouter);
// Vue.use(VueAxios, axios);
Vue.config.productionTip = false;

const router = new VueRouter({
	routes,
  	// mode: 'history'
})

new Vue({
	router,
	store,
	template: '<App/>',
	components: {App}
}).$mount('#app')
