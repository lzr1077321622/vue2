import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Admin from '@/components/Admin'
import Transition from '@/components/Transition'
import Notfound from '@/components/Notfound'
Vue.use(Router)

const router = new Router({
	mode: 'history', //去掉url中的#  很细一般人都不知道
	routes: [{ //当输入路由为/的时候重定向到登录页面
		  path: '/',
	   	redirect: '/login'
			},
		{ //首页
			path: '/login',
			name: 'Index',
			component: Index,
			meta: {
				title: '首页',
				index: 1,
				requireAuth: false
			}
		},
		{ //
			path: '/admin',
			name: 'admin',
			component: Admin,
			meta: {
				title: '后台首页',
				index: 2,
				requireAuth: true
			}
		},
		{ //
			path: '/transition',
			name: 'transition',
			component: Transition,
			meta: {
				title: '路由动画页面',
				index: 3,
				requireAuth: true
			}
		},
		{
			path: '/404',
			name: '404',
			component: Notfound
		},
		{
			path: '*',//这里是当用户随意输入路由
			redirect: '/404' //匹配不到就跳转到自定义的404页面
		}
	]
})

export default router;

//下面是脚手架自带的 可以改写成上面的形式 只要暴露出去就行
// export default new Router({
//   routes: [
//     {//首页
//       path: '/',
//       name: 'Index',
//       component: Index
//     }, {//
//       path: '/admin',
//       name: 'admin',
//       component: Admin
//     }
//   ]
// })
