import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import {
  Block,
  Image,
  View
} from '@tarojs/components';
import AtInput from "../../common/input";
import AtButton from "../../common/button";
import Panel from "../Panel";
import {imgs} from './assets';

import './index.less';

/**
 * 抽象消息功能发送组件
 */
class InputPanel extends Component {
  static propTypes = {
    //是否存在面板浮层按钮
    hasPanel: PropTypes.bool,
    //获取更多的功能(发送图片以及商品详情链接等等)
    onGetMoreFunc: PropTypes.func,
    //input消息功能发送输入框距离手机底部的距离
    inputDistanceBoard: PropTypes.number.isRequired,
    //外部传入的样式表
    className: PropTypes.string,
    //是否存在弹出面板浮层
    isPanel: PropTypes.bool.isRequired,
    //是否输入咨询框聚焦
    isFocus: PropTypes.bool.isRequired,
    //面板浮层渲染的内容
    renderPanel: PropTypes.element,
    //输入框当前值,开发者需要通过 onChange 事件来更新 value 值,必填
    value: PropTypes.string.isRequired,
    //占位符
    placeholder: PropTypes.string,
    //输入框值改变时触发的事件
    onChange: PropTypes.func.isRequired,
    //点击完成按钮时触发,可以获取 event 参数
    onConfirm: PropTypes.func.isRequired,
    //输入框被选中时触发的事件
    onFocus: PropTypes.func,
    //输入框失去焦点时触发的事件
    onBlur: PropTypes.func,
    //键盘高度发生变化的时候触发此事件
    onKeyboardChange: PropTypes.func
  };

  state = {
    //input消息功能发送输入框距离手机底部的距离
    inputDistanceBoard: 0,
    //是否存在弹出面板浮层
    isPanel: false,
    //是否输入咨询框聚焦
    isFocus: false,
  };

  constructor(props) {
    super(props);
  }

  static getDerivedStateFromProps(props, state) {
    const {inputDistanceBoard = 0, isPanel = false, isFocus = false} = props;
    return {
      inputDistanceBoard,
      isFocus,
      isPanel
    };
  }

  /**
   * 监听键盘高度发生变化的时候触发此事件
   */
  onKeyboardChangeHandler = (event = {}) => {
    const {currentTarget: {height = 0}} = event || {};
    const {
      onKeyboardChange = () => {
      }
    } = this.props;
    this.setState({
      inputDistanceBoard: height
    });
    onKeyboardChange(height);
  };

  /**
   * 输入框失焦时触发
   * @尹文楷
   */
  onBlurHandler = (event) => {
    const {
      onBlur = () => {
      }
    } = this.props;
    onBlur(event);
  };

  /**
   * 输入框聚焦时触发
   * @尹文楷
   */
  onFocusHandler = (value) => {
    const {
      onFocus = () => {
      }
    } = this.props;
    onFocus();
  };

  render() {
    const {
      inputDistanceBoard = 0,
      isPanel = false,
      isFocus = false
    } = this.state;
    const {
      hasPanel = true,
      placeholder = '',
      value = '',
      className = '',
      onChange = () => {
      },
      onConfirm = () => {
      },
      onGetMoreFunc = () => {
      }
    } = this.props;
    const {
      onFocusHandler = () => {
      },
      onBlurHandler = () => {
      },
      onKeyboardChangeHandler = () => {
      }
    } = this;
    return (
      React.createElement(Block, {},
        React.createElement(
          View, {
            className: cns('at-row',
              'at-row--no-wrap',
              'ldm-communications-communicationsBar',
              className),
            style: {bottom: `${inputDistanceBoard}px`}
          },
          React.createElement(View, {
              className: cns('at-col-10', 'ldm-communications-communicationsBar-input')
            },
            React.createElement(AtInput, {
              type: 'text',
              maxLength: 100,
              customStyle: {padding: '16rpx 0'},
              className: cns(
                'ldm-communications-communicationsBar-communicationsValue',
                {'ldm-communications-communicationsBar-communicationsValue-focus': !!isFocus}
              ),
              placeholder,
              adjustPosition: false,
              value,
              onChange,
              onFocus: onFocusHandler,
              onKeyboardHeightChange: onKeyboardChangeHandler,
              onBlur: onBlurHandler,
              onConfirm
            }, hasPanel && React.createElement(Image, {
              src: imgs.addMoreFunc,
              mode: 'widthFix',
              style: {width: '52rpx'},
              className: 'ldm-communications-communicationsBar-addFunc',
              onClick: onGetMoreFunc
            }))
          ),
          React.createElement(View, {
            className: cns('at-col-2', 'ldm-communications-communicationsBar-post')
          }, React.createElement(AtButton, {
            size: 'small',
            className: 'ldm-communications-communicationsBar-post-button',
            onClick: onConfirm
          }, '发送'))
        ),
        React.createElement(Panel, {
          className: 'ldm-communications-panel',
          isPanel
        }, this.props.renderPanel)
      )
    )
  }
}

export default InputPanel;
