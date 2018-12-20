$(function () {
	Vue.component("game-item", {
		props:['item'], 
		template:"<li>{{item.title}}</li>"
	});

	var vm = new Vue({
	
		el: "#myApp", 
		data:{
			games:[
				{title: "斗地主"}, 
				{title: "打麻雀"}, 
				{title:"UNO"}
			]

		}
	
	})
})
