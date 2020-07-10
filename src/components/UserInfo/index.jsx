import React, {Component} from 'react';
import Taro from '@tarojs/taro';
import {
  View,
  Button
} from '@tarojs/components';
import PropTypes from 'prop-types';
import cns from 'classnames';
import * as constants from './constants';

import './index.scss';

/**
 * 功能组件
 * 个人信息
 */
class UserInfo extends Component {
  static propTypes = {
    //指定返回用户信息的语言,zh_CN简体中文,zh_TW繁体中文,en英文
    lang: PropTypes.string,
    //按钮的尺寸
    size: PropTypes.string,
    //按钮类型
    buttonType: PropTypes.string,
    //选择类型
    type: PropTypes.string,
    //是否显示点击获取个人信息的按钮
    visible: PropTypes.bool,
    //保存或者获取用户个人信息成功之后的回调
    callBack: PropTypes.func.isRequired,
    //点击获取用户个人信息按钮的文案
    text: PropTypes.string.isRequired,
    //是否自定义获取用户个人信息按钮的文案信息
    renderButtonDetail: PropTypes.element,
    //外部传入样式表
    className: PropTypes.string,
    //保存或者获取用户个人信息完成之后的回调
    done: PropTypes.func
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
      done = () => {
      },
      lang = 'zh_CN',
      type = 'userInfo'
    } = this.props;
    Taro.nextTick(() => {
      switch (type) {
        case 'userInfo': {
          Taro.getSetting({
            success: ({authSetting = {}}) => {
              if (authSetting['scope.userInfo']) {
                Taro.getUserInfo({
                  lang,
                  success: (res = {}) => {
                    callBack({detail: {...res}});
                  },
                  fail: (res = {}) => {
                    callBack(res);
                  },
                  complete: (res = {}) => {
                    done(res);
                  }
                });
              } else {
                this.setState({
                  show: true
                });
                callBack({});
              }
            },
            fail: (res) => {
              callBack(res);
            },
            complete: (res) => {
              done(res);
            }
          });
        }
        default: {
          break;
        }
      }
    });
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
    const {
      className = '',
      size = 'default',
      text = '',
      type = 'userInfo',
      lang = 'zh_CN',
      buttonType = 'primary'
    } = this.props;
    const {show = false} = this.state;
    const {
      getUserInfoHandler = () => {
      }
    } = this;
    return (
      <View className={cns('ldm-userInfo', className)}>
        {
          show ? text ? <Button
            size={size}
            type={buttonType}
            lang={lang}
            className='ldm-userInfo-get'
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

export default UserInfo;
