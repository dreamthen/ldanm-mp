import Taro from '@tarojs/taro';
import * as requestApi from './request';
import * as packageApi from './package';

const Ldanm = (() => {
  class Ldanm {
    constructor() {
      this.wx = Taro;
    }

    /**
     * 默认参数
     * @param params
     * @returns {*}
     */
    request = (...params) => {
      return requestApi.requests.apply(this.wx, [...params, this]);
    };

    /**
     * wx上传文件方法封装
     * @param params
     */
    uploadFile(...params) {
      return requestApi.uploadFile.apply(this.wx, params);
    }

    /**
     * 初始化测试环境
     */
    initTest = () => {
      return packageApi.initTest.initTestEnv();
    };

    /**
     * 获取uuid
     */
    uuid = (...params) => {
      return packageApi.uuid.uuid(...params);
    };

    /**
     * 适配各类手机,自定义导航栏高度
     */
    adaptationNavBar() {
      const res = Taro.getSystemInfoSync();
      const {model, system} = res;
      let navBarAdaptation = {};
      if (system.indexOf('iOS') !== -1) {
        if (model === 'iPhone X') {
          navBarAdaptation['navBarHeight'] = 184;
          navBarAdaptation['navBarPaddingTop'] = 82;
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhoneX-navBar';
          navBarAdaptation['isX'] = true;
        } else if (model.indexOf('iPhone X') !== -1) {
          navBarAdaptation['navBarHeight'] = 174;
          navBarAdaptation['navBarPaddingTop'] = 82;
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhoneXM-navBar';
          navBarAdaptation['isX'] = true;
        } else if (model.indexOf('-inch') !== -1) {
          navBarAdaptation['navBarHeight'] = 184;
          navBarAdaptation['navBarPaddingTop'] = 82;
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhoneX-navBar';
          navBarAdaptation['isX'] = true;
        } else if (model === 'iPhone 5') {
          navBarAdaptation['navBarHeight'] = 158;
          navBarAdaptation['navBarPaddingTop'] = 82;
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhone5-navBar';
        } else if (model.indexOf('iPhone') !== -1) {
          navBarAdaptation['navBarHeight'] = 136;
          navBarAdaptation['navBarPaddingTop'] = 30;
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhone-navBar';
        }
      } else if (system.indexOf('Android') !== -1) {
        navBarAdaptation['navBarHeight'] = 136;
        navBarAdaptation['navBarPaddingTop'] = 40;
        navBarAdaptation['statusBarClassName'] = 'ldm-Android-navBar';
      }
      return navBarAdaptation;
    }
  }

  return new Ldanm();
})();

export default Ldanm;
