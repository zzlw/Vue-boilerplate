import {
	getUser,
} from '../service/getData'
import {
	GET_USERINFO,
  SAVE_ADDRESS,

  SET_LODING,
  GET_LODING,

  SET_MUSIC,
  GET_MUSIC,
} from './mutation-types.js'

export default {

	async getUserInfo({
		commit,
		state
	}) {
		let res = await getUser();
		commit(GET_USERINFO, res)
	},
	async saveAddress({
		commit,
		state
	}) {

		if(state.removeAddress.length > 0) return;

    let addres = await getUser(state.userInfo.user_id);
		commit(SAVE_ADDRESS, addres);
  },
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
