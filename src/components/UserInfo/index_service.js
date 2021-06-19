import Ldanm from '../utils/index';

/**
 * 判断当前用户是否需要更新信息
 */
function getNeedUpdateUserInfo() {
	return Ldanm.request({
		url: 'users/needUpdateUserInfo',
		method: 'post',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: (data = {}, header = {}) => {
			return data;
		},
		fail: (res) => {
		},
		complete: (res) => {
		}
	});
}

export {
	getNeedUpdateUserInfo
};