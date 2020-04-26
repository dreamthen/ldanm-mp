import Taro from '@tarojs/taro';
import * as requestApi from './request';

const Anchor = (() => {
  class Anchors {
    constructor() {
      this.wx = Taro;
    }

    /**
     * 默认参数
     * @param params
     * @returns {*}
     */
    request = (...params) => {
      return requestApi.requestConfig.apply(this.wx, params);
    };
  }

  return new Anchors();
})();

export default Anchor;
