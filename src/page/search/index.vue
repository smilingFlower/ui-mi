<template>
  <div class="g-shopping">
    搜索模块
  </div>
</template>

<script>
import { mapMutations } from 'vuex'
export default {
  name: 'serach',
  data() {
    return {
    }
  },
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


