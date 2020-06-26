import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import ImagePicker from '../../components/ImagePicker';

import 'taro-ui/dist/style/components/image-picker.scss';
import 'taro-ui/dist/style/components/icon.scss';
import './index.less';


class ImagePickerDemo extends Component {
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
   * 图片组添加时所触发的事件
   * @param file
   */
  onAdd = (data, statusCode, {key, value: fileItem, total: length}) => {
    if(statusCode === 200) {

    }
  }

  /**
   * 图片组添加触发前所触发的事件
   */
  onAddBefore = () => {
  }

  /**
   * 图片组添加触发上传文件前的回调函数
   * @param file
   */
  onAddUploadBefore = (file) => {
  }

  /**
   * 图片组移除文件的回调函数
   */
  onRemove = (file, index) => {
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
      },
      onAddBefore = () => {
      },
      onAddUploadBefore = () => {
      },
      onRemove = () => {
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
          onAddBefore={onAddBefore}
          onAddUploadBefore={onAddUploadBefore}
          onRemoveBefore={() => {}}
          onRemove={onRemove}
        />
      </View>
    )
  }
}

export default ImagePickerDemo;
