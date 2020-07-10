import React, {Component} from 'react';
import {
  Block,
  View
} from '@tarojs/components';
import InputPanel from '../../components/InputPanel';

import './index.scss';


class InputPanelDemo extends Component {

  state = {
    //是否输入咨询框聚焦
    isFocus: false,
    //是否存在弹出面板浮层
    isPanel: false,
    //获取手机键盘的高度转变为输入框底部的距离
    inputDistanceBoard: 0,
    //输入框当前值
    value: '',
  };

  componentDidMount() {

  }

  /**
   * 输入框值改变时触发的事件
   * @param val
   */
  onChangeValueHandler = (val) => {
    val = val.target ? val.target.value : val;
    this.setState({
      value: val
    });
  };

  /**
   * 输入框聚焦时触发
   * @尹文楷
   */
  onFocusHandler = (value) => {
    this.setState({
      isFocus: true,
      isPanel: false
    });
  };

  /**
   * 输入框失焦时触发
   * @尹文楷
   */
  onBlurHandler = (event) => {
    const {isPanel} = this.state;
    let new_state = Object.assign({}, {isFocus: false}, isPanel ? {} : {inputDistanceBoard: 0});
    this.setState(new_state);
  };

  /**
   * 获取更多的功能(发送图片以及商品详情链接等等)
   */
  onGetMoreFuncHandler = () => {
    const {isPanel = false} = this.state;
    this.setState({
      inputDistanceBoard: !isPanel ? 180 : 0,
      isPanel: !isPanel
    });
  };

  /**
   * 输入进行咨询
   * @尹文楷
   */
  onPostMessageHandler = () => {
  };

  /**
   * 将面板隐藏
   */
  onPanelHide = (e = {}) => {
    this.setState({
      isPanel: false,
      isFocus: false,
      inputDistanceBoard: 0
    });
    //取消冒泡事件
    e.stopPropagation && e.stopPropagation();
  };

  render() {
    const {
      isPanel = false,
      isFocus = false,
      inputDistanceBoard = 0,
      value = ''
    } = this.state;
    const {
      onChangeValueHandler = () => {
      },
      onFocusHandler = () => {
      },
      onBlurHandler = () => {
      },
      onPostMessageHandler = () => {
      },
      onGetMoreFuncHandler = () => {
      },
      onPanelHide = () => {
      }
    } = this;
    return (
      <Block>
        <View className='ldm-inputPanel'
              onClick={onPanelHide}
        >
        </View>
        <View className='ldm-inputPanel-detail'>
          <InputPanel
            inputDistanceBoard={inputDistanceBoard}
            isPanel={isPanel}
            isFocus={isFocus}
            value={value}
            placeholder='请输入内容'
            onFocus={onFocusHandler}
            onBlur={onBlurHandler}
            onChange={onChangeValueHandler}
            onConfirm={onPostMessageHandler}
            onGetMoreFunc={onGetMoreFuncHandler}
            renderPanel={<View>
            </View>}
          />
        </View>
      </Block>
    )
  }
}

export default InputPanelDemo;
