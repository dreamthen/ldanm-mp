# hupu-mp
hupu微信小程序-功能组件(基于taro)

PS: 需要node > 8的node版本

> 搭建

```bash
    npm install -g @tarojs/cli
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

> LdanmLogin

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| canClick | boolean | 是否以按钮点击登录,否则立即登录 | false |
| url | string | 匹配token登录的url | '' |
| method | string | 匹配token登录的请求方式 | 'get' |
| header | object | 匹配token登录的请求头部 | {'content-type': 'application/json'} |
| callBack | function | 登录之后的回调函数 | (res) => {} |
| className | string | 外部传入样式表 | '' |
| done | function | 登录完全完成的回调函数 | (res) => {} |

### 获取个人信息

> LdanmUserInfo

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| type | string | 选择个人信息的类型('userInfo' or 'phone') | 'userInfo' |
| visible | boolean | 是否显示点击获取个人信息的按钮 | true |
| callBack | function | 保存或者获取用户个人信息成功之后的回调 | (res) => {} |
| text | string | 点击获取用户个人信息按钮的文案 | '' |
| renderButtonDetail | ReactElement | 是否自定义获取用户个人信息按钮的文案信息 | {} |
| className | string | 外部传入样式表 | '' |
| done | function | 保存或者获取用户个人信息完成之后的回调 | (res) => {} |

### 顶部自定义导航

> LdanmNavBar

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| title | string | 自定义顶部导航栏的标题 | '' |
| className | string | 外部传入样式表 | '' |
| color | string | 链接文字跟图标颜色,不包括标题 | '' |
| leftIconPrefixClass | string | 左边图标className 前缀,用于第三方字体图标库,比如'iconfont' | '' |
| leftIconType | string | 左边图标类型,与leftIconPrefixClass关联,如果leftIconPrefixClass设置的为iconfont,那么此值设置后,结果就是iconfont-xxx | '' |
| onClickLeftIcon | function | 左边第一个图标类型点击事件 | (event) => {} ) |
| imgs | any | 是否传入的是图片，而不是icon，如果为图片就使用图片，否则使用icon | '' |

### 底部自定义导航

> LdanmTabBar

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
| onChange | function | 点击触发事件，开发者需要通过 onClick 事件来更新 current 值变化,必填 | (current) => {} |

### 图片选择器

> LdanmImagePicker

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| className | string | 外部传入样式表 | '' |
| files | array<object> | 图片文件数组,元素为对象,包含属性 url（必选) | [] |
| mode | enum | 图片预览模式,详见(微信开发者文档) | 'scaleToFill' |
| showAddBtn | boolean | 是否显示添加图片按钮 | true |
| multiple | boolean | 是否支持多选 | false |
| count | number | 最多可以选择的图片张数,2.0.2版本起支持 | 9 |
| sizeType | array | 所选的图片的尺寸,2.0.2版本起支持 | [] |
| sourceType | array | 选择图片的来源,2.0.2版本起支持 | [] |
| length | number | 单行的图片数量 | 3 |
| onChange | function | files 值发生变化触发的回调函数,operationType 操作类型有添加,移除,如果是移除操作,则第三个参数代表的是移除图片的索引 | (files: Array, operationType: string, index: number) => void |
| onImageClick | function | 点击图片触发的回调 | (index: number, file: Object) => void |
| onFail | function | 选择失败触发的回调 | (msg: string) => void |

