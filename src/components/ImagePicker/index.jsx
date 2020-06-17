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
class ImagePicker extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //上传图片的url
    action: PropTypes.string.isRequired,
    //文件对应的 key,开发者在服务端可以通过这个 key获取文件的二进制内容
    name: PropTypes.string,
    //HTTP请求 Header,Header中不能设置Referer
    header: PropTypes.object,
    //HTTP请求中其他额外的form data
    data: PropTypes.object,
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
    //files 值发生添加触发的回调函数,operationType 操作类型有添加,移除,如果是移除操作,则第三个参数代表的是移除图片的索引
    onAdd: PropTypes.func,
    //files 值发生移除触发的回调函数,operationType 操作类型有添加,移除,如果是移除操作,则第三个参数代表的是移除图片的索引
    onRemove: PropTypes.func,
    //点击图片触发的回调
    onImageClick: PropTypes.func,
    //选择失败触发的回调
    onFail: PropTypes.func
  };


  state = {
    //内部作为触发的文件列表
    filesList: this.props.files
  };

  static getDerivedStateFromProps(props, state) {
    return {
      filesList: props.files
    }
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  /**
   * files值发生变化触发的回调函数,operationType操作类型有添加,移除,如果是移除操作,则第三个参数代表的是移除图片的索引
   */
  onChangeHandler = (files = [], operationType = 'add', index = 0) => {
    const {
      action = '',
      name = '',
      header = {},
      data = {},
      onAdd = () => {
      },
      onRemove = () => {
      }
    } = this.props;
    if (operationType === 'add') {
      this.setState({
        filesList: []
      }, () => {
        let {filesList = []} = this.state;
        for (let fileItem of files) {
          console.log(fileItem);
          Taro.uploadFile({
            url: action,
            method: 'post',
            filePath: fileItem.file.path,
            name,
            header: Object.assign({}, {'content-type': 'multipart/form-data'}, header),
            formData: data,
            success: ({data = '', statusCode = 200}) => {
              filesList = [...filesList, {url: data}];
              onAdd(data, statusCode);
            },
            fail: (res) => {
            },
            complete: (res) => {
            }
          });
        }
      });
    } else {
      onRemove(files, index);
    }
  };

  render() {
    const {
      className = '',
      mode = 'scaleToFill',
      showAddBtn = true,
      multiple = false,
      count = 9,
      sizeType = [],
      sourceType = [],
      length = 3,
      onImageClick = () => {
      },
      onFail = () => {
      }
    } = this.props;
    const {
      filesList
    } = this.state;
    const {
      onChangeHandler = () => {
      }
    } = this;
    return (
      <View className={cns('keryi-imagePicker', className)}>
        <AtImagePicker
          files={filesList}
          mode={mode}
          showAddBtn={showAddBtn}
          multiple={multiple}
          count={count}
          sizeType={sizeType}
          sourceType={sourceType}
          length={length}
          onChange={onChangeHandler}
          onImageClick={onImageClick}
          onFail={onFail}
        />
      </View>
    )
  }
}

export default ImagePicker;
