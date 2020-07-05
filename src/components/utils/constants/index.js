// 图片的限制大小
const maxFileSize = 1024 * 1024;

//提示语
const message = {
  maxFileSize: {
    type: 'warning',
    message: '上传的图片过大,不可超过1M!'
  }
};

export {
  maxFileSize,
  message
};
