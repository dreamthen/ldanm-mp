import Taro from '@tarojs/taro';
import * as wxAPI from './wxAPI';
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
     * 调用接口获取登录凭证（code）。通过凭证进而换取用户登录态信息，包括用户的唯一标识（openid）及本次登录的会话密钥（session_key）等。用户数据的加解密通讯需要依赖会话密钥完成
     * @尹文楷
     * @param params
     */
    login(...params) {
      return wxAPI.loginCodeAPI.loginCode.apply(this.wx, params);
    }

    /**
     * 登录,将微信与后台服务器绑定,建立会话
     * @尹文楷
     */
    loginSession(request, params) {
      this.login({
        timeout: 5000,
        success: async (code) => {
          // 登录,将微信与后台服务器绑定,建立会话
          // @尹文楷
          await this.request({
            url: 'https://pet.api.1jtec.com/tinySession/login',
            data: {
              code
            },
            success: async (data, header) => {
              await Taro.setStorageSync('petPlanet', header['Set-Cookie']);
              params['header']['cookie'] = header['Set-Cookie'];
              await request(params);
            },
            fail: async (res) => {

            },
            complete: async (res) => {

            }
          });
        },
        fail: async (res) => {

        },
        complete: async (res) => {
        }
      });
    }

    /**
     * 适配各类手机,自定义导航栏高度
     */
    adaptationNavBar() {
      const res = Taro.getSystemInfoSync();
      const {model, system} = res;
      let navBarAdaptation = {};
      if (system.indexOf('iOS') !== -1 || system.indexOf('macOS') !== -1) {
        if (model === 'iPhone X') {
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhoneX-navBar';
          navBarAdaptation['statusPadding'] = 42.5;
          navBarAdaptation['isX'] = true;
        } else if (model.indexOf('iPhone X') !== -1) {
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhoneXM-navBar';
          navBarAdaptation['statusPadding'] = 38;
          navBarAdaptation['isX'] = true;
        } else if (model.indexOf('iPhone12') !== -1) {
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhone12-navBar';
          navBarAdaptation['statusPadding'] = 39;
          navBarAdaptation['isX'] = true;
        } else if (model.indexOf('iPhone13') !== -1) {
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhone13-navBar';
          navBarAdaptation['statusPadding'] = 39;
          navBarAdaptation['isX'] = true;
        } else if (model.indexOf('-inch') !== -1) {
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhoneInch-navBar';
          navBarAdaptation['statusPadding'] = 20;
          navBarAdaptation['isX'] = true;
        } else if (model === 'iPhone 5') {
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhone5-navBar';
          navBarAdaptation['statusPadding'] = 26;
        } else if (model.indexOf('iPhone') !== -1) {
          navBarAdaptation['statusBarClassName'] = 'ldm-iPhone-navBar';
          navBarAdaptation['statusPadding'] = 18;
        }
      } else if (system.indexOf('Android') !== -1) {
        navBarAdaptation['statusBarClassName'] = 'ldm-Android-navBar';
        navBarAdaptation['statusPadding'] = 20;
      }
      return navBarAdaptation;
    }
  }

  return new Ldanm();
})();

export default Ldanm;
