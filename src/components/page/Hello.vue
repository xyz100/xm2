<template>
	<div class="hello">
		hello1
		<template slot-scope="scope">
			<el-button type="text" size="small" @click="delSingleGoods(scope.row)">删除</el-button>
			<el-button type="text" size="small" @click="addOrderList(scope.row)">增加</el-button>
		</template>
	</div>
</template>
<script>
	
</script>
<style scoped>		
	
	
</style>
