import Taro from '@tarojs/taro';

/**
 * 异常处理方法函数
 * @尹文楷
 */
function exception({errMsg, data: {statusCode}, request, params}) {
  switch (statusCode) {
    case 401:
      // 如果出现 401 用户未登录,则重新登录,直至登录完成
      // 每次执行之前重新获取 cookie
      params.header.cookie = this.getStorageSync('petPlanet');
      request(params);
      return false;
    case 500:
      Taro.showModal({
        content: errMsg,
        showCancel: false,
        confirmColor: '#F93B5F',
        success: () => {

        }
      });
      return false;
  }
  return true;
}

export default exception;
