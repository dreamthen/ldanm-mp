import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Button
} from '@tarojs/components';
import Login from "../../components/Login";
import OutLogin from "../../components/OutLogin";


class LoginDemo extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {};

  config = {
    navigationBarTitleText: '登录'
  };

  componentDidMount() {
    OutLogin({
      url: 'https://huya-dev.hupu.com/public/index.php/program/login',
      method: 'post',
      header: {
        'content-type': 'application/x-www-form-urlencoded'
      },
      callBack: (data, header) => {
        console.log(data);
      },
      done: (res) => {
        console.log(res);
      }
    });
  }

  render() {
    return (
      <View className='keryi-login'>
        直接登录:
        <Login
          canClick={false}
          url='https://huya-dev.hupu.com/public/index.php/program/login'
          method='post'
          header={{
            'content-type': 'application/x-www-form-urlencoded'
          }}
          callBack={(data, header) => {
            console.log(data);
          }}
          done={(res) => {
            console.log(res);
          }}
        />
        点击按钮登录:
        <Login
          canClick
          className='keryi-login-button'
          url='https://huya-dev.hupu.com/public/index.php/program/login'
          method='post'
          header={{
            'content-type': 'application/x-www-form-urlencoded'
          }}
          callBack={(data, header) => {
            console.log(data);
          }}
          done={(res) => {
            console.log(res);
          }}
        >
          <Button>
            点击登录
          </Button>
        </Login>
      </View>
    )
  }
}

export default LoginDemo;
