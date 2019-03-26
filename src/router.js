import Vue from 'vue'
import Router from 'vue-router'
import Home from 'page/home/index.vue'
import Classification from 'page/classification/index.vue'
import Shopping from 'page/shopping/index.vue'
import My from 'page/my/index.vue'
import Search from 'page/search/index.vue'

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/', 
      redirect: 'home'
    },
    {
      path: '/home',
      component: Home,
    },
    {
      path: '/classification',
      component: Classification
    },
    {
      path: '/shopping',
      component: Shopping
    },
    {
      path: '/my',
      component: My
    },
    {
      path: '/search',
      component: Search
    },
  ]
})
