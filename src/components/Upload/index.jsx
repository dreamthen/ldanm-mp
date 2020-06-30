import Taro, {Component} from '@tarojs/taro';
import PropTypes from 'prop-types';
import {
  Block,
  View
} from '@tarojs/components';
import cns from 'classnames';

import AtIcon from '../../common/icon';
import * as constants from './constants';

import './index.less';

/**
 * 抽象上传文件组件
 * @尹文楷
 */
class Upload extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //外部传入样式表
    className: PropTypes.string,
    //类型为图片时,最多可以选择的图片张数
    count: PropTypes.number,
    //类型为视频时,是否压缩所选择的视频文件
    compressed: PropTypes.bool,
    //类型为视频时,拍摄视频最长拍摄时间,单位秒
    maxDuration: PropTypes.number,
    //类型为视频时,默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效
    camera: PropTypes.string,
    //选择上传文件的类型
    type: PropTypes.array.isRequired,
    //选择图片 or 视频的来源
    sourceType: PropTypes.array.isRequired,
    //所选的图片的尺寸
    sizeType: PropTypes.array,
    //上传文件组件内部文案
    text: PropTypes.string,
    //上传文件成功或者失败之后的回调
    callBack: PropTypes.func.isRequired,
    //上传文件完成之后的回调
    done: PropTypes.func.isRequired
  };

  state = {};

  static getDerivedStateFromProps(props, state) {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  /**
   * 文件上传
   */
  onUploadHandler = (e = {}) => {
    constants.uploadTypeConfig.call(this);
    //取消冒泡事件
    e.stopPropagation();
  };

  render() {
    const {
      className = '',
      text = ''
    } = this.props;
    const {
      onUploadHandler = () => {
      }
    } = this;
    return (
      <View className={cns('ldm-upload', className)}>
        <View className='ldm-upload-container'
              onClick={onUploadHandler}
        >
          {
            text ? <Block>
              <AtIcon value='add' size={16} className='ldm-upload-add'/>
              {text}
            </Block> : this.props.children
          }
        </View>
      </View>
    )
  }
}

export default Upload;
