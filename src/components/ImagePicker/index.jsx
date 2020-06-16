import Taro, {Component} from '@tarojs/taro';
import PropTypes from 'prop-types';
import {
  View
} from '@tarojs/components';
import cns from 'classnames';
import {
  AtImagePicker
} from 'taro-ui';

import './index.less';

/**
 * 抽象图片选择器
 * @尹文楷
 */
class KeryiImagePicker extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //底部导航栏的外部传入样式
    className: PropTypes.string,
    //图片文件数组,元素为对象,包含属性url（必选)
    files: PropTypes.array.isRequired,
    //图片预览模式
    mode: PropTypes.string,
    //是否显示添加图片按钮
    showAddBtn: PropTypes.bool,
    //是否支持多选
    multiple: PropTypes.bool,
    //最多可以选择的图片张数,taro 2.0.2版本起支持
    count: PropTypes.number,
    //所选的图片的尺寸,taro 2.0.2版本起支持
    sizeType: PropTypes.array,
    //选择图片的来源,taro 2.0.2版本起支持
    sourceType: PropTypes.array,
    //单行的图片数量
    length: PropTypes.number,
    //files 值发生变化触发的回调函数,operationType 操作类型有添加,移除,如果是移除操作,则第三个参数代表的是移除图片的索引
    onChange: PropTypes.func,
    //点击图片触发的回调
    onImageClick: PropTypes.func,
    //选择失败触发的回调
    onFail: PropTypes.func
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

  render() {
    const {
      className = '',
      files = [],
      mode = 'scaleToFill',
      showAddBtn = true,
      multiple = false,
      count = 9,
      sizeType = [],
      sourceType = [],
      length = 3,
      onChange = () => {
      },
      onImageClick = () => {
      },
      onFail = () => {
      }
    } = this.props;
    return (
      <View className={cns('keryi-imagePicker', className)}>
        <AtImagePicker
          files={files}
          mode={mode}
          showAddBtn={showAddBtn}
          multiple={multiple}
          count={count}
          sizeType={sizeType}
          sourceType={sourceType}
          length={length}
          onChange={onChange}
          onImageClick={onImageClick}
          onFail={onFail}
        />
      </View>
    )
  }
}

export default KeryiImagePicker;
