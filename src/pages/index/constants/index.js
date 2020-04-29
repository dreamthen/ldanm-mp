import Taro from '@tarojs/taro';
import {pageCurrentList} from '../../../constants';

const mpFuncConfig = [{
  id: 'login',
  name: '登录',
  className: 'component-login',
  onClick: () => {
    Taro.navigateTo({
      url: pageCurrentList[1]
    });
  }
}, {
  id: 'userInfo',
  name: '个人信息',
  className: 'component-userInfo',
  onClick: () => {
    Taro.navigateTo({
      url: pageCurrentList[2]
    });
  }
}];

export {
  mpFuncConfig
};
