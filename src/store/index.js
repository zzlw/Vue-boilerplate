import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './action'
import getters from './getters'
import p5AliceIcon2 from "../images/p5Alice-icon2.png"

Vue.use(Vuex)

const state = {
  loading: false,
  isMusic: {
    show: false,
    play: true,
  },
  liwuVuex: {
    qiaokeli: 0,
    cunkuan: 0,
    meigui: 0,
  },
  userImg: {
    img: p5AliceIcon2,
    info: "看着不错。。。。",
    title: "年轻人"
  }
}

export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations,
})
