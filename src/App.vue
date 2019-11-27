<template>
	<div id="app">
		<transition :name="transitionName">
			<router-view></router-view>
		</transition>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				transitionName: ''
			}
		},
		mounted() {

		},
		methods: {
	
		},

		watch: { 
			//使用watch 监听$router的变化
			$route(to, from) {
				//如果to的索引值为0，不添加任何动画；如果to索引大于from索引,判断为前进状态,反之则为后退状态
				if (to.meta.index > 0) {
					if (to.meta.index < from.meta.index) {
						this.transitionName = 'slide-right';
					} else {
						this.transitionName = 'slide-left';
					}
				} else if (to.meta.index == 0 && from.meta.index > 0) {
					this.transitionName = 'slide-right';
				}

			}
		}

	}
</script>

<style>
	* {
		padding: 0;
		margin: 0;
	}

	html,
	body {
		width: 100%;
		height: 100%;
	}

	#app {
		width: 100%;
		height: 100%;
		font-family: 'Avenir', Helvetica, Arial, sans-serif;

	}

	a {
		text-decoration: none;
	}

	ul li {
		list-style: none;
	}

	.slide-right-enter-active,
	.slide-right-leave-active,
	.slide-left-enter-active,
	.slide-left-leave-active {
		/*提高动画的渲染效率*/
		will-change: transform;
		transition: all 300ms;
		transition-timing-function: linear;
	}

	.slide-right-enter {
		opacity: 0;
		transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		/* IE 9 */
		-moz-transform: rotate(360deg);
		/* Firefox */
		-webkit-transform: rotate(360deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(360deg);
		/* Opera */
	}

	.slide-right-leave-active {
		opacity: 0;
		transform: rotate(-360deg);
		-ms-transform: rotate(-360deg);
		/* IE 9 */
		-moz-transform: rotate(-360deg);
		/* Firefox */
		-webkit-transform: rotate(-360deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(-360deg);
		/* Opera */
	}

	.slide-left-enter {
		opacity: 0.8;
		transform: rotate(-360deg);
		-ms-transform: rotate(-360deg);
		/* IE 9 */
		-moz-transform: rotate(-360deg);
		/* Firefox */
		-webkit-transform: rotate(-360deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(-360deg);
		/* Opera */
	}

	.slide-left-leave-active {
		opacity: 0;
		transform: rotate(360deg);
		-ms-transform: rotate(360deg);
		/* IE 9 */
		-moz-transform: rotate(360deg);
		/* Firefox */
		-webkit-transform: rotate(360deg);
		/* Safari 和 Chrome */
		-o-transform: rotate(360deg);
		/* Opera */
	}
</style>
