<template>
  <div id="app">
    <img src="./assets/logo.png">
    <br>
    <slot-test>asdas</slot-test>
    <router-view/>

  </div>
</template>

<script>
import slotTest from "./components/slotTest.vue"
export default {
  name: 'App',
  components:[
    slotTest
  ]
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
slot-test {
  font: bold 20px/30px "Microsoft Yahei";
}
</style>
