// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import './config/flexible'
import './config/jquery.barrager'
import FastClick from 'fastclick'
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/'

import util from './config/util'

// import vueg from 'vueg'
import { mapState, mapActions } from 'vuex'
// import { setLoading } from './store/action'
// import 'vueg/css/transition-min.css'



// Vue.use(vueg, router, {
//   duration : '.3',
// })

Vue.use(util);


if ('addEventListener' in document) {
  document.addEventListener('DOMContentLoaded', function () {
      FastClick.attach(document.body);
    }, false);
}

//关闭生产模式下给出的提示
Vue.config.productionTip = false;


router.beforeEach((to, from, next) => {

  setTimeout(function () {
    if (to.path == "/loading" ){

    }else{
      router.app.$store.commit("SET_LODING", true);
    }
    next();
  }, 0);

})

/* eslint-disable no-new */
new Vue({
  router,
  store,
}).$mount('#app')


