import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Button
} from '@tarojs/components';
import {
  AcUserInfo
} from '../../components';


class UserInfo extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
  };

  config = {
    navigationBarTitleText: '个人信息'
  };

  render() {
    return (
      <View className='hupu-userInfo'>
        <AcUserInfo />
      </View>
    )
  }
}

export default UserInfo;
