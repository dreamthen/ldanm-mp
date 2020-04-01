import Taro, {Component} from '@tarojs/taro';
import {View} from '@tarojs/components';
import {connect} from '@tarojs/redux';
import cns from 'classnames';

import {mpFuncConfig} from './constants';

import './index.less'


@connect((state) => ({}), (dispatch) => ({}))
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
        {
          mpFuncConfig && mpFuncConfig.length > 0 && mpFuncConfig.map(mpItem => {
            return (
              <View key={mpItem.id} onClick={mpItem.onClick} className={cns('component-item', mpItem.className)}>
                {mpItem.name}
              </View>
            )
          })
        }
      </View>
    )
  }
}

export default Index
