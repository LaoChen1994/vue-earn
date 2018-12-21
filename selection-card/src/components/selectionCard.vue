<template>
	<div id="selection-card" class="selectionCard">
		<div class="btnBox clearfix">
			<button v-for="tab in buttonTab" :tab="tab" @click="btnChoose(tab)" :class="{isActivate:tab==currentTab}">{{tab.title}}</button>
		</div>
		<!-- <display-box :info="showContent"></display-box> -->
		<keep-alive>
			<component :is="currentComponent" :info="showContent"></component>
		</keep-alive>
	</div>
</template>

<script>
import displayBox from "./displayBox.vue"
import displayBoxV2 from "./displayBoxV2.vue"
export default {

  name: 'selectionCard',

  data () {
    return {
		buttonTab:[
			{title: "Post", content:[
			{subTitle:"Cat Ipsum", subContent:"Dont wait for the storm to pass, dance in the rain kick up litter decide to want nothing to do with my owner today demand to be let outside at once, and expect owner to wait for me as i think about it cat cat moo moo lick ears lick paws so make meme, make cute face but lick the other cats. Kitty poochy chase imaginary bugs, but stand in front of the computer screen. Sweet beast cat dog hate mouse eat string barf pillow no baths hate everything stare at guinea pigs. My left donut is missing, as is my right loved it, hated it, loved it, hated it scoot butt on the rug cat not kitten around"}, 
			{subTitle:"Hipster Ipsum", subContent:"Bushwick blue bottle scenester helvetica ugh, meh four loko. Put a bird on it lumbersexual franzen shabby chic, street art knausgaard trust fund shaman scenester live-edge mixtape taxidermy viral yuccie succulents. Keytar poke bicycle rights, crucifix street art neutra air plant PBR&amp;B hoodie plaid venmo. Tilde swag art party fanny pack vinyl letterpress venmo jean shorts offal mumblecore. Vice blog gentrify mlkshk tattooed occupy snackwave, hoodie craft beer next level migas 8-bit chartreuse. Trust fund food truck drinking vinegar gochujang."}, 
			{subTitle:"Cupcake Ipsum", subContent:"Icing dessert soufflé lollipop chocolate bar sweet tart cake chupa chups. Soufflé marzipan jelly beans croissant toffee marzipan cupcake icing fruitcake. Muffin cake pudding soufflé wafer jelly bear claw sesame snaps marshmallow. Marzipan soufflé croissant lemon drops gingerbread sugar plum lemon drops apple pie gummies. Sweet roll donut oat cake toffee cake. Liquorice candy macaroon toffee cookie marzipan."}], component:2}, 
			{title: "Archive", content:"Archive", component:1}, 
			{title:"Tom", content:"Tom and jerry", component:1}
		],
		currentTab:"Post",
		showContent:"", 
		currentComponent:displayBox
   }
  },
  components:{
  	displayBox
  }, 
  methods:{
  	btnChoose(tab){
  		this.showContent = tab;
  		this.currentComponent = tab.component==1?displayBox:displayBoxV2
  		console.log(tab.component)
  	}
  }
};
</script>

<style>
	.selectionCard button{
		width: 50px;
		height: 20px;
		font: 10px/20px "Microsoft YaHei";
		/* border: 1px solid #000; */
		border: 1px solid #eee;
		background: #eee;
		margin-right: 1px;
		padding: 0px;
		float: left;
		cursor: pointer;
		/* outline: none; */
	}
	.selectionCard{
		width: 500px;
		margin: 50px auto;
	}
	.selectionCard button.isActivate{
		background: #5F5A5A;
		border-color: #5D5D5D;
		color: white;
	}
	.selectionCard .btnBox{
		display: relative;
	}
	.selectionCard component{
		position: absolute;
		top: 10px;
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
</style>