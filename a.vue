<template>
	<div>
		<button @click="btnAdd">please press me!</button>
		<div id="show">you have press {{count}} times</div>
	</div>

</template>


<script>
	export default{
		data(){
			return{
				count=0,
			}
		}, 
		method:{
			btnAdd(){this.count++}
		}
	};
</script>


<style>
	
</style>