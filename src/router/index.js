import Vue from 'vue'
import Router from 'vue-router'
import App from '../App'
import {routerMode} from '../config/env'

Router.prototype.goBack = function () {
  this.isBack = true
  window
    .history
    .go(-1)
}

Vue.use(Router)

const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')
const p2Alice = r => require.ensure([], () => r(require('../page/p2Alice/p2Alice')), 'p2Alice')
const p3Alice = r => require.ensure([], () => r(require('../page/p3Alice/p3Alice')), 'p3Alice')
const p4Alice = r => require.ensure([], () => r(require('../page/p4Alice/p4Alice')), 'p4Alice')
const p5Alice = r => require.ensure([], () => r(require('../page/p5Alice/p5Alice')), 'p5Alice')
const loading = r => require.ensure([], () => r(require('../page/loading/loading')), 'loading')


export default new Router({
  routes : [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [//二级路由。对应App.vue
        {
          path: '',
          redirect: '/home'
        }, {
          path: '/home',
          component: home
        }, {
          path : '/p2Alice',
          component : p2Alice
        }, {
          path: '/p3Alice',
          component: p3Alice
        }, {
          path: '/p4Alice',
          component: p4Alice
        }, {
          path: '/p5Alice',
          component: p5Alice
        }, {
          path: '/loading',
          component: loading
        },
      ]
    }
  ],
  mode : routerMode,
  strict : process.env.NODE_ENV !== 'production',
  scrollBehavior(to, from, savedPosition) {
    // to 和 from 都是 路由信息对象

  }
})




