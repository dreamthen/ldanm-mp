import Ldanm from '../utils/index';

/**
 * 判断当前用户是否需要更新信息
 */
function getNeedUpdateUserInfo() {
	const {
		callBack = () => {
		}
	} = this.props;
	return Ldanm.request({
		url: 'https://pet.api.1jtec.com/users/needUpdateUserInfo',
		method: 'post',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: (data = {}, header = {}) => {
			const {isNeedUpdate = true} = data;
			if (typeof isNeedUpdate === 'boolean') {
				if (isNeedUpdate) {
					this.setState({
						show: true
					});
					callBack({isNeedUpdate});
				} else {
					callBack({isNeedUpdate});
				}
			}
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