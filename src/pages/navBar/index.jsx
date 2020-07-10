import React, {Component} from "react";
import Taro from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import NavBar from '../../components/NavBar';

import {imgs} from '../../assets';


class NavBarDemo extends Component {

  state = {};

  componentDidMount() {

  }

  /**
   * 回到上一主页页面
   */
  onBackHandler = (e) => {
    Taro.navigateBack({
      delta: 1
    });
    e.stopPropagation();
  };

  render() {
    const {
      onBackHandler = () => {
      }
    } = this;
    return (
      <View className='ldm-navBar'>
        <NavBar
          title='自定义导航'
          imgs={imgs.back}
          onClickLeftIcon={onBackHandler}
        />
        <View>
          你好,我叫尹文楷
        </View>
      </View>
    )
  }
}

export default NavBarDemo;
