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
    //用户昵称
    nickName: '',
    //用户头像
    avatar: '',
    //是否显示获取个人信息按钮
    show: true
  };

  config = {
    navigationBarTitleText: '个人信息'
  };

  /**
   * 获取用户的个人信息
   */
  getUserInfoHandler = ({detail: {userInfo}}) => {
    const {nickName = '', avatarUrl = ''} = userInfo;
    this.setState({
      nickName,
      avatar: avatarUrl,
      show: false
    });
  };

  render() {
    const {
      getUserInfoHandler = () => {
      }
    } = this;
    const {nickName = '', avatar = '', show = true} = this.state;
    return (
      <View className='hupu-userInfo'>
        <AcUserInfo visible={show} text='获取个人信息' callBack={getUserInfoHandler}>
          用户名: {nickName}
          头像: {avatar}
        </AcUserInfo>
      </View>
    )
  }
}

export default UserInfo;
