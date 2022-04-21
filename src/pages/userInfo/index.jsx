import React, {Component} from 'react';
import {
  View
} from '@tarojs/components';
import UserInfo from '../../components/UserInfo';


class UserInfoDemo extends Component {
  state = {
    //用户昵称
    nickName: '',
    //用户头像
    avatar: '',
    //获取的手机号或者异常信息
    phone: '',
    //是否显示获取个人信息按钮
    show: true,
    //是否显示获取个人手机号码的按钮
    showPhone: true,
  };

  componentDidMount() {
    // 个人手机号码通过后台去判断是否已经存在这个手机号,然后去操作是否显示获取个人手机号码的按钮
    // this.setState({
    //   showPhone: false
    // });
  }

  /**
   * 获取用户的个人信息
   */
  getUserInfoHandler = (res = {}) => {
    const {detail = {}} = res;
    const {userInfo} = detail;
    if (userInfo) {
      const {nickName = '', avatarUrl = ''} = userInfo;
      this.setState({
        nickName,
        avatar: avatarUrl,
        show: false
      });
    }
  };

  /**
   * 获取用户的手机号码
   */
  getPhoneNumberHandler = (res = {}) => {
    const {detail = {}} = res;
    const {errMsg} = detail;
    if (errMsg) {
      this.setState({
        showPhone: false,
        phone: errMsg
      });
    }
  }

  render() {
    const {
      getUserInfoHandler = () => {
      },
      getPhoneNumberHandler = () => {
      }
    } = this;
    const {nickName = '', avatar = '', show = true, showPhone = true, phone = ''} = this.state;
    return (
      <View className='ldm-userInfo'>
        <UserInfo
          url='https://pet.api.1jtec.com/users/needUpdateUserInfo'
          visible={show}
          type='userInfo'
          text='获取个人信息'
          callBack={getUserInfoHandler}
        >
          用户名: {nickName}
          头像: {avatar}
        </UserInfo>
        <UserInfo visible={showPhone} type='phone' text='获取手机号码' callBack={getPhoneNumberHandler}>
          手机号码: {phone}
        </UserInfo>
      </View>
    )
  }
}

export default UserInfoDemo;
