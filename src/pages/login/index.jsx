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
    //登录使用code获取到的token
    token: '暂无登录'
  };

  config = {
    navigationBarTitleText: '登录'
  };

  render() {
    const {token = ''} = this.state;
    return (
      <View>
        token: {token}
        <AcLogin
          url='https://huya-dev.hupu.com/public/index.php/program/login'
          method='post'
          headers={{
            'content-type': 'application/x-www-form-urlencoded'
          }}
          callBack={(data, statusCode) => {
            if (statusCode === 200) {
              console.log(data);
            } else {

            }
          }}
          done={(res) => {
            console.log(res);
          }}
        />
      </View>
    )
  }
}

export default Login;
