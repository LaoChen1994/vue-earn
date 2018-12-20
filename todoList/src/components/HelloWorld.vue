<template>
  <div class="a">
    <h1>{{ msg }}</h1>
    <h1>{{msgFromFclass}}</h1>
    <button @click="onClickMe">Open Mouse!</button>
  </div>
</template>

<script>
export default {
  name: 'hi',
  data () {
    return {
      msg: 'from component hello',
    }
  },
  props: ["msgFromFclass"],
  methods: {
    onClickMe () {
      this.$emit("children-tell-me-something", this.msgFromFclass);

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
