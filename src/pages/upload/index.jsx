import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import Upload from '../../components/Upload';

import 'taro-ui/dist/style/components/icon.scss';
import './index.less';


class UploadDemo extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {};

  config = {
    navigationBarTitleText: '上传图片视频'
  };

  componentDidMount() {
  }

  render() {
    const {} = this;
    return (
      <View className='ldm-upload'>
        <View>
          上传图片:
          <Upload
            className='ldm-upload-image'
            count={6}
            text='upload image'
            type='image'
            sourceType={['album', 'camera']}
            callBack={(path = '', size = 0) => {
              console.log(path);
            }}
            done={(res = {}) => {
              console.log(res);
            }}
          />
        </View>
        <View>
          上传视频:
          <Upload
            className='ldm-upload-video'
            text='upload video'
            type='video'
            sourceType={['album', 'camera']}
            maxDuration={40}
            camera='back'
            callBack={(path = '', size = 0) => {
              console.log(path);
            }}
            done={(res = {}) => {
              console.log(res);
            }}
          />
        </View>
      </View>
    )
  }
}

export default UploadDemo;
