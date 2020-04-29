import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import {
  AcUserInfo
} from '../../components';


class UserInfo extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    //登录使用code获取到的token
    token: '暂无登录'
  };

  config = {
    navigationBarTitleText: '个人信息'
  };

  render() {
    const {token = ''} = this.state;
    return (
      <View className='hupu-userInfo'>
      </View>
    )
  }
}

export default UserInfo;
