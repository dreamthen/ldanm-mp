import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import * as constants from './constants';
import {
  KeryiTabBar
} from '../../components';

import "taro-ui/dist/style/components/tab-bar.scss";
import "taro-ui/dist/style/components/badge.scss";


class TabBar extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {};

  config = {
    navigationBarTitleText: '底部自定义导航栏'
  };

  componentDidMount() {
  }

  /**
   * 切换tab时进行监听的方法
   */
  onChangeHandler = () => {

  };

  render() {
    const {onChangeHandler} = this;
    return (
      <View className='hupu-tabBar'>
        <KeryiTabBar
          fixed
          tabList={constants.tabBarConfig}
          onChange={onChangeHandler}
        />
      </View>
    )
  }
}

export default TabBar;
