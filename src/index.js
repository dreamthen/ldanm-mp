import Taro from '@tarojs/taro'

Taro.initPxTransform({ designWidth: 750, deviceRatio: {} })

export { default as LdmLogin } from './components/Login';
export { default as LdmUserInfo } from './components/UserInfo';
export { default as LdmNavBar } from './components/NavBar';
export { default as LdmTabBar } from './components/TabBar';
export { default as LdmImagePicker } from './components/ImagePicker';
export { default as LdmOutLogin } from './components/OutLogin';
