import Taro from '@tarojs/taro';

/**
 * 异常处理方法函数
 * @尹文楷
 */
function exception({errMsg, data: {statusCode}, request, params}) {
  switch (statusCode) {
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
