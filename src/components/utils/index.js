import Taro from '@tarojs/taro';
import * as requestApi from './request';

const Keryi = (() => {
  class Keryi {
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

  return new Keryi();
})();

export default Keryi;
