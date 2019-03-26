import Vue from 'vue'
import Vuex from 'vuex'
import total from './modules/total'
import createLogger from 'vuex/dist/logger'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  modules: {
    total
  },
  strict: debug, // 在开发环境开启严格模式
  plugins: debug ? [createLogger()] : []
})