import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {connect} from '@tarojs/redux';

import './index.less'


@connect((state) => ({
}), (dispatch) => ({
}))
class Index extends Component {
  //配置
  config = {
    navigationBarTitleText: '首页'
  };
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
  }

  componentDidShow() {
  }

  componentDidHide() {
  }

  render() {
    return (
      <View className='component'>

      </View>
    )
  }
}

export default Index
