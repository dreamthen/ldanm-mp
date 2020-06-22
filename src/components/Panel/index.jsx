import Taro, {Component} from '@tarojs/taro';
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
  static options = {
    addGlobalClass: true
  };

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
    height: 0
  };

  componentWillReceiveProps(nextProps, nextContext) {
    const {isPanel = false, style = {}} = this.props;
    const {isPanel: next_isPanel} = nextProps;
    if (isPanel !== next_isPanel) {
      this.setState({
        height: next_isPanel ? style.height ? style.height : 180 : 0
      });
    }
  }

  render() {
    const {props} = this;
    const {isPanel = false, style = {}} = props;
    const {height = 0} = this.state;
    return (
      <View className={cns(
        'ldm-panel',
        {
          'ldm-panel-show': isPanel
        }
      )}
            style={Object.assign({
              height: `${height}px`
            }, style)}
      >
        {this.props.children}
      </View>
    )
  }
}

export default Panel;
