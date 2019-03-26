<template>
  <transition name="change">
    <footer class="tab-wrapper" v-if="$store.state.total.showBottomNav">
      <div class="tab">
        <router-link tag="div" class="tab-item" active-class="active" to="/home" :class="{'active': subIsActive('/home')}">
          <i class="icon iconfont icon-home"></i><span>首页</span>
        </router-link>
        <router-link tag="div" class="tab-item" active-class="active" to="/classification"  :class="{'active': subIsActive('/classification')}">
          <i class="icon iconfont icon-fenlei"></i><span>分类</span>
        </router-link>
        <router-link tag="div" class="tab-item" active-class="active" to="/shopping" :class="{'active': subIsActive('/shopping')}">
          <i class="icon iconfont icon-gouwuche"></i><span>购物车</span>
        </router-link>
        <router-link tag="div" class="tab-item" active-class="active" to="/my" :class="{'active': subIsActive('/my')}">
          <i class="icon iconfont icon-me"></i><span>我</span>
        </router-link>
      </div>
    </footer>
  </transition>
</template>

<script>
export default {
  name: 'tab',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  methods: {
    subIsActive (input) {
      const paths = Array.isArray(input) ? input : [input]
      return paths.some(path => {
        return this.$route.path.indexOf(path) === 0 // 当前路径以该路径字符串开头
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
@import "~common/scss/minxin";
.tab-wrapper {
  position: fixed;
  z-index: 9999;
  bottom: 0;
  left: 0;
  right: 0;
  background: #fff;
  box-shadow: 0 3px 14px 2px rgba(0,0,0,.12);
  .tab {
    display: flex;
    height: 48px;

    @include border-top-1px($color-border);
      .tab-item {
        display: flex;
        flex: 1;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: $color-text-title;
      .icon {
        font-size: $font-size-large-x;
      }
      span {
        font-size: $font-size-medium;
        margin-top: 4px;
      }
    }
    .active {
      color: $color-theme;
    }
  }
  &.change-enter, &.change-leave-to {
    -webkit-transform:translateY(100%);
    transform:translateY(100%);
  }
  &.change-enter-active, &.change-leave-active{
    transition: all .2s ease-out;
  }
}
</style>


