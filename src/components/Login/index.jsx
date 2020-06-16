import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import PropTypes from 'prop-types';
import cns from 'classnames';

import Ldanm from '../utils';

/**
 * 功能组件
 * 登录
 */
class LdanmLogin extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //是否是点击登录
    canClick: PropTypes.bool.isRequired,
    //使用code匹配token登录的url
    url: PropTypes.string.isRequired,
    //使用code匹配token登录的请求方式
    method: PropTypes.string.isRequired,
    //使用code匹配token登录的请求头部
    header: PropTypes.object.isRequired,
    //登录之后的回调
    callBack: PropTypes.func.isRequired,
    //外部传入样式表
    className: PropTypes.string,
    //登录完全完成的回调
    done: PropTypes.func.isRequired
  };

  componentDidMount() {
    const {canClick = false} = this.props;
    const {
      loginHandler = () => {
      }
    } = this;
    !canClick && loginHandler();
  }

  /**
   * 进行登录
   */
  loginHandler = () => {
    let {
      url = '',
      method = 'get',
      header = {},
      callBack = () => {
      },
      done = () => {
      }
    } = this.props;
    Taro.login({
      success: ({code}) => {
        Ldanm.request({
          url,
          method,
          header,
          data: {
            code
          },
          success: (data, statusCode) => {
            callBack(data, statusCode);
          },
          fail: (res = {}) => {
            callBack(res);
          },
          complete: (res = {}) => {
            done(res);
          }
        });
      },
      fail: (res = {}) => {
        Taro.showModal({
          title: '登录api错误',
          content: '检测您是否处在小程序环境下调用此api',
          showCancel: false
        });
      },
      complete: (res = {}) => {
      }
    });
  };

  render() {
    const {canClick = false, className = ''} = this.props;
    const {
      loginHandler = () => {
      }
    } = this;
    return (
      <View className={cns('keryi-basic-login', className)} onClick={() => {canClick && loginHandler();}}>
        {canClick && this.props.children}
      </View>
    )
  }
}

export default LdanmLogin;
