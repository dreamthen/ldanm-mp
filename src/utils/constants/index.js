// 图片的限制大小
const maxFileSize = 1024 * 1024;

//提示语
const message = {
  maxFileSize: {
    type: 'warning',
    message: '上传的图片过大,不可超过1M!'
  }
};

/**
 * 文档类型
 * @type {{xWWWUrlEncoded: string}}
 */
const contentType = {
  xWWWUrlEncoded: 'x-www-form-urlencoded'
};

export {
  maxFileSize,
  message,
  contentType
};
