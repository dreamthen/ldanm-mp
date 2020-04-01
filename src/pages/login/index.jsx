import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import {
  AcLogin
} from '../../components';


class Login extends Component {
  static options = {
    addGlobalClass: true
  };

  config = {
    navigationBarTitleText: '登录'
  };

  render() {
    return (
      <View>

      </View>
    )
  }
}

export default Login;
