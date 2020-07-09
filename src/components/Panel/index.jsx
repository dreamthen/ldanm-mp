import React, {Component} from 'react';
import PropTypes from 'prop-types';
import cns from 'classnames';
import {
  View
} from '@tarojs/components';

import './index.less';

/**
 * 抽象板块组件
 */
class Panel extends Component {
  static propTypes = {
    //外部传入的样式表
    className: PropTypes.string,
    //是否存在弹出面板浮层
    isPanel: PropTypes.bool.isRequired
  };

  constructor(props) {
    super(props);
  }

  state = {
    height: 0,
    isPanel: false
  };

  static getDerivedStateFromProps(props, state) {
    const {isPanel = false, style = {}} = props;
    const {isPanel: next_isPanel} = state;
    if (isPanel !== next_isPanel) {
      return {
        height: next_isPanel ? style.height ? style.height : 180 : 0
      }
    }
    return null;
  }

  render() {
    const {props} = this;
    const {isPanel = false, style = {}, className = ''} = props;
    const {height = 0} = this.state;
    return (
      React.createElement(View, {
        className: cns(
          'ldm-panel',
          {
            'ldm-panel-show': isPanel
          },
          className
        ),
        style: Object.assign({
          height: `${height}px`
        }, style)
      }, this.props.children)
    )
  }
}

export default Panel;
