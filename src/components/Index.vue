<template>
	<div class="login">
		<el-row class='rowbox'>
			<el-col :offset='9' :span="6">
				<el-input v-model="username" placeholder="请输入用户名"></el-input>
			</el-col>
		</el-row>
		<el-row class='rowbox'>
			<el-col :offset='9' :span="6">
				<el-input v-model="password" placeholder="请输入密码"></el-input>
			</el-col>
		</el-row>
		<el-row class='rowbox'>
			<el-col :offset='10' :span="4">
				<el-button @click='getadmin' type="primary" style='width: 100%;'>登录</el-button>
			</el-col>
		</el-row>
	</div>
</template>
<script>
	import {
		Loading
	} from 'element-ui';
	export default {
		components: {
		},
		name: 'Index',
		data() {
			return {
				username: '',
				password: ''
			}
		},
		methods: {
			getadmin() {
				if(this.username ==''){
					 alert('用户名不能为空')
				}else if(this.password ==''){
					 alert('密码不能为空')	
				}else{
						//将输入的用户名密码放置对一个对象中，这里相当于后台返回的用户信息  这里你也可以自己写ajax来获取数据
						var objdata = {
							name: this.username,
							password: this.password,
						}
						
						//触发store SaveNane
						this.$store.commit('SaveNane', objdata);
						//跳转到后台首页
						this.$router.push({
							path: '/admin',
						})
				}
				
			}
		},
		created: function() {

		}
	}
</script>
<style scoped>
	.rowbox {
		margin-top: 1.25rem;
	}

	.login {
		margin: 150px auto;
	}
</style>
