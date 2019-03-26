<template>
  <transition name="fade">
    <header class="header-wrapper" v-if="$store.state.total.showHeader">
      <div class="left" @click.stop="goBack">
        <i class="icon iconfont icon-fanhui"></i>
      </div>
      <div class="center">
        <span>{{$store.state.total.headTitle}}</span>
      </div>
      <div class="right" @click.stop="goSearch">
        <i class="icon iconfont icon-xiazai5"></i>
      </div>
    </header>
  </transition>
</template>

<script>
export default {
  name: 'header-bar',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  props: {
  },
  methods: {
    goBack() {
      this.$router.back();
    },
    goSearch() {
      this.$router.push({ name: 'search'});
    }
  },
  watch: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .header-wrapper {
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 0;
    right: 0;

    box-sizing: border-box; 
    display: flex;
    flex-direction: row;
    height: 44px;
    align-items: center;
    color: $color-icon;
    background-color: $color-background;
    .icon{
      font-size: $font-size-medium; 
      padding-right: 12px;
      padding-left: 12px;
    }
    .icon:last-child {
      font-size: $font-size-large;
    }
    .left, .right{
      display: flex;
      align-items: center;  
      height: 100%;
    }
    .center {
      display: flex;
      flex: 1;
      justify-content: center;
    }

    &.fade-enter, &.fade-leave-to {
      -webkit-transform:translateY(-100%);
      transform:translateY(-100%);
    }
    &.fade-enter-active, &.fade-leave-active{
      transition: all .2s ease-out;
    }
  }
</style>





