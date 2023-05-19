import React, {Component} from 'react';
import Taro from '@tarojs/taro';
import {
  View,
  Button
} from '@tarojs/components';
import PropTypes from 'prop-types';
import cns from 'classnames';
import * as constants from './constants';
import * as userInfoApi from './index_service';

import './index.scss';

/**
 * 功能组件
 * 个人信息
 */
class UserInfo extends Component {
  static propTypes = {
    //判断当前用户是否需要更新信息的后端接口
    url: PropTypes.string,
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

  componentDidMount() {
    const {
      url = '',
      type = 'userInfo'
    } = this.props;
    switch (type) {
      case 'userInfo': {
        userInfoApi.getNeedUpdateUserInfo.call(this, url);
      }
      default: {
        break;
      }
    }
  }

  /**
   * 获取用户昵称和头像信息配置
   */
  userInfoConfig = (e = {}) => {
    const {
      callBack = () => {
      },
      done = () => {
      },
      lang = 'zh_CN',
      type = 'userInfo'
    } = this.props;
    switch (type) {
      case 'userInfo': {
        Taro.getUserProfile({
          lang,
          desc: constants.needUserInfoDesc,
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
      }
      default: {
        break;
      }
    }
    //取消冒泡事件
    e.stopPropagation();
  };

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
      },
      userInfoConfig = () => {
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
            // onGetUserInfo={userInfoConfig}
            onClick={userInfoConfig}
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
