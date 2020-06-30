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
}, {
  id: 'tabBar',
  name: '底部自定义导航栏',
  className: 'component-tabBar',
  onClick: () => {
    Taro.navigateTo({
      url: pageCurrentList[4]
    });
  }
}, {
  id: 'imagePicker',
  name: '图片选择器',
  className: 'component-imagePicker',
  onClick: () => {
    Taro.navigateTo({
      url: pageCurrentList[5]
    });
  }
}, {
  id: 'inputPanel',
  name: '消息功能发送',
  className: 'component-inputPanel',
  onClick: () => {
    Taro.navigateTo({
      url: pageCurrentList[6]
    })
  }
}, {
  id: 'upload',
  name: '上传图片或者视频',
  className: 'component-upload',
  onClick: () => {
    Taro.navigateTo({
      url: pageCurrentList[7]
    });
  }
}];

export {
  mpFuncConfig
};
