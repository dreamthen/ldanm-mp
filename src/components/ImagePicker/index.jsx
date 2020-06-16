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
    className: PropTypes.string
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
      className = ''
    } = this.props;
    return (
      <View className={cns('keryi-imagePicker', className)}>

      </View>
    )
  }
}

export default KeryiImagePicker;
