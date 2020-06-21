import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import NavBar from '../../components/NavBar';

import {imgs} from '../../assets';

import 'taro-ui/dist/style/components/icon.scss';
import 'taro-ui/dist/style/components/flex.scss';


class NavBarDemo extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {};

  config = {
    navigationBarTitleText: '',
    navigationStyle: 'custom'
  };

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
