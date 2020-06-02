import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';

import './index.less';


class UserInfo extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {

  };

  config = {
    navigationBarTitleText: '上传文件'
  };

  componentDidMount() {

  }

  render() {
    return (
      <View className='hupu-upload'>
      </View>
    )
  }
}

export default UserInfo;
