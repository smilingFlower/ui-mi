import { mapGetters, mapMutations } from 'vuex'
export const showHeaderMixin = {
  beforeDestroy() {
    this.set_showHeader(false);
  },
  computed: {
    ...mapGetters('total', [
      'showHeader',
    ])
  },
  mounted() {
    this.handleShowHeader(this.showHeader);
  },
  methods: {
    ...mapMutations('total', {
      set_showHeader: 'SET_SHOWHEADER',
    }),
    handleShowHeader() {
      throw new Error('组件必须实现handleShowHeader方法');
    },
  },
  watch: {
    showHeader(newValue) {
      this.handleShowHeader(newValue);
    }
  },
}

export const showBottomNavMixin = {
  computed: {
    ...mapGetters('total', [
      'showBottomNav'
    ])
  },
  mounted() {
    this.handleShowBottomNav(this.showBottomNav);
  },
  methods: {
    ...mapMutations('total', {
      set_showBottomNav: 'SET_SHOWBOTTOMNAV',
    }),
    handleShowBottomNav() {
      throw new Error('组件必须实现handleShowBottomNav方法')
    },
  },
  watch: {
    showBottomNav(newValue) {
      this.handleShowBottomNav(newValue);
    }
  },
}