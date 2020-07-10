import React, {Component} from 'react';
import {
  View
} from '@tarojs/components';
import * as constants from './constants';
import TabBar from '../../components/TabBar';


class TabBarDemo extends Component {

  state = {
    //当前选中的标签索引值，从0计数
    current: 0
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
      <View className='ldm-tabBar'>
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
