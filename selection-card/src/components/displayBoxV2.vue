<template>
	<div class="displayBox clearfix" >
		<div id="subSelect">
			<div v-for="item in selectInfo" @click="btnSelect(item)">
				{{item.subTitle}}
			</div>
		</div>
		<div id="content">
			<span class="subTitle">{{detailTitle}}</span>
			<span class="subContent">{{detitalContent}}</span>
		</div>
	</div>
</template>

<script>
export default {

  name: 'displayBoxV2',

  data () {
    return {
    	detailTitle : "", 
    	detitalContent : "please select detail item in menu", 
    }
  }, 
  props:["info"], 
  computed: {
    selectInfo() {
    	var info_list = []
    	console.log(this.info.content.valueOf())
    	for (var item of this.info.content) {
    		// statement
    		info_list.push(item);

    	}
		return info_list;
    },
  },
  methods: {
    btnSelect (item) {
      this.detailTitle = item.subTitle;
      this.detitalContent = item.subContent;
    }
  }
};
</script>

<style lang="css">
	.displayBox #subSelect div{
		display: inline-block;
		width: 150px;
		text-align: left;
		margin: 5px;
		cursor: pointer;
	}
	.displayBox #subSelect{
		width: 150px;
		
		/* margin-right: 10px; */
		float: left;
	}
	.displayBox #content{
		float: left;
		width: 330px;
		text-align: left;
		border-left: 1px solid #ccc;
		margin: 5px 0px;
		padding-left: 10px;
	}
	.displayBox{
		border:#ccc 1px solid;
		width: 500px;
	}
   .clearfix:before,.clearfix:after {
      content:"";
      display:table;
   }
   .clearfix:after {
     clear:both;
     overflow:hidden;
   }
  .clearfix {
     zoom:1; /* IE < 8 */
  }
  #content .subTitle{
  	display: block;
  	width: 100%;
  	text-align: justify;
  	font: bold 20px/30px "Microsoft YaHei";
  }
  #content .subContent{
  	font: normal 16px/20px "Microsoft YaHei";
  }
</style>