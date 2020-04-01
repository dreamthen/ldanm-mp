import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import PropTypes from 'prop-types';

/**
 * 拓海功能组件
 * 登录
 */
class AcLogin extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    className: PropTypes.string
  };

  componentDidMount() {
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default AcLogin;
