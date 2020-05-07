import Taro, {Component} from '@tarojs/taro';
import {
  View,
  Button
} from '@tarojs/components';
import PropTypes from 'prop-types';
import cns from 'classnames';
import * as constants from './constants';

/**
 * 拓海功能组件
 * 个人信息
 */
class AcUserInfo extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //选择类型
    type: PropTypes.string.isRequired,
    //是否显示点击获取个人信息的按钮
    visible: PropTypes.bool,
    //保存或者获取用户个人信息之后的回调
    callBack: PropTypes.func.isRequired,
    //点击获取用户个人信息按钮的文案
    text: PropTypes.string.isRequired,
    //是否自定义获取用户个人信息按钮的文案信息
    renderButtonDetail: PropTypes.element,
    //外部传入样式表
    className: PropTypes.string
  };

  state = {
    //是否显示点击获取用户个人信息的按钮
    show: false
  };

  static getDerivedStateFromProps(props) {
    const {visible = true} = props;
    return {show: visible};
  }

  componentWillMount() {
  }

  componentDidMount() {
    const {
      callBack = () => {
      },
      type = ''
    } = this.props;
    switch (type) {
      case 'userInfo': {
        Taro.getSetting({
          success: ({authSetting = {}}) => {
            if (authSetting['scope.userInfo']) {
              Taro.getUserInfo({
                success: (res = {}) => {
                  callBack({detail: {...res}});
                },
                fail: (res = {}) => {
                },
                complete: (res = {}) => {
                }
              });
            } else {
              this.setState({
                show: true
              });
            }
          },
          fail: (res) => {
          },
          complete: (res) => {
          }
        });
      }
      default: {
        break;
      }
    }
  }

  /**
   * 点击按钮获取用户的个人信息
   */
  getUserInfoHandler = (res = {}) => {
    const {
      callBack = () => {
      }
    } = this.props;
    callBack(res);
  };

  render() {
    const {className = '', text = '', type = ''} = this.props;
    const {show = false} = this.state;
    const {
      getUserInfoHandler = () => {
      }
    } = this;
    return (
      <View className={cns('hupu-userInfo', className)}>
        {
          show ? text ? <Button
            className='hupu-userInfo-get'
            openType={constants.typeConfig[type]}
            onGetUserInfo={getUserInfoHandler}
            onGetPhoneNumber={getUserInfoHandler}
          >
            {text}
          </Button> : this.props.renderButtonDetail : this.props.children
        }
      </View>
    )
  }
}

export default AcUserInfo;
