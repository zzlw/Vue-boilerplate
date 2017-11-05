import Vue from 'vue'
import {
	INIT_BUYCART,
	RECORD_USERINFO,
  GET_USERINFO,

  SET_LODING,
  GET_LODING,

  SET_MUSIC,
  GET_MUSIC,
} from './mutation-types.js'

import {setStore, getStore} from '../config/mUtils'

// import {localapi, proapi} from 'src/config/env'

export default {
	//网页初始化时从本地缓存获取购物车数据
	[INIT_BUYCART](state) {
		let initCart = getStore('buyCart');
		if (initCart) {
			state.cartList = JSON.parse(initCart);
		}
	},
	// 记录用户信息
	[RECORD_USERINFO](state, info) {
		state.userInfo = info;
		state.login = true;
		setStore('user_id', info.user_id);
	},
	//获取用户信息存入vuex
	[GET_USERINFO](state, info) {
    // state.loading = false;
  },
  [GET_LODING](state) {
    setTimeout(function() {
      state.loading = false;
    }, 300);
  },
  [SET_LODING](state, info) {
      state.loading = info;
  },
  [GET_MUSIC](state) {
    // setTimeout(function () {
      state.isMusic= {
        show: false,
        play: false,
      }
    // }, 300);
  },
  [SET_MUSIC](state, info) {
    // console.log(state.isMusic,2)
    // Vue.set(state, 'isMusic', { ...state.isMusic, ...info })
    state.isMusic = { ...state.isMusic, ...info }
  }
}
