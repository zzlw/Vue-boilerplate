import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import {routerMode} from '../config/env'

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

export default new Router({
  routes : [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [//二级路由。对应App.vue
        {
          path: '',
          redirect: '/home'
        },
        {
          path: '/home',
          component: home
        },
      ]
    }
  ],
  mode : routerMode,
  strict : process.env.NODE_ENV !== 'production',
})




