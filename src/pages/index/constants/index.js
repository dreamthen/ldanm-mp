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
}];

export {
  mpFuncConfig
};
