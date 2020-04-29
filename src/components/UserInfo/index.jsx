import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Button
} from '@tarojs/components';
import PropTypes from 'prop-types';

import Anchor from "../utils";

/**
 * 拓海功能组件
 * 个人信息
 */
class AcUserInfo extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //是否保存至服务端
    isSave: PropTypes.bool.isRequired,
    //保存个人信息至服务端的url
    url: PropTypes.string.isRequired,
    //保存个人信息至服务端的请求方式
    method: PropTypes.string.isRequired,
    //保存个人信息至服务端的请求头部
    header: PropTypes.object.isRequired,
    //保存或者获取用户个人信息之后的回调
    callBack: PropTypes.func.isRequired,
    //外部传入样式表
    className: PropTypes.string,
    //保存或者获取用户个人信息完全完成的回调
    done: PropTypes.func.isRequired
  };

  componentDidMount() {
    let {
      url = '',
      method = 'get',
      header = {},
      callBack = () => {
      },
      done = () => {
      }
    } = this.props;

  }

  render() {
    return (
      <View>
      </View>
    )
  }
}

export default AcUserInfo;
