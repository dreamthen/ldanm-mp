import Taro from '@tarojs/taro';
import Ldanm from '../../utils';

export default function OutLogin({
                                   url = '',
                                   method = 'get',
                                   header = {},
                                   callBack = () => {
                                   },
                                   done = () => {
                                   }
                                 }) {
  Taro.login({
    timeout: 5000,
    success: ({code}) => {
      Ldanm.request({
        url,
        method,
        header,
        data: {
          code
        },
        success: (data, statusCode) => {
          callBack(data, statusCode);
        },
        fail: (res = {}) => {
          callBack(res);
        },
        complete: (res = {}) => {
          done(res);
        }
      });
    },
    fail: (res = {}) => {
      Taro.showModal({
        title: '登录api错误',
        content: '检测您是否处在小程序环境下调用此api',
        showCancel: false
      });
    },
    complete: (res = {}) => {
    }
  });
}
