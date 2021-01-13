<template>
  <div id="app">
    <MonacoVue />
  </div>
</template>

<script>
import Vue from "vue";
import MonacoVue from "./components/MonacoVue.vue";
export default Vue.extend({
  name: "App",
  components: {
    MonacoVue,
  },
});
</script>

<style>
#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
html {
  height: 100%;
  width: 100%;
  overflow-x: hidden;
}
body {
  margin: 0 0 0 0;
  background: rgb(192, 202, 203);
  background: linear-gradient(
    162deg,
    rgba(192, 202, 203, 1) 23%,
    rgba(94, 96, 99, 1) 100%
  );
}
</style>
