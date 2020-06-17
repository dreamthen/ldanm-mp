import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import * as constants from './constants';
import TabBar from "../../components/TabBar";

import 'taro-ui/dist/style/components/tab-bar.scss';
import 'taro-ui/dist/style/components/badge.scss';


class TabBarDemo extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {
    //当前选中的标签索引值，从0计数
    current: 0
  };

  config = {
    navigationBarTitleText: '底部自定义导航栏'
  };

  componentDidMount() {
  }

  /**
   * 切换tab时进行监听的方法
   */
  onChangeHandler = (current) => {
    this.setState({
      current
    });
  };

  render() {
    const {onChangeHandler} = this;
    const {current = 0} = this.state;
    return (
      <View className='hupu-tabBar'>
        <TabBar
          fixed
          tabList={constants.tabBarConfig}
          current={current}
          onChange={onChangeHandler}
        />
      </View>
    )
  }
}

export default TabBarDemo;
