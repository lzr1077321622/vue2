// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import globalVariable from './global_variable.js'


Vue.prototype.$axios = axios;
Vue.prototype.API = globalVariable;
Vue.use(ElementUI);
Vue.config.productionTip = false


//路由守卫
router.beforeEach((to, from, next) => {
	
	//获取本地存储中的用户信息
	//JSON.parse这里要转化成对象，存在就是真 true  不存在就是false
	var islogin = JSON.parse(localStorage.getItem('userinfo'))
      
	if (to.meta.requireAuth) { // 判断该路由是否需要登录权限
		if (islogin) { //判断本地是否存在userinfo 
			next();
		} else {
			next({
				path: '/login'
			})
		}
	} else {
		next();
	}
	/*如果输入的路由为/login*/  
	if (to.fullPath == "/login") {
        /*如果本地 存在 token 则直接跳转到后台首页 */
		if (islogin) {
			next({
				path: '/admin'
			});
		} else {
			next();
		}
	}
});


new Vue({
	el: '#app',
	router,
	store,
	components: {
		App
	},
	template: '<App/>'
})
