<template>
  <div class="g-page g-home" ref="home">
    <!-- 头部 -->
    <header class="m-header">
      <div class="header-warpper">
        <i class="icon logo iconfont icon-me"></i>
        <div class="input-box">
          <i class="icon-search iconfont icon-xiazai5"></i>
          <p>搜索商品名称</p>
        </div>
        <i class="icon iconfont icon-me"></i>
      </div>
      <!-- 导航 -->
      <nav class="m-nav">
        
      </nav>
    </header>
    <div class="scroll-warpper" ref="scrollWarpper">
      <scroll>
        <template #scrollContent>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>1</div>
          <div>4</div>
          <div>5</div>
          <div>6</div>
          <div>7</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>1</div>
          <div>gr</div>
          <div>2</div>
          <div>b</div>
          <div>9</div>
          <div>gr</div>
          <div>eer</div>
          <div>04</div>
          <div>244</div>
          <div>4534</div>
          <div>fie</div>
          <div>etjg</div>
          <div>wri</div>
          <div>ie</div>
          <div>ei</div>
          <div>7</div>
          <div>7</div>
          <div>8</div>
          <div>9</div>
          <div>1</div>
          <div>gr</div>
          <div>2</div>
          <div>b</div>
          <div>9</div>
          <div>gr</div>
        </template>
      </scroll>
    </div>
  </div>
</template>

<script>
import scroll from 'base/scroll/scroll'
import { showBottomNavMixin } from 'common/js/mixin'
export default {
  name: 'home',
  data () {
    return {
      query: '',
    }
  },
  created () {
  },
  mixins: [
    showBottomNavMixin
  ],
  components: {
    scroll,
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    handleShowBottomNav(showBottomNav) {
      const bottom = showBottomNav ? `${this.$store.state.total.bottomNavHeight}px` : '';
      this.$refs.scrollWarpper.style.bottom = bottom;
    },
  },
  watch: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~common/scss/minxin";
  $headerHeight: 48px;
  $navHeight: 30px;
  .m-header{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: 20;
    .header-warpper {
      width: 100%;
      display: flex;
      flex-direction: row;
      align-items: center;
      background-color: $color-background;
      padding-top: 8px;
      padding-bottom: 8px;
      .icon{
        font-size: 28px;
        padding-right: 4px;
        padding-left: 4px;
        color: $color-text;
      }
      .logo{
        color: #ff6000;
      }
      .input-box {
        display: flex;
        flex-direction: row;
        align-items: center;
        flex: 1;
        height: 30px;
        color: #b3b3b3;
        border: 1px solid #e3e3e3;
        .icon-search{
          font-size: $font-size-medium; 
          padding-right: 4px;
          padding-left: 4px;
        }
      }
    }
    .m-nav{
      box-sizing: border-box;
      background-color: $color-background;
      height: 30px;
    }
  }
  .scroll-warpper {
    width: 100%;
    position: absolute;
    top: $headerHeight + $navHeight;
    box-sizing: border-box;
    background-color: #ff6000;
  }
</style>


