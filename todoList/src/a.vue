<template>
	<div>
		<p>{{childTitle}}</p>
		<button @click="btnAdd">please press me!</button>
		<div id="show">you have press {{innerCounter}} times</div>
	</div>

</template>


<script>
	export default{
		data(){
			return{
				innerCounter: this.countNum, 
				// 利用这种办法把父类接受的数据保存在本地

			}
		}, 
		methods:{
			btnAdd(){
				this.innerCounter++
			}
		},
		// props:["childTitle", "countNum"]
		props:{
			"childTitle": String, 
			"countNum": Number
		}, 
		// computed: {
		// 	innerNum:function(){
		// 		if (typeof countNum === undefined) {
		// 			return 0
		// 		} else {
		// 			return countNum;
		// 		}
		// 	}
		// } 

		// props 参数的验证方式
		// Vue.component('my-component', {
		//   props: {
		//     // 基础的类型检查 (`null` 匹配任何类型)
		//     propA: Number,
		//     // 多个可能的类型
		//     propB: [String, Number],
		//     // 必填的字符串
		//     propC: {
		//       type: String,
		//       required: true
		//     },
		//     // 带有默认值的数字
		//     propD: {
		//       type: Number,
		//       default: 100
		//     },
		//     // 带有默认值的对象
		//     propE: {
		//       type: Object,
		//       // 对象或数组默认值必须从一个工厂函数获取
		//       default: function () {
		//         return { message: 'hello' }
		//       }
		//     },
		//     // 自定义验证函数  需要传入一个自定义的验证函数
		//     propF: {
		//       validator: function (value) {
		//         // 这个值必须匹配下列字符串中的一个
		//         return ['success', 'warning', 'danger'].indexOf(value) !== -1
		//       }
		//     }
		//   }
		// })
	};
</script>


<style>
	
</style>