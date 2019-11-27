import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
	//登录以后刷新数据也还存在
	userinfo:JSON.parse(localStorage.getItem('userinfo'))
}


const mutations={
	//方法名称
	SaveNane(state,getdata){
	  
		//本地存储数据
		localStorage.setItem('userinfo',JSON.stringify(getdata));
		//赋值 把提交过来的userinfo赋值给上面state中的userinfo
		state.userinfo= getdata;
	
		
	}
}


export default new Vuex.Store({
	state,
	mutations
  
})
