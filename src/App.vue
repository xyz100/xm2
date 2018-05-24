<template>
	<div id="app">
		 <!-- <Hello></Hello> -->
		<!-- <Pos></Pos>  -->
		<leftNav></leftNav>
		<div class="main">
			<router-view>

			</router-view>
		</div>
	</div>
</template>
<script>
	import Hello from './components/page/Hello.vue'
	import leftNav from './components/common/leftNav.vue'
	export default{
		name: 'App',
		components:{
			leftNav,
			Hello
		}
	}
</script>
<style>	
	/*@import './assets/css/index.css';*/
	#app{
		font-family: 'Avenir', Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		text-align: center;
		color: #2c3e50;
	}
	.main{
		float: left;
		width: 95%;
		background-color: #eff2f7;
		height: 100%;
		overflow: hidden;
	}
</style>
