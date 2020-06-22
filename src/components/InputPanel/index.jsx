import Taro, {Component} from '@tarojs/taro';
import PropTypes from 'prop-types';
import cns from 'classnames';
import {
  Block,
  View
} from '@tarojs/components';
import AtInput from "../../common/input";
import Panel from "../Panel";

import './index.less';

/**
 * 抽象消息功能发送组件
 */
class InputPanel extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //input消息功能发送输入框距离手机底部的距离
    inputDistanceBoard: PropTypes.number,
    //外部传入的样式表
    className: PropTypes.string,
    //是否存在弹出面板浮层
    isPanel: PropTypes.bool.isRequired,
    //面板浮层渲染的内容
    renderPanel: PropTypes.element
  };

  state = {
    //input消息功能发送输入框距离手机底部的距离
    inputDistanceBoard: 0,
    //是否存在弹出面板浮层
    isPanel: false
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

  render() {
    const {
      inputDistanceBoard = 0,
      isPanel = false
    } = this.state;
    const {
      onBlurHandler = () => {},
      onKeyboardChangeHandler = () => {}
    } = this;
    return (
      <Block>
        {/*<View*/}
        {/*  className={cns('at-row',*/}
        {/*    'at-row--no-wrap',*/}
        {/*    'pet-communications-communicationsBar')*/}
        {/*  }*/}
        {/*  style={{bottom: `${inputDistanceBoard}px`}}*/}
        {/*>*/}
        {/*  <View className={cns('at-col-10',*/}
        {/*    'pet-communications-communicationsBar-input')*/}
        {/*  }>*/}
        {/*    <AtInput*/}
        {/*      type='text'*/}
        {/*      maxLength={100}*/}
        {/*      className={cns(*/}
        {/*        'pet-communications-communicationsBar-communicationsValue',*/}
        {/*        {'pet-communications-communicationsBar-communicationsValue-focus': !!isFocus}*/}
        {/*      )}*/}
        {/*      placeholder={constants.communicationsBar.input.placeholder}*/}
        {/*      adjustPosition={false}*/}
        {/*      value={communicationsValue}*/}
        {/*      onChange={onChangeValueHandler}*/}
        {/*      onFocus={onFocusHandler}*/}
        {/*      onKeyboardHeightChange={onKeyboardChangeHandler}*/}
        {/*      onBlur={onBlurHandler}*/}
        {/*      onConfirm={onPostMessageHandler}*/}
        {/*    >*/}
        {/*      <Image*/}
        {/*        src={imgs.addMoreFunc}*/}
        {/*        mode='widthFix'*/}
        {/*        className='pet-communications-communicationsBar-addFunc'*/}
        {/*        onClick={onGetMoreFuncHandler}*/}
        {/*      />*/}
        {/*    </AtInput>*/}
        {/*  </View>*/}
        {/*  <View className={cns('at-col-2',*/}
        {/*    'pet-communications-communicationsBar-post'*/}
        {/*  )}>*/}
        {/*    /!*按钮发布区域: 使用formId进行发起一次有formId的模板消息请求*!/*/}
        {/*    <AtButton*/}
        {/*      size='small'*/}
        {/*      className='pet-communications-communicationsBar-post-button'*/}
        {/*      onClick={onPostMessageHandler}*/}
        {/*    >*/}
        {/*      发送*/}
        {/*    </AtButton>*/}
        {/*  </View>*/}
        {/*</View>*/}
        {/*<Panel*/}
        {/*  className='pet-communications-panel'*/}
        {/*  isPanel={isPanel}*/}
        {/*>*/}
        {/*  {this.props.renderPanel}*/}
        {/*</Panel>*/}
      </Block>
    )
  }
}

export default InputPanel;
