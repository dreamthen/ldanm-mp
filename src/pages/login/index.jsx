import React, {Component} from 'react';
import {
  View,
  Button
} from '@tarojs/components';
import Login from '../../components/Login';
import OutLogin from '../../components/OutLogin';

import './index.scss';


class LoginDemo extends Component {
  state = {};

  componentDidMount() {
    OutLogin({
      url: 'https://pet.api.1jtec.com/tinySession/login',
      method: 'get',
      header: {
        'content-type': 'application/json'
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
          method='get'
          header={{
            'content-type': 'application/json'
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
          method='get'
          header={{
            'content-type': 'application/json'
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
