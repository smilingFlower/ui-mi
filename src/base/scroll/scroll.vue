<template>
  <div ref='scrollWrapper' class="m-scroll">
    <!-- 滚动列表插槽 -->
    <div class="scroll-content">
      <slot name="scrollContent"></slot>
    </div>
  </div>
</template>

<script>
import BScroll from 'better-scroll'
export default {
  name: 'scroll',
  data () {
    return {
    }
  },
  props: {
    scrollX: {
      type: Boolean,
      default: false,
    },
    scrollY: {
      type: Boolean,
      default: true,
    }
  },
  created () {
  },
  mounted() {
    this.initScroll()
  },
  computed: {
  },
  methods: {
    // 初始化滚动插件
    initScroll() {
      if (!this.$refs.scrollWrapper) {
        return;
      }
      const options = {
        scrollX: this.scrollX,
        scrollY: this.scrollY,
      }
      this.scroll = new BScroll(this.$refs.scrollWrapper, options);
    },
    refresh() {
      console.log('refresh');
      this.scroll && this.scroll.refresh();
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    },
  },
  watch: {
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "~common/scss/minxin";
  .m-scroll {
    height: 100%;
  }
</style>
