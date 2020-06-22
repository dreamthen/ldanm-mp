import classNames from 'classnames';
import PropTypes from 'prop-types';
import {Input, Label, Text, View} from '@tarojs/components';
import Taro from '@tarojs/taro';
import AtComponent from '../../common/component';

function getInputProps(props) {
  const actualProps = {
    type: props.type,
    maxLength: props.maxLength,
    disabled: props.disabled,
    password: false
  }

  switch (actualProps.type) {
    case 'phone':
      actualProps.type = 'number'
      actualProps.maxLength = 11
      break
    case 'password':
      actualProps.type = 'text'
      actualProps.password = true
      break
    default:
      break
  }
  if (!props.disabled && !props.editable) {
    actualProps.disabled = true
  }
  return actualProps
}

export default class AtInput extends AtComponent {
  handleInput = (event) =>
    this.props.onChange(event.detail.value, event)

  handleFocus = (event) => {
    if (typeof this.props.onFocus === 'function') {
      this.props.onFocus(event.detail.value, event)
    }
  }

  handleBlur = (event) => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event.detail.value, event)
    }
    if (event.type === 'blur' && !this.inputClearing) {
      // fix # 583 AtInput 不触发 onChange 的问题
      this.props.onChange(
        event.detail.value,
        event
      )
    }
    // 还原状态
    this.inputClearing = false
  }

  handleConfirm = (event) => {
    if (typeof this.props.onConfirm === 'function') {
      this.props.onConfirm(event.detail.value, event)
    }
  }

  handleClick = (event) => {
    if (!this.props.editable && typeof this.props.onClick === 'function') {
      this.props.onClick(event)
    }
  }

  handleClearValue = (event) => {
    this.inputClearing = true
    this.props.onChange('', event)
  }

  handleKeyboardHeightChange = (
    event
  ) => {
    if (typeof this.props.onKeyboardHeightChange === 'function') {
      this.props.onKeyboardHeightChange(event)
    }
  }

  handleErrorClick = (event) => {
    if (typeof this.props.onErrorClick === 'function') {
      this.props.onErrorClick(event)
    }
  }

  render() {
    const {
      className,
      customStyle,
      name,
      cursorSpacing,
      confirmType,
      cursor,
      selectionStart,
      selectionEnd,
      adjustPosition,
      border,
      title,
      error,
      clear,
      placeholder,
      placeholderStyle,
      placeholderClass,
      autoFocus,
      focus,
      value,
      required
    } = this.props
    const {type, maxLength, disabled, password} = getInputProps(this.props)

    const rootCls = classNames(
      'at-input',
      {
        'at-input--without-border': !border
      },
      className
    )
    const containerCls = classNames('at-input__container', {
      'at-input--error': error,
      'at-input--disabled': disabled
    })
    const overlayCls = classNames('at-input__overlay', {
      'at-input__overlay--hidden': !disabled
    })
    const placeholderCls = classNames('placeholder', placeholderClass)

    return (
      <View className={rootCls} style={customStyle}>
        <View className={containerCls}>
          <View className={overlayCls} onClick={this.handleClick}></View>
          {title && (
            <Label
              className={`at-input__title ${required &&
              'at-input__title--required'}`}
              for={name}
            >
              {title}
            </Label>
          )}
          <Input
            className='at-input__input'
            id={name}
            name={name}
            type={type}
            password={password}
            placeholderStyle={placeholderStyle}
            placeholderClass={placeholderCls}
            placeholder={placeholder}
            cursorSpacing={cursorSpacing}
            maxLength={maxLength}
            autoFocus={autoFocus}
            focus={focus}
            value={value}
            confirmType={confirmType}
            cursor={cursor}
            selectionStart={selectionStart}
            selectionEnd={selectionEnd}
            adjustPosition={adjustPosition}
            onInput={this.handleInput}
            onFocus={this.handleFocus}
            onBlur={this.handleBlur}
            onConfirm={this.handleConfirm}
            // eslint-disable-next-line @typescript-eslint/ban-ts-ignore
            // @ts-ignore
            onKeyboardHeightChange={this.handleKeyboardHeightChange}
          />
          {clear && value && (
            <View className='at-input__icon' onTouchEnd={this.handleClearValue}>
              <Text className='at-icon at-icon-close-circle at-input__icon-close'></Text>
            </View>
          )}
          {error && (
            <View
              className='at-input__icon'
              onTouchStart={this.handleErrorClick}
            >
              <Text className='at-icon at-icon-alert-circle at-input__icon-alert'></Text>
            </View>
          )}
          <View className='at-input__children'>{this.props.children}</View>
        </View>
      </View>
    )
  }
}

AtInput.defaultProps = {
  className: '',
  customStyle: '',
  value: '',
  name: '',
  placeholder: '',
  placeholderStyle: '',
  placeholderClass: '',
  title: '',
  cursorSpacing: 50,
  confirmType: 'done',
  cursor: 0,
  selectionStart: -1,
  selectionEnd: -1,
  adjustPosition: true,
  maxLength: 140,
  type: 'text',
  disabled: false,
  border: true,
  editable: true,
  error: false,
  clear: false,
  autoFocus: false,
  focus: false,
  required: false,
  onChange: () => {
  },
  onFocus: () => {
  },
  onBlur: () => {
  },
  onConfirm: () => {
  },
  onErrorClick: () => {
  },
  onClick: () => {
  }
}

AtInput.propTypes = {
  className: PropTypes.oneOfType([PropTypes.string, PropTypes.array]),
  customStyle: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  name: PropTypes.string,
  placeholder: PropTypes.string,
  placeholderStyle: PropTypes.string,
  placeholderClass: PropTypes.string,
  title: PropTypes.string,
  confirmType: PropTypes.string,
  cursor: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectionStart: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  selectionEnd: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  adjustPosition: PropTypes.bool,
  cursorSpacing: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  maxLength: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  type: PropTypes.string,
  disabled: PropTypes.bool,
  border: PropTypes.bool,
  editable: PropTypes.bool,
  error: PropTypes.bool,
  clear: PropTypes.bool,
  autoFocus: PropTypes.bool,
  focus: PropTypes.bool,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  onBlur: PropTypes.func,
  onConfirm: PropTypes.func,
  onErrorClick: PropTypes.func,
  onClick: PropTypes.func,
  required: PropTypes.bool
}
