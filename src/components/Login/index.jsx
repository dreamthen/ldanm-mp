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
    //使用code匹配token登录的url
    url: PropTypes.string.isRequired,
    //登录之后的回调
    callBack: PropTypes.func.isRequired,
    className: PropTypes.string
  };

  componentDidMount() {
    Taro.login({
      success: (code) => {
        
      },
      fail: () => {
      },
      complete: () => {
      }
    });
  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default AcLogin;
