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

  state = {
  };

  config = {
    navigationBarTitleText: '登录'
  };

  render() {
    return (
      <View className='hupu-login'>
        直接登录:
        <AcLogin
          canClick={false}
          url='https://huya-dev.hupu.com/public/index.php/program/login'
          method='post'
          header={{
            'content-type': 'application/x-www-form-urlencoded'
          }}
          callBack={(data, statusCode) => {
            if (statusCode === 200) {
              console.log(data);
            } else {
              console.log(data);
            }
          }}
          done={(res) => {
            console.log(res);
          }}
        />
        点击按钮登录:
        <AcLogin
          canClick
          className='hupu-login-button'
          url='https://huya-dev.hupu.com/public/index.php/program/login'
          method='post'
          header={{
            'content-type': 'application/x-www-form-urlencoded'
          }}
          callBack={(data, statusCode) => {
            if (statusCode === 200) {
              console.log(data);
            } else {
              console.log(data);
            }
          }}
          done={(res) => {
            console.log(res);
          }}
        >
          点击登录
        </AcLogin>
      </View>
    )
  }
}

export default Login;
