import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';

import './index.less';


class ImagePicker extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {

  };

  config = {
    navigationBarTitleText: '图片选择器'
  };

  componentDidMount() {

  }

  render() {
    return (
      <View className='hupu-imagePicker'>
      </View>
    )
  }
}

export default ImagePicker;
