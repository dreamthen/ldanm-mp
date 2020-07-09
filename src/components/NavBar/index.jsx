import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Ldanm from '../utils';
import {
  Block,
  Image,
  View
} from '@tarojs/components';
import {
  AtIcon
} from '../../common/icon';
import cns from 'classnames';

import './index.less';

/**
 * 抽象顶部自定义导航组件
 * @尹文楷
 */
class NavBar extends Component {
  static propTypes = {
    //顶部导航栏的标题
    title: PropTypes.string.isRequired,
    //顶部导航栏的外部传入样式
    className: PropTypes.string,
    //链接文字跟图标颜色，不包括标题
    color: PropTypes.string,
    //className 前缀，用于第三方字体图标库
    leftIconPrefixClass: PropTypes.string,
    //左边图标类型
    leftIconType: PropTypes.string,
    //左边第一个图标类型点击事件
    onClickLeftIcon: PropTypes.func,
    //是否传入的是图片，而不是icon，如果为图片就使用图片，否则使用icon
    imgs: PropTypes.any
  };

  state = {
    //fix底部的填充部分的高度
    height: 0
  };

  static getDerivedStateFromProps(props, state) {
  }

  componentDidMount() {
    Taro.createSelectorQuery().in(this.$scope).select('#navBar').fields({
      size: true
    }, (res = {}) => {
      const {height = 0} = res;
      this.setState({
        height
      });
    }).exec()
  }

  componentWillReceiveProps(nextProps, nextContext) {
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
    const {title, className = '', color, leftIconPrefixClass, leftIconType, onClickLeftIcon, imgs = ''} = this.props;
    const {height = 0} = this.state;
    const {statusBarClassName} = Ldanm.adaptationNavBar() || {};
    return (
      React.createElement(Block, {},
        React.createElement(View, {
            id: 'navBar',
            className: cns(
              'ldm-navBar',
              statusBarClassName,
              className
            )
          },
          React.createElement(View, {
              className: cns('at-row',
                'at-row--no-wrap',
                'nav-bar'
              )
            },
            React.createElement(View, {
                className: cns('at-col',
                  'at-col-3',
                  'nav-bar-leftIcon'
                ),
                onClick: onClickLeftIcon
              }, imgs ? React.createElement(Image, {
                src: imgs,
                mode: 'widthFix',
                className: 'nav-bar-image'
              }) : React.createElement(AtIcon, {
                prefixClass: leftIconPrefixClass ? leftIconPrefixClass : 'at-icon',
                value: leftIconType,
                color,
                size: 20
              })
            ),
            React.createElement(View, {
              className: cns('at-col',
                'at-col-6',
                'nav-bar-title'
              )
            }, title),
            React.createElement(View, {
              className: cns('at-col',
                'at-col-3'
              )
            }, '')
          )
        ),
        React.createElement(View, {
          style: {height: `${height}PX`}
        }, '')
      )
    )
  }
}

export default NavBar;
