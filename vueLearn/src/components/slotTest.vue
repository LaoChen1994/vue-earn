<template>
	<div>
		<ul>
			<li v-for='item in info'>{{item}}</li>
		</ul>
		<slot></slot>
	</div>
</template>

<script>
export default {

  name: 'slotTest',

  data () {
    return {
    	msg:"slot test",
    	info:['a', "b", 'c']
    }
  }
};
</script>

<style lang="css">
	ul li{
		color: red;
	}
</style>