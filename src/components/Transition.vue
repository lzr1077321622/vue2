<template>
	<div class="box">
	  Transition页面
	  <h1>这是store中获取到的用户信息</h1>
	  <p>
		  <h2>{{$store.state.userinfo.name}}</h2>
	  </p>
	    <p>
	  	<h2>{{$store.state.userinfo.password}}</h2>
	  </p>
	</div>
</template>

<script>

import { Loading } from 'element-ui';
	export default {
		components: {
			
		},
		name: 'Transition',
		data() {
			return {
			
			}
		},
		methods:{
					
        },
		created:function(){
			 
		}
	}
</script>
<style scoped>
	.box{
		width: 500px;
		height: 500px;
		margin: 100px auto 0px auto;
		box-shadow: 0px 0px 2px 4px aliceblue;
	}
</style>
