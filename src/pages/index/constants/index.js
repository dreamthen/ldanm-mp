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
  name: '获取个人信息',
  className: 'component-userInfo',
  onClick: () => {
    Taro.navigateTo({
      url: pageCurrentList[2]
    });
  }
}, {
  id: 'navBar',
  name: '顶部自定义导航栏',
  className: 'component-navBar',
  onClick: () => {
    Taro.navigateTo({
      url: pageCurrentList[3]
    });
  }
}];

export {
  mpFuncConfig
};
