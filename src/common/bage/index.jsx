import classNames from 'classnames';
import PropTypes from 'prop-types';
import {View} from '@tarojs/components';
import AtComponent from '../../../common/component';

export default class AtBadge extends AtComponent {

  constructor(props) {
    super(props)
    this.state = {}
  }

  formatValue = (
    value = '',
    maxValue = ''
  ) => {
    if (value === '' || value === null || value === undefined) return ''
    const numValue = +value
    if (Number.isNaN(numValue)) {
      return value
    }
    return numValue > maxValue ? `${maxValue}+` : numValue;
  }

  render() {
    const {dot, value, maxValue, customStyle} = this.props;
    const rootClassName = ['at-badge'];

    const val = this.formatValue(value, maxValue);

    return (
      <View
        className={classNames(rootClassName, this.props.className)}
        style={customStyle}
      >
        {this.props.children}
        {dot ? (
          <View className='at-badge__dot'></View>
        ) : (
          val !== '' && <View className='at-badge__num'>{val}</View>
        )}
      </View>
    )
  }
}

AtBadge.defaultProps = {
  dot: false,
  value: '',
  maxValue: 99,
  customStyle: {},
  className: ''
}

AtBadge.propTypes = {
  dot: PropTypes.bool,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxValue: PropTypes.number,
  customStyle: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  className: PropTypes.oneOfType([PropTypes.array, PropTypes.string])
}
