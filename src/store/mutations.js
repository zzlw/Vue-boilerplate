import Vue from 'vue'
import $ from "jquery";
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


export default {
  [GET_LODING](state) {
    setTimeout(function() {
      state.loading = false;
    }, 300);
  },
  [SET_LODING](state, info) {
      state.loading = info;
  },
  [GET_MUSIC](state) {
    state.isMusic= {
      show: false,
      play: false,
    }
  },
  [SET_MUSIC](state, info) {
    state.isMusic = { ...state.isMusic, ...info }
  }
}
