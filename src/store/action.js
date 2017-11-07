import {
	getUser,
} from '../service/getData'
import {
  SET_LODING,
  GET_LODING,

  SET_MUSIC,
  GET_MUSIC,

  SET_LIWU,

  GET_USER_IMG,
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
	}, info) {
    commit(SET_MUSIC, info)
  },
  async setLiwu({
		commit,
    state
	},info) {

    commit(SET_LIWU, info)
  },
  async getUserImg({
		commit,
    state
	}, info) {

    let res = await getUser();

    commit(GET_USER_IMG, res)
  },
}
