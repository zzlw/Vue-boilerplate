import {
	getUser,
} from '../service/getData'
import {
  SET_LODING,
  GET_LODING,

  SET_MUSIC,
  GET_MUSIC,
} from './mutation-types.js'

export default {

  async getLoading({
		commit,
    state
	}) {
    commit(GET_LODING)
  },
  async setLoading({
		commit,
    state
	}) {

    commit(SET_LODING, state)
  },
  async getMusic({
		commit,
    state
	}) {
    commit(GET_MUSIC)
  },
  async setMusic({
		commit,
    state
	},info) {
    commit(SET_MUSIC, info)
  },
}
