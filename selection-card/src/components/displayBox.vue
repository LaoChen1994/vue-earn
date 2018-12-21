<template>
	<div id="displayBox">
		<div>{{showInfo}}</div>
	</div>
</template>

<script>
export default {

  name: 'displayBox',

  data () {
    return {
    }
  },
  props:["info"],
  computed: {
    showInfo () {
    	var info = "please select button"
		if (this.info !="") {
			info = this.info.content;
			return info;
		} 
     	 return info;
    }
  }

};
</script>

<style>
	#displayBox div{
		display: inline-block;
		border:#ccc 1px solid;
		width: 500px;
		text-align: left;
		padding: 5px;
	}
</style>