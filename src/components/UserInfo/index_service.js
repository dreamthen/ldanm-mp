import Ldanm from '../../utils';

/**
 * 判断当前用户是否需要更新信息
 */
function getNeedUpdateUserInfo(url) {
	const {
		callBack = () => {
		}
	} = this.props;
	return Ldanm.request({
		url,
		method: 'post',
		header: {
			'content-type': 'application/x-www-form-urlencoded'
		},
		success: (data = true, header = {}) => {
			if (typeof data === 'boolean') {
				if (data) {
					this.setState({
						show: true
					});
					callBack({isNeedUpdate: data});
				} else {
					callBack({isNeedUpdate: data});
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