<template>
  <transition name="fade">
    <header class="header-wrapper">
      <div class="left" @click.stop="goBack">
        <i class="icon iconfont icon-fanhui"></i>
      </div>
      <div class="center">
        <span>{{title}}</span>
      </div>
      <div class="right">
        <div class="right-item" @click.stop="goSearch">
          <i class="icon iconfont icon-xiazai5"></i>
        </div>
      </div>
    </header>
  </transition>
</template>

<script>
export default {
  name: 'm-header',
  data () {
    return {
    }
  },
  created () {
  },
  computed: {
  },
  props: {
    title: {
      type: [String, Number],
      default: '标题',
    },
    config: {
      type: Object,
      default:() => ({
        'leftItem': {
          title: '返回',  // 名称
          funTag: 'goBack',  // 派发方法的名称
          isActions: true, // 是否执行默认操作
        },
        'rightItems': [{
          title: '返回',  // 名称
          funTag: 'goSearch',  // 派发方法的名称
          isActions: false, // 是否执行默认操作
        }],
      }),
    }
  },
  methods: {
    goBack() {
      if (this.config.leftItem.isActions) {
        this.$router.back();
      }
      this.$emit(this.config.leftItem.funTag);
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
      -webkit-transform:translateY(100%);
      transform:translateY(100%);
    }
    &.fade-enter-active, &.fade-leave-active{
      transition: all .2s ease-out;
    }
  }
</style>