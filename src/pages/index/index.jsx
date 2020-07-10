import React, {Component} from 'react';
import {View} from '@tarojs/components';
import {connect} from 'react-redux';
import cns from 'classnames';

import {mpFuncConfig} from './constants';

import './index.scss'


@connect((state) => ({}), (dispatch) => ({}))
class Index extends Component {
  componentWillMount() {
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
  }

  componentWillUnmount() {
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
