<template>
  <div class="g-page g-classification" ref="classification">
   分类
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
import { showHeaderMixin, showBottomNavMixin } from 'common/js/mixin'
export default {
  name: 'classification',
  data() {
    return {
    }
  },
  mixins: [
    showHeaderMixin,
    showBottomNavMixin
  ],
  created() {
    this.set_showHeader(true);
  },
  components: {
  },
  mounted() {
  },
  computed: {
  },
  methods: {
    handleShowHeader(showHeader) {
      const top = showHeader ? `${this.$store.state.total.headHeight}px` : '';
      this.$refs.classification.style.paddingTop = top;
    },
    handleShowBottomNav(showBottomNav) {
      const bottom = showBottomNav ? `${this.$store.state.total.bottomNavHeight}px` : '';
      this.$refs.classification.style.paddingBottom = bottom;
    },
    ...mapMutations('total', {
      set_showHeader: 'SET_SHOWHEADER'
    })
  },
  watch: {
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
</style>


