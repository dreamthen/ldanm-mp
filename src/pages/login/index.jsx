import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Button
} from '@tarojs/components';
import {
  KeryiLogin
} from '../../components';


class Login extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {};

  config = {
    navigationBarTitleText: '登录'
  };

  render() {
    return (
      <View className='keryi-login'>
        直接登录:
        <KeryiLogin
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
        <KeryiLogin
          canClick
          className='keryi-login-button'
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
          <Button>
            点击登录
          </Button>
        </KeryiLogin>
      </View>
    )
  }
}

export default Login;
