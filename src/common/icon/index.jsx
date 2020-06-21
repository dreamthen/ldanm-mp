import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Text} from '@tarojs/components';
import Taro from '@tarojs/taro';
import AtComponent from '../component';
import Ldanm from '../../components/utils';

Ldanm.initTest();

export default class AtIcon extends AtComponent {

  handleClick = () => {
    this.props.onClick && this.props.onClick(arguments);
  };

  render(){
    const {
      customStyle,
      className,
      prefixClass,
      value,
      size,
      color
    } = this.props

    const rootStyle = {
      fontSize: `${Taro.pxTransform(parseInt(String(size)) * 2)}`,
      color
    }

    const iconName = value ? `${prefixClass}-${value}` : ''
    return (
      <Text
        className={classNames(prefixClass, iconName, className)}
        style={this.mergeStyle(rootStyle, customStyle)}
        onClick={this.handleClick.bind(this)}
      ></Text>
    )
  }
}

AtIcon.defaultProps = {
  customStyle: '',
  className: '',
  prefixClass: 'at-icon',
  value: '',
  color: '',
  size: 24,
  onClick: () => {
  }
}

AtIcon.propTypes = {
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string]),
  prefixClass: PropTypes.string,
  value: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onClick: PropTypes.func
}
