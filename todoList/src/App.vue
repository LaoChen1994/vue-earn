<template>
  <div id="app">
    <h1 v-html="title"></h1>
    <input v-model="newItems" @keyup.enter="addNew" class="titleInput">
    <div class="box">
      <div v-for="item in items" :key="item" :class="{finished:item.isFinshed}" @click="toggleFinished(item)">
        <div id="tableStyle">
          <input type="checkbox" id="checkDelete" :checked="item.isFinshed">
          <label for="checkDelete">{{item.label}}</label> 
          <p @click="deleteItem(item)" class="delete">delete</p>
        </div>
      </div>
    </div>
    <hello-world msgFromFclass="you die" @children-tell-me-something="listenToMyBoy"></hello-world>
    <p>children tell me :{{childrenWords}}</p>
    <input v-model="textInput" placeholder="please input">
    <my-counter :childTitle=info :countNum.sync=startNum></my-counter>
  </div>
</template>

<script>

import Store from "./store.js";
import helloWorld from "./components/HelloWorld.vue"
import myCounter from "./a.vue"

const requireComponent = require.context("./components", true, /(\w+)\.(vue|js)/)
console.log(requireComponent);
console.log(requireComponent.keys());

export default {
  data(){
    return {
      title: "<span>?</span>this is a todo list",
      items:Store.fetch(),
      newItems:"",
      childrenWords: "", 
      startNum: 5, 
      textInput: ""
    }
  }, 
  methods:{
     toggleFinished:(item)=>{item.isFinshed = !item.isFinshed;},
     addNew: function(){
      this.items.push({label:this.newItems, isFinshed: false})
      this.newItems = "";
     },
     deleteItem: function(item){
          let name = item.label;
          var idx = this.items.findIndex((x) => (x.label == name));
          this.items.splice(idx, 1);
          console.log(this.items);
     },
     listenToMyBoy: function(msg){
        this.childrenWords = msg;
        console.log(msg);
     }
  },
  watch: {
     'items': (val, oldVal) => {
       Store.save(val); 
     },
   },
   componentsdD:{
      helloWorld, 
      myCounter
   },
   computed:{
    info: function () {
      /* body... */
      return "input is " + this.textInput
    }, 
   }
};
</script>

<style>
.finished{
  text-decoration: line-through;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.box{
    width: 300px;
    margin: 0px auto;
}
.titleInput{
  width: 300px;
  height: 20px;
  font: bold 18/20px "Microsoft YaHei";
}

#tableStyle{
  /* border: 1px solid #000; */
  height: 30px;
  width: 300px;
  text-align: left;
  font: normal 20px/30px "Microsoft YaHei";
}

#tableStyle .delete{
  font: 14px/30px "Microsoft YaHei";
  color: #002685;
  display: inline-block;
}
/* #tableStyle input, #tableStyle label{
  float: left;
} */
</style>
