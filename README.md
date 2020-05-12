# keryi-mp
小程序-功能组件(基于taro)

## 登录

> AcLogin

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| canClick | boolean | 是否以按钮点击登录,否则立即登录 | false |
| url | string | 匹配token登录的url | '' |
| method | string | 匹配token登录的请求方式 | 'get' |
| header | object | 匹配token登录的请求头部 | {'content-type': 'application/json'} |
| callBack | function | 登录之后的回调函数 | (res) => {} |
| className | string | 外部传入样式表 | '' |
| done | function | 登录完全完成的回调函数 | (res) => {} |

## 获取个人信息

> AcUserInfo

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| type | string | 选择个人信息的类型('userInfo' or 'phone') | 'userInfo' |
| visible | boolean | 是否显示点击获取个人信息的按钮 | true |
| callBack | function | 保存或者获取用户个人信息成功之后的回调 | (res) => {} |
| text | string | 点击获取用户个人信息按钮的文案 | '' |
| renderButtonDetail | ReactElement | 是否自定义获取用户个人信息按钮的文案信息 | {} |
| className | string | 外部传入样式表 | '' |
| done | function | 保存或者获取用户个人信息完成之后的回调 | (res) => {} |
