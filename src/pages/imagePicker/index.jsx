import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import {
  ImagePicker
} from 'ldanm-taro-frc';

import 'taro-ui/dist/style/components/image-picker.scss';
import 'taro-ui/dist/style/components/icon.scss';
import './index.less';


class ImagePicker extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    files: []
  };

  config = {
    navigationBarTitleText: '图片选择器'
  };

  componentDidMount() {
  }

  /**
   * 图片组变化添加时所触发的事件
   * @param file
   */
  onAdd = (file) => {
    this.setState({
      files: file
    });
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
      onAdd = () => {
      }
    } = this;
    return (
      <View className='hupu-imagePicker'>
        <ImagePicker
          action='https://pet.api.1jtec.com/tinyStatics/uploadImg/v2'
          name='file'
          files={files}
          data={{type: 'ORMAL'}}
          onFail={onFail}
          onImageClick={onImageClick}
          onAdd={onAdd}
        />
      </View>
    )
  }
}

export default ImagePicker;
