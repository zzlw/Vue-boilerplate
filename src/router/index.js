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

// const home = r => require.ensure([], () => r(require('../page/home/home')), 'home')

// const p2Alice = r => require.ensure([], () => r(require('../page/p2Alice/p2Alice')), 'p2Alice')
// const p3Alice = r => require.ensure([], () => r(require('../page/p3Alice/p3Alice')), 'p3Alice')
// const p4Alice = r => require.ensure([], () => r(require('../page/p4Alice/p4Alice')), 'p4Alice')
// const p5Alice = r => require.ensure([], () => r(require('../page/p5Alice/p5Alice')), 'p5Alice')

// const p2Eric = r => require.ensure([], () => r(require('../page/p2Eric/p2Eric')), 'p2Eric')
// const p3Eric = r => require.ensure([], () => r(require('../page/p3Eric/p3Eric')), 'p3Eric')
// const p4Eric = r => require.ensure([], () => r(require('../page/p4Eric/p4Eric')), 'p4Eric')
// const p5Eric = r => require.ensure([], () => r(require('../page/p5Eric/p5Eric')), 'p5Eric')


// const loading = r => require.ensure([], () => r(require('../page/loading/loading')), 'loading')


import home from '../page/home/home';

import p2Alice from '../page/p2Alice/p2Alice'
import p3Alice from '../page/p3Alice/p3Alice'
import p4Alice from '../page/p4Alice/p4Alice'
import p5Alice from '../page/p5Alice/p5Alice'

import p2Eric from '../page/p2Eric/p2Eric'
import p3Eric from '../page/p3Eric/p3Eric'
import p4Eric from '../page/p4Eric/p4Eric'
import p5Eric from '../page/p5Eric/p5Eric'


import loading from '../page/loading/loading'


export default new Router({
  routes : [
    {
      path: '/',
      component: App, //顶层路由，对应index.html
      children: [//二级路由。对应App.vue
        {
          path: '',
          redirect: '/loading'
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
          path: '/p2Eric',
          component: p2Eric
        }, {
          path: '/p3Eric',
          component: p3Eric
        }, {
          path: '/p4Eric',
          component: p4Eric
        }, {
          path: '/p5Eric',
          component: p5Eric
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




