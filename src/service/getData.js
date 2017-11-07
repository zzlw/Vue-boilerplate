import fetch from '../config/fetch'
import {getStore} from '../config/mUtils'

/**
 * 获取用户信息
 */


//export const getUser = () => fetch('/topics', {user_id: getStore('user_id')});

export const getUser = () => fetch('/topics');

