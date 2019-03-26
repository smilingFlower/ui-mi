<template>
  <div id="app">
    <header-bar></header-bar>
    <router-view/>
    <tab></tab>
  </div>
</template>

<script>
import Tab from 'components/tab/tab.vue'
import HeaderBar from 'base/header-bar/header-bar.vue'
export default {
  components: {
    Tab,
    HeaderBar,
  },
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
</style>
