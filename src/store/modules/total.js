import  * as types from '../mutation-types'

// 全局的
const state = {
  showBottomNav: true, // 是否显示首页的导航
  showHeader: false, // 是否显示头部
  headHeight: 44, // 头部高度
  bottomNavHeight: 48, // 首页底下导航的高度
  headTitle: '搜索', // 标题
}

// getters
const getters = {
  showHeader(state) {
    return state.showHeader;
  },
  showBottomNav(state) {
    return state.showBottomNav;
  }
}

// actions
const actions = {
}

// mutations
const mutations = {
  [types.SET_SHOWBOTTOMNAV](state, value) {
    state.showBottomNav = value
  },
  [types.SET_SHOWHEADER](state, value) {
    state.showHeader = value
  },
}

export default {
  namespaced: true, // 带命名空间的模块
  state,
  getters,
  actions,
  mutations
}