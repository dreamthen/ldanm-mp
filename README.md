# Ac_mp
拓海小程序-功能组件(基于taro)

## 登录

> AcLogin

| 属性名 | 属性类型 | 属性描述 | 默认值 |
| :----: | :----: | :----: | :----: |
| canClick | boolean | 是否以按钮点击登录,否则立即登录 | false |
| url | string | 匹配token登录的url | '' |
| method | string | 匹配token登录的请求方式 | 'get' |
| header | object | 匹配token登录的请求头部 | {'content-type': 'application/json'} |
| callBack | function | 登录之后的回调函数 | () => {} |
| className | string | 外部传入样式表 | '' |
| done | function | 登录完全完成的回调函数 | () => {} |
