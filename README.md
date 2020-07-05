# ldm-taro-frc
拉旦木微信小程序-功能组件(基于taro以及taro-ui)

PS: 需要node > 8的node版本

> 搭建

```bash
    npm install -g @tarojs/cli
    npm install taro-ui
```

```bash
    npm install 
    #或者
    npm i
    #或者
    yarn
```

> 开发环境

```bash
    yarn run dev:weapp
    #或者
    npm run dev:weapp
```

> 生产环境

直接在微信开发者工具里面,点击上传即可

<a href='https://developers.weixin.qq.com/miniprogram/dev/devtools/stable.html'>微信开发者工具</a>

> Api

<a href='https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/getstart.html#%E7%94%B3%E8%AF%B7%E5%B8%90%E5%8F%B7'>微信官方文档</a>

<a href='https://taro-docs.jd.com/taro/docs/README.html'>taro官方文档</a>

两套文档基本上是一致的

## 文档

### 登录

> Login

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| canClick | boolean | 是否以按钮点击登录,否则立即登录 | false |
| url | string | 匹配token登录的url | '' |
| method | string | 匹配token登录的请求方式 | 'get' |
| header | object | 匹配token登录的请求头部 | {'content-type': 'application/json'} |
| callBack | function | 登录之后的回调函数 | (res) => void |
| className | string | 外部传入样式表 | '' |
| done | function | 登录完全完成的回调函数 | (res) => void |

> 使用

```jsx
    import Taro, {Component} from '@tarojs/taro';
    import {
      View,
      Button
    } from '@tarojs/components';
    import {
        LdmLogin,
        LdmOutLogin
    } from 'ldm-taro-frc';
    
    
    class LoginDemo extends Component {
      static options = {
        addGlobalClass: true
      };
    
      state = {};
    
      config = {
        navigationBarTitleText: '登录'
      };
    
      componentDidMount() {
      }
    
      render() {
        return (
          <View className='ldm-login'>
            直接登录:
            <LdmLogin
              canClick={false}
              url='https://hupu.com/public/index.php/program/login'
              method='post'
              header={{
                'content-type': 'application/x-www-form-urlencoded'
              }}
              callBack={(data, header) => {
                console.log(data);
              }}
              done={(res) => {
                console.log(res);
              }}
            />
            点击按钮登录:
            <LdmLogin
              canClick
              className='ldm-login-button'
              url='https://hupu.com/public/index.php/program/login'
              method='post'
              header={{
                'content-type': 'application/x-www-form-urlencoded'
              }}
              callBack={(data, header) => {
                console.log(data);
              }}
              done={(res) => {
                console.log(res);
              }}
            >
              <Button>
                点击登录
              </Button>
            </LdmLogin>
          </View>
        )
      }
    }
    
    export default LoginDemo;
```

### 外部登录

> OutLogin

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| url | string | 匹配token登录的url | '' |
| method | string | 匹配token登录的请求方式 | 'get' |
| header | object | 匹配token登录的请求头部 | {'content-type': 'application/json'} |
| callBack | function | 登录之后的回调函数 | (res) => void |
| done | function | 登录完全完成的回调函数 | (res) => void |

> 使用

```jsx
    import Taro, {Component} from '@tarojs/taro';
    import {
      View
    } from '@tarojs/components';
    import {
        LdmOutLogin
    } from 'ldm-taro-frc';
    
    
    class OutLoginDemo extends Component {
      static options = {
        addGlobalClass: true
      };
    
      state = {};
    
      config = {
        navigationBarTitleText: '登录'
      };
    
      componentDidMount() {
          LdmOutLogin({
            url: 'https://hupu.com/public/index.php/program/login',
            method: 'post',
            header: {
              'content-type': 'application/x-www-form-urlencoded'
            },
            callBack: (data, header) => {
              console.log(data);
            },
            done: (res) => {
              console.log(res);
            }
          });
      }
    
      render() {
        return (
          <View className='ldm-login'>
           
          </View>
        )
      }
    }
    
    export default OutLoginDemo;
```

### 获取个人信息

> UserInfo

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| lang | string | 返回用户信息的语言 | 'zh_CN' |
| buttonType | string | 按钮类型 | 'primary' |
| size | string | 按钮尺寸 | 'default' |
| type | string | 选择个人信息的类型('userInfo' or 'phone') | 'userInfo' |
| visible | boolean | 是否显示点击获取个人信息的按钮 | true |
| callBack | function | 保存或者获取用户个人信息成功之后的回调 | (res) => void |
| text | string | 点击获取用户个人信息按钮的文案 | '' |
| renderButtonDetail | ReactElement | 是否自定义获取用户个人信息按钮的文案信息 | {} |
| className | string | 外部传入样式表 | '' |
| done | function | 保存或者获取用户个人信息完成之后的回调 | (res) => void |

> 使用

```jsx
    import Taro, {Component} from '@tarojs/taro';
    import {
      View
    } from '@tarojs/components';
    import {
        LdmUserInfo
    } from 'ldm-taro-frc';
    
    
    class UserInfoDemo extends Component {
      static options = {
        addGlobalClass: true
      };
    
      state = {
        //用户昵称
        nickName: '',
        //用户头像
        avatar: '',
        //获取的手机号或者异常信息
        phone: '',
        //是否显示获取个人信息按钮
        show: true,
        //是否显示获取个人手机号码的按钮
        showPhone: true,
      };
    
      config = {
        navigationBarTitleText: '个人信息'
      };
    
      componentDidMount() {
        // 个人手机号码通过后台去判断是否已经存在这个手机号,然后去操作是否显示获取个人手机号码的按钮
        // this.setState({
        //   showPhone: false
        // });
      }
    
      /**
       * 获取用户的个人信息
       */
      getUserInfoHandler = (res = {}) => {
        const {detail = {}} = res;
        const {userInfo} = detail;
        if (userInfo) {
          const {nickName = '', avatarUrl = ''} = userInfo;
          this.setState({
            nickName,
            avatar: avatarUrl,
            show: false
          });
        }
      };
    
      /**
       * 获取用户的手机号码
       */
      getPhoneNumberHandler = (res = {}) => {
        const {detail = {}} = res;
        const {errMsg} = detail;
        if (errMsg) {
          this.setState({
            showPhone: false,
            phone: errMsg
          });
        }
      }
    
      render() {
        const {
          getUserInfoHandler = () => {
          },
          getPhoneNumberHandler = () => {
          }
        } = this;
        const {nickName = '', avatar = '', show = true, showPhone = true, phone = ''} = this.state;
        return (
          <View className='hupu-userInfo'>
            <LdmUserInfo visible={show} type='userInfo' text='获取个人信息' callBack={getUserInfoHandler}>
              用户名: {nickName}
              头像: {avatar}
            </LdmUserInfo>
            <LdmUserInfo visible={showPhone} type='phone' text='获取手机号码' callBack={getPhoneNumberHandler}>
              手机号码: {phone}
            </LdmUserInfo>
          </View>
        )
      }
    }
    
    export default UserInfoDemo;
```

### 顶部自定义导航

> NavBar

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| title | string | 自定义顶部导航栏的标题 | '' |
| className | string | 外部传入样式表 | '' |
| color | string | 链接文字跟图标颜色,不包括标题 | '' |
| leftIconPrefixClass | string | 左边图标className 前缀,用于第三方字体图标库,比如'iconfont' | '' |
| leftIconType | string | 左边图标类型,与leftIconPrefixClass关联,如果leftIconPrefixClass设置的为iconfont,那么此值设置后,结果就是iconfont-xxx | '' |
| onClickLeftIcon | function | 左边第一个图标类型点击事件 | (event) => void ) |
| imgs | any | 是否传入的是图片，而不是icon，如果为图片就使用图片，否则使用icon | '' |

> 使用

```jsx
    import Taro, {Component} from '@tarojs/taro';
    import {
      View
    } from '@tarojs/components';
    import {
        LdmNavBar
    } from 'ldm-taro-frc';
    
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
            <LdmNavBar
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
```

### 底部自定义导航

> TabBar

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| className | string | 外部传入样式表 | '' |
| tabList | array<object> | tab 静态配置列表,必填 | [] |
| fontSize | number | 字体大小 | 14 |
| iconSize | number | 图标大小 | 24 |
| backgroundColor | string | 背景颜色 | '#fff' |
| fixed | boolean | 是否固定底部 | false |
| selectedColor | string | 选中标签字体与图标颜色 | #6190E8 |
| color | string | 未选中标签字体与图标颜色 | #333 |
| current | number | 当前选中的标签索引值，从0计数 | 0 |
| onChange | function | 点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化,必填 | (current) => void |

> 使用

```jsx
    import Taro, {Component} from '@tarojs/taro';
    import {
      View
    } from '@tarojs/components';
    import {
        LdmTabBar
    } from 'ldm-taro-frc';
    
    import 'taro-ui/dist/style/components/tab-bar.scss';
    import 'taro-ui/dist/style/components/badge.scss';
    
    
    class TabBarDemo extends Component {
      static options = {
        addGlobalClass: true
      };
    
      state = {
        //当前选中的标签索引值，从0计数
        current: 0
      };
    
      config = {
        navigationBarTitleText: '底部自定义导航栏'
      };
    
      componentDidMount() {
      }
    
      /**
       * 切换tab时进行监听的方法
       */
      onChangeHandler = (current) => {
        this.setState({
          current
        });
      };
    
      render() {
        const {onChangeHandler} = this;
        const {current = 0} = this.state;
        return (
          <View className='hupu-tabBar'>
            <LdmTabBar
              fixed
              tabList={[{
                          title: '首页',
                          image: 'https://hupu-soccer.oss-cn-hangzhou.aliyuncs.com/huya/smallprogram/footer/home.png',
                          selectedImage: 'https://hupu-soccer.oss-cn-hangzhou.aliyuncs.com/huya/smallprogram/footer/home-selected.png'
                        }, {
                          title: '课程',
                          image: 'https://hupu-soccer.oss-cn-hangzhou.aliyuncs.com/huya/smallprogram/footer/course.png',
                          selectedImage: 'https://hupu-soccer.oss-cn-hangzhou.aliyuncs.com/huya/smallprogram/footer/course-selected.png'
                        }, {
                          title: '我的',
                          image: 'https://hupu-soccer.oss-cn-hangzhou.aliyuncs.com/huya/smallprogram/footer/me.png',
                          selectedImage: 'https://hupu-soccer.oss-cn-hangzhou.aliyuncs.com/huya/smallprogram/footer/me-selected.png'
                        }
              ]}
              current={current}
              onChange={onChangeHandler}
            />
          </View>
        )
      }
    }
    
    export default TabBarDemo;
```

### 图片选择器

> ImagePicker

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| action | string | 上传图片的url | '' |
| name | string | 文件对应的 key,开发者在服务端可以通过这个 key获取文件的二进制内容 | '' |
| header | object | HTTP请求 Header,Header中不能设置Referer | {'content-type': 'multipart/form-data'} |
| data | object | HTTP请求中其他额外的form data | {} |
| className | string | 外部传入样式表 | '' |
| files | array<object> | 图片文件数组,元素为对象,包含属性 url（必选) | [] |
| mode | enum | 图片预览模式,详见(微信开发者文档) | 'scaleToFill' |
| showAddBtn | boolean | 是否显示添加图片按钮 | true |
| multiple | boolean | 是否支持多选 | false |
| count | number | 最多可以选择的图片张数,2.0.2版本起支持 | 9 |
| sizeType | array | 所选的图片的尺寸,2.0.2版本起支持 | [] |
| sourceType | array | 选择图片的来源,2.0.2版本起支持 | [] |
| length | number | 单行的图片数量 | 3 |
| onAdd | function | files 值发生添加触发的回调函数,operationType 操作类型有添加,移除,如果是移除操作,则第三个参数代表的是移除图片的索引 | (data: {}, statusCode: number, {key: number, value: {}, total: number}) => void |
| onAddBefore | function | files 值发生添加触发前的回调函数 | () => void |
| onAddUploadBefore | function | files 值发生添加触发上传文件前的回调函数 | (file) => void |
| onRemove | function | files 值发生移除触发的回调函数,operationType 操作类型有添加,移除,如果是移除操作,则第三个参数代表的是移除图片的索引 | (file, index) => {} |
| onRemoveBefore | function | files 值发生移除触发前的回调函数 | (file, index) => void | 
| onImageClick | function | 点击图片触发的回调 | (index: number, file: Object) => void |
| onFail | function | 选择失败触发的回调 | (msg: string) => void |

> 使用

```jsx
    import Taro, {Component} from '@tarojs/taro';
    import {
      View
    } from '@tarojs/components';
    import {
        LdmImagePicker
    } from 'ldm-taro-frc';
    
    import 'taro-ui/dist/style/components/image-picker.scss';
    import 'taro-ui/dist/style/components/icon.scss';
    import './index.less';
    
    
    class ImagePickerDemo extends Component {
      static options = {
        addGlobalClass: true
      };
    
      state = {
        files: []
      };
    
      config = {
        navigationBarTitleText: '图片选择器'
      };
    
      componentDidMount() {
      }
    
      /**
       * 图片组添加时所触发的事件
       * @param file
       */
      onAdd = (data, statusCode, {key, value: fileItem, total: length}) => {
      }
    
      /**
       * 图片组添加触发前所触发的事件
       */
      onAddBefore = () => {
      }
    
      /**
       * 图片组添加触发上传文件前的回调函数
       * @param file
       */
      onAddUploadBefore = (file) => {
      }
    
      /**
       * 图片组移除文件的回调函数
       */
      onRemove = (file, index) => {
      }
    
      /**
       * 图片加载失败时所触发的事件
       * @param mes
       */
      onFail(mes) {
        console.log(mes)
      }
    
      /**
       * 点击预览图片时所触发的事件
       * @param index
       * @param file
       */
      onImageClick(index, file) {
        console.log(index, file)
      }
    
      render() {
        const {files = []} = this.state;
        const {
          onFail = () => {
          },
          onImageClick = () => {
          },
          onAdd = () => {
          },
          onAddBefore = () => {
          },
          onAddUploadBefore = () => {
          },
          onRemove = () => {
          }
        } = this;
        return (
          <View className='hupu-imagePicker'>
            <LdmImagePicker
              action='https://pet.api.1jtec.com/tinyStatics/uploadImg/v2'
              name='file'
              files={files}
              data={{type: 'ORMAL'}}
              onFail={onFail}
              onImageClick={onImageClick}
              onAdd={onAdd}
              onAddBefore={onAddBefore}
              onAddUploadBefore={onAddUploadBefore}
              onRemoveBefore={() => {}}
              onRemove={onRemove}
            />
          </View>
        )
      }
    }
    
    export default ImagePickerDemo;
```

### 消息功能发送

> InputPanel

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| className | string | 外部传入样式表 | '' |
| hasPanel | boolean | 是否存在面板浮层按钮 | true |
| onGetMoreFunc | function | 获取更多的功能(发送图片以及商品详情链接等等) | () => void |
| inputDistanceBoard | number | input消息功能发送输入框距离手机底部的距离 | 0 |
| isPanel | boolean | 是否存在弹出面板浮层 | false |
| isFocus | boolean | 是否输入咨询框聚焦 | false |
| renderPanel | function | 面板浮层渲染的内容 | () => void |
| value | string | 输入框当前值,开发者需要通过 onChange 事件来更新 value 值,必填 | '' |
| placeholder | string | 占位符 | string |
| onChange | function | 输入框值改变时触发的事件 | (event) => void |
| onConfirm | function | 点击完成按钮时触发,可以获取 event 参数 | () => void |
| onFocus | function | 输入框被选中时触发的事件 | () => void |
| onBlur | function | 输入框失去焦点时触发的事件 | (event) => void | 
| onKeyboardChange | function | 键盘高度发生变化的时候触发此事件 | (height) => void |

> 使用

```jsx
    import Taro, {Component} from '@tarojs/taro';
    import {
      View
    } from '@tarojs/components';
    import {
        LdmInputPanel
    } from 'ldm-taro-frc';
    
    import './index.less';
    
    import 'taro-ui/dist/style/components/flex.scss';
    import 'taro-ui/dist/style/components/button.scss';
    import 'taro-ui/dist/style/components/icon.scss';
    import 'taro-ui/dist/style/components/input.scss';
    import 'taro-ui/dist/style/components/loading.scss';
    
    
    class InputPanelDemo extends Component {
      static options = {
        addGlobalClass: true
      };
    
      state = {
        //是否输入咨询框聚焦
        isFocus: false,
        //是否存在弹出面板浮层
        isPanel: false,
        //获取手机键盘的高度转变为输入框底部的距离
        inputDistanceBoard: 0,
        //输入框当前值
        value: '',
      };
    
      config = {
        navigationBarTitleText: '消息功能发送'
      };
    
      componentDidMount() {
    
      }
    
      /**
       * 输入框值改变时触发的事件
       * @param val
       */
      onChangeValueHandler = (val) => {
        val = val.target ? val.target.value : val;
        this.setState({
          value: val
        });
      };
    
      /**
       * 输入框聚焦时触发
       * @尹文楷
       */
      onFocusHandler = (value) => {
        this.setState({
          isFocus: true,
          isPanel: false
        });
      };
    
      /**
       * 输入框失焦时触发
       * @尹文楷
       */
      onBlurHandler = (event) => {
        const {isPanel} = this.state;
        let new_state = Object.assign({}, {isFocus: false}, isPanel ? {} : {inputDistanceBoard: 0});
        this.setState(new_state);
      };
    
      /**
       * 监听键盘高度发生变化的时候触发此事件
       */
      onKeyboardChangeHandler = (height = 0) => {
        this.setState({
          inputDistanceBoard: height
        });
      };
    
      /**
       * 获取更多的功能(发送图片以及商品详情链接等等)
       */
      onGetMoreFuncHandler = () => {
        const {isPanel = false} = this.state;
        this.setState({
          inputDistanceBoard: !isPanel ? 180 : 0,
          isPanel: !isPanel
        });
      };
    
      /**
       * 输入进行咨询
       * @尹文楷
       */
      onPostMessageHandler = () => {
      };
    
      /**
       * 将面板隐藏
       */
      onPanelHide = (e = {}) => {
        this.setState({
          isPanel: false,
          isFocus: false,
          inputDistanceBoard: 0
        });
        //取消冒泡事件
        e.stopPropagation && e.stopPropagation();
      };
    
      render() {
        const {
          isPanel = false,
          isFocus = false,
          inputDistanceBoard = 0,
          value = ''
        } = this.state;
        const {
          onChangeValueHandler = () => {
          },
          onFocusHandler = () => {
          },
          onBlurHandler = () => {
          },
          onKeyboardChangeHandler = () => {
          },
          onPostMessageHandler = () => {
          },
          onGetMoreFuncHandler = () => {
          },
          onPanelHide = () => {
          }
        } = this;
        return (
          <Block>
            <View className='ldm-inputPanel'
                  onClick={onPanelHide}
            >
            </View>
            <View className='ldm-inputPanel-detail'>
              <LdmInputPanel
                inputDistanceBoard={inputDistanceBoard}
                isPanel={isPanel}
                isFocus={isFocus}
                value={value}
                placeholder='请输入内容'
                onFocus={onFocusHandler}
                onBlur={onBlurHandler}
                onChange={onChangeValueHandler}
                onConfirm={onPostMessageHandler}
                onKeyboardChange={onKeyboardChangeHandler}
                onGetMoreFunc={onGetMoreFuncHandler}
                renderPanel={<View>
                </View>}
              />
            </View>
          </Block>
        )
      }
    }
    
    export default InputPanelDemo;
```

> 样式

```less
    page {
      height: 100%;
    
      .ldm-inputPanel {
        position: relative;
        height: calc(100% - 52PX);
        z-index: 1;
      }
    
      .ldm-inputPanel-detail {
    
        .ldm-communications-communicationsBar {
          &-communicationsValue {
            &.at-input {
              &:after {
                border: none;
              }
            }
    
            .at-input {
    
              &__container {
                width: 100%;
              }
    
              &__input {
                padding: 16px 16px 16px 28px;
                margin-left: 16px;
                background-color: #f7f7f7;
                border-radius: 36px;
              }
    
              &__children {
                &:after {
                  border: none;
                }
              }
            }
          }
    
          &-post {
            &-button {
              width: 48PX;
              height: 36PX;
              line-height: 36PX;
              background-color: #fb2a5d;
              border-color: #fb2a5d;
              color: #fff;
            }
          }
    
    
          //.at-search-bar__input-cnt {
          //
          //    height: 36PX;
          //
          //  .at-search-bar__placeholder-wrap {
          //
          //
          //      height: 36PX;
          //      justify-content: flex-start;
          //      padding-left: 4PX;
          //
          //    .at-icon {
          //      display: none;
          //    }
          //  }
          //
          //  .at-search-bar__input {
          //    height: 36PX !important;
          //    font-size: 16PX !important;
          //    padding-left: 8PX;
          //  }
          //
          //  .at-search-bar__clear {
          //    height: 36PX;
          //    font-size: 16PX;
          //  }
          //}
          //
          //.at-search-bar__action {
          //  height: 36PX;
          //  line-height: 36PX;
          //  background-color: #fb2a5d;
          //}
          //
          //&-focus {
          //  .at-search-bar__action {
          //    margin-left: 10PX;
          //  }
          //}
        }
      }
    }
```

### 上传图片或者视频

> Upload

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| className | string | 外部传入样式表 | '' |
| count | number | 类型为图片时,最多可以选择的图片张数 | 9 |
| compressed | boolean | 类型为视频时,是否压缩所选择的视频文件 | true |
| maxDuration | number | 类型为视频时,拍摄视频最长拍摄时间,单位秒 | 60 |
| camera | string | 类型为视频时,默认拉起的是前置或者后置摄像头。部分 Android 手机下由于系统 ROM 不支持无法生效 | 'back' |
| type | string | 选择上传文件的类型,'image' or 'video',必传 | '' |
| sourceType | array | 选择图片 or 视频的来源,必传 | \['album'\] |
| sizeType | array | 所选的图片的尺寸 | \['original'\] |
| text | string | 上传文件组件内部文案 | '' |
| callBack | function | 上传文件成功或者失败之后的回调,必传 | (tempFilePath, size, duration, height, width) => void |
| done | function | 上传文件完成之后的回调,必传 | (res) => void |

> 使用

```jsx
import Taro, {Component} from '@tarojs/taro';
import {
  View
} from '@tarojs/components';
import {
    LdmUpload
} from 'ldm-taro-frc';

import 'taro-ui/dist/style/components/icon.scss';
import './index.less';


class UploadDemo extends Component {
  static options = {
    addGlobalClass: true
  };

  state = {};

  config = {
    navigationBarTitleText: '上传图片视频'
  };

  componentDidMount() {
  }

  render() {
    const {} = this;
    return (
      <View className='ldm-upload'>
        <View>
          上传图片:
          <LdmUpload
            className='ldm-upload-image'
            count={6}
            text='upload image'
            type='image'
            sourceType={['album', 'camera']}
            callBack={(path = '', size = 0) => {
              console.log(path);
            }}
            done={(res = {}) => {
              console.log(res);
            }}
          />
        </View>
        <View>
          上传视频:
          <LdmUpload
            className='ldm-upload-video'
            text='upload video'
            type='video'
            sourceType={['album', 'camera']}
            maxDuration={40}
            camera='back'
            callBack={(path = '', size = 0) => {
              console.log(path);
            }}
            done={(res = {}) => {
              console.log(res);
            }}
          />
        </View>
      </View>
    )
  }
}

export default UploadDemo;
```

> 样式

```less

.ldm-upload {
  &-image,
  &-video {
    width: 280px;
    border: 2px solid #333;
    margin: 20px 0;
    border-radius: 8px;
  }

  &-add {
    margin-right: 4px;
  }
}
```


