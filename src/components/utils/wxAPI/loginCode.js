/**
 * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成
 * @尹文楷
 */
function loginCode({timeout, success, fail, complete}) {
	return this.login({
		timeout,
		success({code}) {
			success(code);
		},
		fail(res) {
			fail(res);
		},
		complete(res) {
			complete(res);
		}
	});
}

export {
	loginCode
};