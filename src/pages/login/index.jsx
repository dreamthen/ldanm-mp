import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Button
} from '@tarojs/components';
import Login from '../../components/Login';
import OutLogin from '../../components/OutLogin';


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
      url: 'https://pet.api.1jtec.com/tinySession/login',
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
      <View className='ldm-login'>
        直接登录:
        <Login
          canClick={false}
          url='https://pet.api.1jtec.com/tinySession/login'
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
          className='ldm-login-button'
          url='https://pet.api.1jtec.com/tinySession/login'
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
