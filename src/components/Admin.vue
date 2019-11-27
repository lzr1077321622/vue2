<template>
	<div class="admin">
	    
	<el-container>
		<el-aside width="200px" style="background-color: rgb(238, 241, 246)">
			<el-menu :default-openeds="['1' ]">
				  <el-submenu index="1">
					<template slot="title"><i class="el-icon-message"></i>导航一</template>
					<el-menu-item-group>
					  <el-menu-item index="1-1">选项1</el-menu-item>
					  <el-menu-item index="1-2">选项2</el-menu-item>
					</el-menu-item-group>
				
				  </el-submenu>
				  <el-submenu index="2">
					<template slot="title"><i class="el-icon-menu"></i>导航二</template>
					<el-menu-item-group>
					  <el-menu-item index="2-1">选项1</el-menu-item>
					  <el-menu-item index="2-2">选项2</el-menu-item>
					</el-menu-item-group>
				  </el-submenu>
				  <el-submenu index="3">
					<template slot="title"><i class="el-icon-setting"></i>导航三</template>
					<el-menu-item-group> 
					  <el-menu-item index="3-1">选项1</el-menu-item>
					  <el-menu-item index="3-2">选项2</el-menu-item>
					    <el-menu-item index="3-3">选项3</el-menu-item>
					</el-menu-item-group>

				  </el-submenu>
				</el-menu>
		</el-aside>

		<el-container>
			<el-header>
					登录账号&nbsp;:&nbsp; &nbsp;<el-tag type="success">{{$store.state.userinfo.name}}</el-tag>
					登录密码&nbsp;:&nbsp; &nbsp;<el-tag type="success">{{$store.state.userinfo.password}}</el-tag>
					 <div class="logout">
						 <i class="el-icon-delete" size='20' style="margin-right: 0.625rem;"></i>
						 <el-button @click='logout'>退出登录</el-button>
					 </div>
					 
			</el-header>

			<el-main>
            <router-link :to="{ path: '/transition' }">transition动画跳转测试点击我看看</router-link>
					<router-view></router-view >
			</el-main>
		</el-container>
	</el-container>
	</div>
	
</template>

<script>

import { Loading } from 'element-ui';
	export default {
		components: {
			
		},
		name: 'Admin',
		data() {
			return {
			 
			}
		},
		methods:{
			//退出登录
					logout(){
						if(window.confirm('退出将会需要再次登录')){
                	localStorage.clear();//清楚本地存储
									//跳转到登录页面
									this.$router.push({
										path: '/login',
									})
              }else{
                 //alert("取消");
                 return false;
             }
			
					}
		
        },
		created:function(){
			 
		}
	}
</script>
<style scoped>
	.el-header {
    background-color: #B3C0D1;
    color: #333;
    line-height: 60px;
  }
  
  .el-aside {
    color: #333;
  }
 
  .admin{
  	  width:100%;
  	  height: 100%;
  }
  .el-container{
	 width:100%;
	height: 100%;  
  }
	.logout{
		float: right;
	}
</style>
