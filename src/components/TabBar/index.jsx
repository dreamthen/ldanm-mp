import Taro, {Component} from '@tarojs/taro';
import PropTypes from 'prop-types';
import {
  View
} from '@tarojs/components';
import cns from 'classnames';
import {
  AtTabBar
} from 'taro-ui';

import Ldanm from '../utils';
import * as constants from './constants';

import './index.less';

/**
 * 抽象分享页面业务组件
 * @尹文楷
 */
class TabBar extends Component {
  static options = {
    addGlobalClass: true
  };

  static propTypes = {
    //底部导航栏的外部传入样式
    className: PropTypes.string,
    //tab 列表
    tabList: PropTypes.array.isRequired,
    //字体大小
    fontSize: PropTypes.number,
    //图标大小
    iconSize: PropTypes.number,
    //背景颜色
    backgroundColor: PropTypes.string,
    //是否固定底部
    fixed: PropTypes.bool,
    //选中标签字体与图标颜色
    selectedColor: PropTypes.string,
    //未选中标签字体与图标颜色
    color: PropTypes.string,
    //当前选中的标签索引值，从0计数
    current: PropTypes.number,
    //点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化
    onChange: PropTypes.func.isRequired
  };

  state = {};

  static getDerivedStateFromProps(props, state) {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
    const {
      className = '',
      tabList = [],
      current = 0,
      color = '#333',
      selectedColor = '#6190E8',
      fixed = false,
      backgroundColor = '#fff',
      iconSize = 24,
      fontSize = 14,
      onChange = () => {
      }
    } = this.props;
    const {isX} = Ldanm.adaptationNavBar();
    return (
      <View className={cns('keryi-tabBar', className)}>
        <AtTabBar
          className='keryi-tabBar-component'
          customStyle={{height: `${constants.tabBarConstantsHeight[isX]}PX`, padding: 0}}
          tabList={tabList}
          onClick={onChange}
          current={current}
          color={color}
          selectedColor={selectedColor}
          fixed={fixed}
          backgroundColor={backgroundColor}
          iconSize={iconSize}
          fontSize={fontSize}
        />
      </View>
    )
  }
}

export default TabBar;
