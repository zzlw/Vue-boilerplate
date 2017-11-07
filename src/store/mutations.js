import Vue from 'vue'
import $ from "jquery";
import {
  SET_LODING,
  GET_LODING,

  SET_MUSIC,
  GET_MUSIC,

  SET_LIWU,

  GET_USER_IMG
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
  },
  [SET_LIWU](state, info) {
    state.liwuVuex = { ...state.liwuVuex, ...info }
  },
  [GET_USER_IMG](state, info) {
    state.userImg = { ...state.userImg, ...info }
  }
}
