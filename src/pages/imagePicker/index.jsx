import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import {
  KeryiImagePicker
} from '../../components';

import 'taro-ui/dist/style/components/image-picker.scss';
import 'taro-ui/dist/style/components/icon.scss';
import './index.less';


class ImagePicker extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    files: [
      {
        url: 'https://prod-pet.oss.1jtec.com/postcard/c4449804706476352_1.jpg@ListViewIMG',
      },
      {
        url: 'https://prod-pet.oss.1jtec.com/postcard/c4449804706476352_2.jpg@ListViewIMG',
      },
      {
        url: 'https://prod-pet.oss.1jtec.com/postcard/c4448657899797351_2.jpg@ListViewIMG',
      }
    ]
  };

  config = {
    navigationBarTitleText: '图片选择器'
  };

  componentDidMount() {
  }

  /**
   * 图片组变化修改时所触发的事件
   * @param files
   */
  onChange = (files) => {
    this.setState({
      files
    })
  }

  /**
   * 图片加载失败时所触发的事件
   * @param mes
   */
  onFail(mes) {
    console.log(mes)
  }

  /**
   * 点击预览图片时所触发的事件
   * @param index
   * @param file
   */
  onImageClick(index, file) {
    console.log(index, file)
  }

  render() {
    const {files = []} = this.state;
    const {
      onFail = () => {
      },
      onImageClick = () => {
      },
      onChange = () => {
      }
    } = this;
    return (
      <View className='hupu-imagePicker'>
        <KeryiImagePicker
          files={files}
          onFail={onFail}
          onImageClick={onImageClick}
          onChange={onChange}
        />
      </View>
    )
  }
}

export default ImagePicker;
