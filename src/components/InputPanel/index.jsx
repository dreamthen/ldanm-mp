import Taro, {Component} from '@tarojs/taro';
import PropTypes from 'prop-types';
import cns from 'classnames';
import {
  Block,
  View
} from '@tarojs/components';
import AtInput from "../../common/input";
import Panel from "../Panel";
import {imgs} from './assets';

import './index.less';

/**
 * 抽象消息功能发送组件
 */
class InputPanel extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //获取更多的功能(发送图片以及商品详情链接等等)
    onGetMoreFunc: PropTypes.func,
    //input消息功能发送输入框距离手机底部的距离
    inputDistanceBoard: PropTypes.number,
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
    onConfirm: PropTypes.func.isRequired
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

  /**
   * 监听键盘高度发生变化的时候触发此事件
   */
  onKeyboardChangeHandler = (event = {}) => {
    const {currentTarget: {height = 0}} = event || {};
    this.setState({
      inputDistanceBoard: height
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
   * 输入框聚焦时触发
   * @尹文楷
   */
  onFocusHandler = (value) => {
    this.setState({
      isFocus: true,
      isPanel: false
    });
  };

  render() {
    const {
      inputDistanceBoard = 0,
      isPanel = false,
      isFocus = false
    } = this.state;
    const {
      placeholder = '',
      value = '',
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
      <Block>
        <View
          className={cns('at-row',
            'at-row--no-wrap',
            'ldm-communications-communicationsBar')
          }
          style={{bottom: `${inputDistanceBoard}px`}}
        >
          <View className={cns('at-col-10',
            'ldm-communications-communicationsBar-input')
          }>
            <AtInput
              type='text'
              maxLength={100}
              className={cns(
                'ldm-communications-communicationsBar-communicationsValue',
                {'ldm-communications-communicationsBar-communicationsValue-focus': !!isFocus}
              )}
              placeholder={placeholder}
              adjustPosition={false}
              value={value}
              onChange={onChange}
              onFocus={onFocusHandler}
              onKeyboardHeightChange={onKeyboardChangeHandler}
              onBlur={onBlurHandler}
              onConfirm={onConfirm}
            >
              <Image
                src={imgs.addMoreFunc}
                mode='widthFix'
                className='ldm-communications-communicationsBar-addFunc'
                onClick={onGetMoreFunc}
              />
            </AtInput>
          </View>
          <View className={cns('at-col-2',
            'ldm-communications-communicationsBar-post'
          )}>
            {/*按钮发布区域: 使用formId进行发起一次有formId的模板消息请求*/}
            <AtButton
              size='small'
              className='ldm-communications-communicationsBar-post-button'
              onClick={onConfirm}
            >
              发送
            </AtButton>
          </View>
        </View>
        <Panel
          className='ldm-communications-panel'
          isPanel={isPanel}
        >
          {this.props.renderPanel}
        </Panel>
      </Block>
    )
  }
}

export default InputPanel;
